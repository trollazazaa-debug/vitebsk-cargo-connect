import { Truck, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-lg">ВитебскГруз</div>
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
              <a href="#services" className="block text-background/70 hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#advantages" className="block text-background/70 hover:text-primary transition-colors">
                Преимущества
              </a>
              <a href="#fleet" className="block text-background/70 hover:text-primary transition-colors">
                Автопарк
              </a>
              <a href="#prices" className="block text-background/70 hover:text-primary transition-colors">
                Цены
              </a>
              <a href="#contacts" className="block text-background/70 hover:text-primary transition-colors">
                Контакты
              </a>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="tel:+375291234567"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +375 (29) 123-45-67
              </a>
              <a
                href="mailto:info@vitebskgruz.by"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@vitebskgruz.by
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                г. Витебск, ул. Московская, 83А
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center text-background/50 text-sm">
          © {new Date().getFullYear()} ВитебскГруз. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
