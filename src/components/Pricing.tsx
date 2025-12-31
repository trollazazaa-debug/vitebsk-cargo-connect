import { forwardRef } from "react";
import { Truck, Home, Settings, Users, MapPin, Building2, Sofa, Piano, Package, Wrench, HardHat, Trash2 } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const pricingCategories = [
  {
    title: "Грузоперевозки",
    icon: Truck,
    items: [
      { icon: MapPin, name: "Городские перевозки", price: "от 30 руб/час" },
      { icon: Truck, name: "Междугородние до 3т", price: "1 руб/км" },
      { icon: Truck, name: "Междугородние до 5т", price: "1.4 руб/км" },
    ],
  },
  {
    title: "Переезды",
    icon: Home,
    items: [
      { icon: Home, name: "Квартирный переезд", price: "от 30 руб/час" },
      { icon: Building2, name: "Офисный переезд", price: "от 30 руб/час" },
      { icon: Home, name: "Дачный переезд", price: "от 30 руб/час" },
    ],
  },
  {
    title: "Специализированные услуги",
    icon: Settings,
    items: [
      { icon: Sofa, name: "Перевозка мебели", price: "от 30 руб/час" },
      { icon: Package, name: "Перевозка оборудования", price: "от 30 руб/час" },
      { icon: Piano, name: "Перевозка пианино", price: "от 30 руб/час" },
      { icon: Package, name: "Тяжеловесные грузы", price: "от 30 руб/час" },
    ],
  },
  {
    title: "Дополнительные услуги",
    icon: Users,
    items: [
      { icon: Users, name: "Грузчики", price: "20 руб/час" },
      { icon: Wrench, name: "Сборка/разборка мебели", price: "20 руб/час" },
      { icon: HardHat, name: "Разнорабочие", price: "20 руб/час" },
      { icon: Trash2, name: "Вывоз мусора", price: "от 150 руб" },
    ],
  },
];

const Pricing = forwardRef<HTMLElement>((_, forwardedRef) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });
  return (
    <section id="prices" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div ref={titleRef} className={`scroll-fade-up ${titleVisible ? "visible" : ""}`}>
          <h2 className="section-title">Цены на наши услуги</h2>
          <p className="section-subtitle">
            Прозрачное ценообразование без скрытых платежей
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`card-service p-0 overflow-hidden group hover-lift scroll-fade-up ${
                cardsVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="price-card-header relative overflow-hidden">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
              
              <div className="p-4 space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-2 px-3 bg-secondary/50 rounded-lg group/item hover:bg-primary/10 transition-colors duration-300"
                    style={{ transitionDelay: `${(categoryIndex * 100) + (itemIndex * 50)}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-primary group-hover/item:scale-110 transition-transform" />
                      <span className="text-foreground">{item.name}</span>
                    </div>
                    <span className="price-badge group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors duration-300">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 p-4 bg-primary/10 rounded-xl text-center text-muted-foreground scroll-fade-up ${
            cardsVisible ? "visible" : ""
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          * Минимальное время заказа - 2 часа. Точная стоимость рассчитывается индивидуально в зависимости от объема работ и расстояния.
        </div>
      </div>
    </section>
  );
});

Pricing.displayName = "Pricing";

export default Pricing;
