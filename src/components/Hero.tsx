import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Грузоперевозки в Витебске"
          className="w-full h-full object-cover scale-110 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-[floatParticle_8s_ease-in-out_infinite]"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <div className="overflow-hidden mb-2">
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm animate-[slideInFromLeft_0.6s_ease-out_forwards]">
              Профессиональные услуги
            </span>
          </div>
          
          <div className="overflow-hidden">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 animate-[slideInFromLeft_0.8s_ease-out_forwards]">
              Грузоперевозки по{" "}
              <span className="relative inline-block">
                Витебску
                <svg
                  className="absolute -bottom-2 left-0 w-full animate-[drawLine_1s_ease-out_0.8s_forwards]"
                  viewBox="0 0 200 10"
                  style={{ strokeDasharray: 200, strokeDashoffset: 200 }}
                >
                  <path
                    d="M0 5 Q50 0, 100 5 T200 5"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              и области
            </h1>
          </div>

          <p className="text-lg md:text-xl text-background/90 mb-8 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] opacity-0">
            Быстро, надежно и по выгодной цене. Доставим ваш груз в любую точку Беларуси.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards] opacity-0">
            <Button variant="hero" size="lg" className="group shine" asChild>
              <a href="#contacts">
                Заказать перевозку
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="group" asChild>
              <a href="#services">
                Наши услуги
                <span className="ml-2 inline-block transition-transform group-hover:translate-y-1">↓</span>
              </a>
            </Button>
          </div>

          {/* Stats preview */}
          <div className="mt-12 flex flex-wrap gap-8 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards] opacity-0">
            {[
              { value: "10+", label: "лет опыта" },
              { value: "5000+", label: "клиентов" },
              { value: "24/7", label: "поддержка" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-background">
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-background/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-background/80 hover:text-background transition-colors"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm font-medium">Прокрутите вниз</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </a>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(10px, -20px) scale(1.2); opacity: 0.6; }
          50% { transform: translate(-5px, -40px) scale(1); opacity: 0.4; }
          75% { transform: translate(15px, -20px) scale(1.3); opacity: 0.5; }
        }
        @keyframes slideInFromLeft {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
