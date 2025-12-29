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
  },
  {
    image: truckSprinter,
    name: "Фургон Спринтер 3 тонн",
    capacity: "до 3 тонн",
    volume: "16 м³",
  },
  {
    image: truck5ton,
    name: "Грузовик 5 тонн",
    capacity: "до 5 тонн",
    volume: "32 м³",
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
              <div className="h-48 flex items-center justify-center mb-4 bg-secondary/50 rounded-lg overflow-hidden relative">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl"
                />

                {/* Floating specs on hover */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {vehicle.volume}
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

              {/* CTA button on hover */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <a
                  href="#contacts"
                  className="inline-block text-sm text-primary font-medium hover:underline"
                >
                  Заказать →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
