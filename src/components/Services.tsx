import { Truck, Trash2, Building2, Users } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

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
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="services" className="section-padding bg-section-alt overflow-hidden">
      <div className="container-custom">
        <div ref={titleRef} className={`scroll-fade-up ${titleVisible ? "visible" : ""}`}>
          <h2 className="section-title">Наши услуги</h2>
          <p className="section-subtitle">
            Предлагаем полный спектр услуг по грузоперевозкам для бизнеса и частных лиц
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-service hover-lift group cursor-pointer scroll-fade-up ${
                cardsVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="icon-box group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300 icon-bounce" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
              
              {/* Decorative line */}
              <div className="mt-4 h-0.5 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
