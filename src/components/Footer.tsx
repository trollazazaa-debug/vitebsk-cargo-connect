import { Truck, Phone, Mail, MapPin } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer ref={ref} className="bg-foreground text-background py-12 overflow-hidden">
      <div className="container-custom">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 scroll-fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-5 h-5 text-primary-foreground group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div>
                <div className="font-bold text-lg">ВитЭкспресс</div>
                <div className="text-xs text-background/60">Надежные грузоперевозки</div>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              Профессиональные грузоперевозки по Витебску и Беларуси. Работаем с 2014 года.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <nav className="space-y-2">
              {[
                { href: "#services", label: "Услуги" },
                { href: "#advantages", label: "Преимущества" },
                { href: "#fleet", label: "Автопарк" },
                { href: "#prices", label: "Цены" },
                { href: "#contacts", label: "Контакты" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-background/70 hover:text-primary hover:translate-x-1 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="tel:+375256775849"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                +375 (25) 677-58-49
              </a>
              <a
                href="mailto:info@vitexpress.by"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                info@vitexpress.by
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                г. Витебск, ул. Московская, 83А
              </div>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-background/20 pt-6 text-center text-background/50 text-sm scroll-fade-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          © {new Date().getFullYear()} ВитЭкспресс. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
