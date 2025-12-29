import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Грузоперевозки в Витебске"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 animate-fade-in">
            Грузоперевозки по Витебску и области
          </h1>
          <p className="text-lg md:text-xl text-background/90 mb-8 animate-fade-in animate-delay-100">
            Быстро, надежно и по выгодной цене. Доставим ваш груз в любую точку Беларуси.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
            <Button variant="hero" size="lg" asChild>
              <a href="#contacts">Заказать перевозку</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#services">Наши услуги</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
