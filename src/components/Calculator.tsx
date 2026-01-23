import { useState, forwardRef } from "react";
import { MapPin, Weight, Users, Calculator as CalcIcon, Truck, Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";

type TransportType = "city" | "intercity";

const Calculator = forwardRef<HTMLElement>((_, forwardedRef) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.1 });

  const [transportType, setTransportType] = useState<TransportType>("city");
  const [hours, setHours] = useState(2);
  const [distance, setDistance] = useState(50);
  const [weight, setWeight] = useState(500);
  const [loaders, setLoaders] = useState(1);

  // Pricing
  const CITY_VEHICLE_RATE = 35; // руб/час
  const LOADER_RATE = 15; // руб/час для грузчика
  const INTERCITY_RATE_3T = 1; // руб/км до 3т
  const INTERCITY_RATE_5T = 1.4; // руб/км до 5т

  const calculateCost = () => {
    if (transportType === "city") {
      const vehicleCost = hours * CITY_VEHICLE_RATE;
      const loadersCost = hours * loaders * LOADER_RATE;
      return vehicleCost + loadersCost;
    } else {
      // Intercity - выбираем тариф по весу
      const rate = weight <= 3000 ? INTERCITY_RATE_3T : INTERCITY_RATE_5T;
      const vehicleCost = distance * rate;
      const loadersCost = 2 * loaders * LOADER_RATE; // минимум 2 часа работы грузчиков
      return vehicleCost + loadersCost;
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="calculator" className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container-custom">
        <div ref={titleRef} className={`scroll-fade-up ${titleVisible ? "visible" : ""}`}>
          <h2 className="section-title">Калькулятор стоимости</h2>
          <p className="section-subtitle">
            Рассчитайте примерную стоимость перевозки
          </p>
        </div>

        <div
          ref={cardRef}
          className={`max-w-2xl mx-auto scroll-fade-up ${cardVisible ? "visible" : ""}`}
        >
          <div className="card-service p-6 md:p-8">
            {/* Transport Type Toggle */}
            <div className="flex rounded-xl overflow-hidden mb-8 bg-secondary">
              <button
                onClick={() => setTransportType("city")}
                className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${
                  transportType === "city"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Clock className="w-5 h-5" />
                <span className="font-medium">По городу</span>
              </button>
              <button
                onClick={() => setTransportType("intercity")}
                className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${
                  transportType === "intercity"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Truck className="w-5 h-5" />
                <span className="font-medium">Междугородние</span>
              </button>
            </div>

            <div className="space-y-8">
              {/* City: Hours slider */}
              {transportType === "city" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium">Время работы (часов)</span>
                  </div>
                  <Slider
                    value={[hours]}
                    onValueChange={(value) => setHours(value[0])}
                    min={1}
                    max={12}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 час</span>
                    <span className="text-primary font-semibold text-lg">{hours} ч</span>
                    <span>12 часов</span>
                  </div>
                </div>
              )}

              {/* Intercity: Distance slider */}
              {transportType === "intercity" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">Расстояние (км)</span>
                  </div>
                  <Slider
                    value={[distance]}
                    onValueChange={(value) => setDistance(value[0])}
                    min={10}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>10 км</span>
                    <span className="text-primary font-semibold text-lg">{distance} км</span>
                    <span>500 км</span>
                  </div>
                </div>
              )}

              {/* Weight slider (only for intercity) */}
              {transportType === "intercity" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <Weight className="w-5 h-5 text-primary" />
                    <span className="font-medium">Вес груза (кг)</span>
                  </div>
                  <Slider
                    value={[weight]}
                    onValueChange={(value) => setWeight(value[0])}
                    min={100}
                    max={5000}
                    step={100}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>100 кг</span>
                    <span className="text-primary font-semibold text-lg">{weight} кг</span>
                    <span>5000 кг</span>
                  </div>
                </div>
              )}

              {/* Loaders slider */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium">Количество грузчиков</span>
                </div>
                <Slider
                  value={[loaders]}
                  onValueChange={(value) => setLoaders(value[0])}
                  min={0}
                  max={4}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0</span>
                  <span className="text-primary font-semibold text-lg">{loaders}</span>
                  <span>4</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalcIcon className="w-5 h-5" />
                  <span>Примерная стоимость</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {Math.round(calculateCost())} руб
                </div>
                <Button
                  onClick={scrollToContact}
                  size="xl"
                  className="mt-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  Заказать перевозку
                </Button>
              </div>
            </div>

            {/* Pricing info */}
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-center text-muted-foreground">
                {transportType === "city" 
                  ? `* Машина — ${CITY_VEHICLE_RATE} руб/час, грузчик — ${LOADER_RATE} руб/час. Минимальный заказ — 1 час.`
                  : `* До 3т — ${INTERCITY_RATE_3T} руб/км, до 5т — ${INTERCITY_RATE_5T} руб/км. Грузчики — ${LOADER_RATE} руб/час.`
                }
              </p>
              <p className="text-xs text-center text-muted-foreground mt-1">
                Точная стоимость рассчитывается индивидуально
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Calculator.displayName = "Calculator";

export default Calculator;
