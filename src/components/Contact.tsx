import { useState, forwardRef } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+375 (25) 677-58-49",
    href: "tel:+375256775849",
  },
  {
    icon: Mail,
    label: "Email",
    value: "vitexpress.00@mail.ru",
    href: "mailto:vitexpress.00@mail.ru",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "г. Витебск, ул. Московская, 83А",
  },
];

const cargoTypes = [
  "Мебель",
  "Бытовая техника",
  "Строительные материалы",
  "Офисное оборудование",
  "Другое",
];

const Contact = forwardRef<HTMLElement>((_, forwardedRef) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cargoType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-order-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({ name: "", phone: "", cargoType: "", message: "" });
    } catch (error) {
      console.error('Error sending order:', error);
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, попробуйте позже или позвоните нам.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contacts" className="section-padding bg-section-alt relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-custom relative z-10">
        <div ref={titleRef} className={`scroll-fade-up ${titleVisible ? "visible" : ""}`}>
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-subtitle">
            Оставьте заявку, и мы рассчитаем стоимость перевозки
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div ref={formRef} className={`scroll-fade-left ${formVisible ? "visible" : ""}`}>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="group">
              <label className="block text-foreground font-medium mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                placeholder="Введите ваше имя"
              />
            </div>

            <div className="group">
              <label className="block text-foreground font-medium mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                placeholder="+375 (XX) XXX-XX-XX"
              />
            </div>

            <div className="group">
              <label className="block text-foreground font-medium mb-2">
                Тип груза
              </label>
              <select
                value={formData.cargoType}
                onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/10 appearance-none cursor-pointer"
              >
                <option value="">Выберите тип груза</option>
                {cargoTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="group">
              <label className="block text-foreground font-medium mb-2">
                Дополнительная информация
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/10 resize-none"
                placeholder="Опишите ваш груз и требования к перевозке"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full group shine relative overflow-hidden"
              disabled={isSubmitting}
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </span>
            </Button>
          </form>
          </div>

          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`space-y-6 scroll-fade-right ${infoVisible ? "visible" : ""}`}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Контактная информация
            </h3>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="icon-box-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-primary font-medium hover:text-primary/80 transition-colors link-underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="bg-background rounded-xl p-6 shadow-card mt-8 hover-lift">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary animate-pulse" />
                Режим работы
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground flex justify-between">
                  <span>Понедельник - Пятница:</span>
                  <span className="text-foreground font-medium">8:00 - 20:00</span>
                </p>
                <p className="text-muted-foreground flex justify-between">
                  <span>Суббота - Воскресенье:</span>
                  <span className="text-foreground font-medium">9:00 - 18:00</span>
                </p>
                <div className="pt-3 mt-3 border-t border-border">
                  <p className="text-primary font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Прием заказов круглосуточно
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
