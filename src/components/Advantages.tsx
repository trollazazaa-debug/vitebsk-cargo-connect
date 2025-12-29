import { Shield, Clock, Star } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Лет на рынке" },
  { value: 5000, suffix: "+", label: "Довольных клиентов" },
  { value: 50, suffix: "+", label: "Единиц техники" },
  { value: 99, suffix: "%", label: "Доставок вовремя" },
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

const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="counter-animate">
      {count}{suffix}
    </span>
  );
};

const Advantages = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();

  return (
    <section id="advantages" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div ref={titleRef} className={`scroll-fade-up ${titleVisible ? "visible" : ""}`}>
          <h2 className="section-title">Почему выбирают нас</h2>
          <p className="section-subtitle">
            Более 10 лет на рынке грузоперевозок. Тысячи довольных клиентов
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center scroll-scale ${statsVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="stat-number">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={statsVisible} />
              </div>
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center group scroll-fade-up ${featuresVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="icon-box-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
                {/* Pulse ring on hover */}
                <div className="absolute inset-0 rounded-full bg-primary/30 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
