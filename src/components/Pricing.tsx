import { Truck, Home, Settings, Users, MapPin, Building2, Sofa, Piano, Package, Wrench, HardHat, Trash2 } from "lucide-react";

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

const Pricing = () => {
  return (
    <section id="prices" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Цены на наши услуги</h2>
        <p className="section-subtitle">
          Прозрачное ценообразование без скрытых платежей
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingCategories.map((category) => (
            <div key={category.title} className="card-service p-0 overflow-hidden">
              <div className="price-card-header">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="p-4 space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-2 px-3 bg-secondary/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{item.name}</span>
                    </div>
                    <span className="price-badge">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-primary/10 rounded-xl text-center text-muted-foreground">
          * Минимальное время заказа - 2 часа. Точная стоимость рассчитывается индивидуально в зависимости от объема работ и расстояния.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
