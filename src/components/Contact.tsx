import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+375 (29) 123-45-67",
    href: "tel:+375291234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@vitebskgruz.by",
    href: "mailto:info@vitebskgruz.by",
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

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cargoType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", cargoType: "", message: "" });
  };

  return (
    <section id="contacts" className="section-padding bg-section-alt relative overflow-hidden">
      {/* Background Map Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-foreground/5" />
      </div>

      <div className="container-custom relative z-10">
        <h2 className="section-title">Свяжитесь с нами</h2>
        <p className="section-subtitle">
          Оставьте заявку, и мы рассчитаем стоимость перевозки
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-foreground font-medium mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Введите ваше имя"
              />
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="+375 (XX) XXX-XX-XX"
              />
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">
                Тип груза
              </label>
              <select
                value={formData.cargoType}
                onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="">Выберите тип груза</option>
                {cargoTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">
                Дополнительная информация
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder="Опишите ваш груз и требования к перевозке"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Отправить заявку
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Контактная информация
            </h3>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="icon-box-primary flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-primary font-medium hover:text-primary/80 transition-colors"
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
            <div className="bg-background rounded-xl p-6 shadow-card mt-8">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Режим работы
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Понедельник - Пятница: <span className="text-foreground">8:00 - 20:00</span>
                </p>
                <p className="text-muted-foreground">
                  Суббота - Воскресенье: <span className="text-foreground">9:00 - 18:00</span>
                </p>
                <p className="text-primary font-medium mt-3">
                  Прием заказов круглосуточно
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
