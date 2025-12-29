import truckGazelle from "@/assets/truck-gazelle.png";
import truckSprinter from "@/assets/truck-sprinter.png";
import truck5ton from "@/assets/truck-5ton.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const vehicles = [
  {
    image: truckGazelle,
    name: "Газель",
    capacity: "до 1.5 тонн",
    volume: "9 м³",
    price: "от 35 BYN/час",
  },
  {
    image: truckSprinter,
    name: "Фургон Спринтер 3 тонн",
    capacity: "до 3 тонн",
    volume: "16 м³",
    price: "от 50 BYN/час",
  },
  {
    image: truck5ton,
    name: "Грузовик 5 тонн",
    capacity: "до 5 тонн",
    volume: "32 м³",
    price: "от 70 BYN/час",
  },
];

const Fleet = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="fleet" className="section-padding bg-section-alt overflow-hidden">
      <div className="container-custom">
        <div ref={titleRef} className={`scroll-fade-up ${titleVisible ? "visible" : ""}`}>
          <h2 className="section-title">Наш автопарк</h2>
          <p className="section-subtitle">
            Современный автопарк для перевозки любых грузов
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.name}
              className={`card-service text-center group hover-lift scroll-fade-up ${
                cardsVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-48 flex items-center justify-center mb-4 rounded-lg overflow-hidden relative">
                {/* Image with hover overlay */}
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Dark overlay with price on hover */}
                <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                  <span className="text-background text-2xl font-bold mb-2">{vehicle.price}</span>
                  <a
                    href="#contacts"
                    className="text-sm text-primary-foreground bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Заказать
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {vehicle.name}
              </h3>

              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-foreground font-medium">Грузоподъемность:</span> {vehicle.capacity}
                </p>
                <p className="text-muted-foreground flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <span className="text-foreground font-medium">Объем:</span> {vehicle.volume}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
