import { Shield, Clock, Star } from "lucide-react";

const stats = [
  { value: "10+", label: "Лет на рынке" },
  { value: "5000+", label: "Довольных клиентов" },
  { value: "50+", label: "Единиц техники" },
  { value: "99%", label: "Доставок вовремя" },
];

const features = [
  {
    icon: Shield,
    title: "Страхование груза",
    description: "Полное страхование груза на время перевозки. Ваша уверенность — наша ответственность.",
  },
  {
    icon: Clock,
    title: "Точность сроков",
    description: "Соблюдаем сроки доставки. Отслеживание груза в реальном времени.",
  },
  {
    icon: Star,
    title: "Опытные водители",
    description: "Профессиональные водители со стажем более 5 лет. Безопасность превыше всего.",
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Почему выбирают нас</h2>
        <p className="section-subtitle">
          Более 10 лет на рынке грузоперевозок. Тысячи довольных клиентов
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number">{stat.value}</div>
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="icon-box-primary mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
