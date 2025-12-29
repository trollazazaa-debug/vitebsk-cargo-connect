import { Truck, Trash2, Building2, Users } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Городские перевозки",
    description: "Быстрая доставка грузов по городу и области. Работаем круглосуточно.",
  },
  {
    icon: Trash2,
    title: "Вывоз мусора и стройматериалов",
    description: "Быстрый вывоз строительного мусора, старой мебели и других отходов.",
  },
  {
    icon: Building2,
    title: "Офисные переезды",
    description: "Профессиональная организация переезда офиса с упаковкой и сборкой мебели.",
  },
  {
    icon: Users,
    title: "Предоставление грузчиков",
    description: "Опытные грузчики для погрузки, разгрузки и переноса любых грузов.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-section-alt">
      <div className="container-custom">
        <h2 className="section-title">Наши услуги</h2>
        <p className="section-subtitle">
          Предлагаем полный спектр услуг по грузоперевозкам для бизнеса и частных лиц
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="icon-box">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
