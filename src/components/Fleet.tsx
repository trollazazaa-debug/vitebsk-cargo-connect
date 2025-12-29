import truckGazelle from "@/assets/truck-gazelle.png";
import truckSprinter from "@/assets/truck-sprinter.png";
import truck5ton from "@/assets/truck-5ton.png";

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
  return (
    <section id="fleet" className="section-padding bg-section-alt">
      <div className="container-custom">
        <h2 className="section-title">Наш автопарк</h2>
        <p className="section-subtitle">
          Современный автопарк для перевозки любых грузов
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} className="card-service text-center group">
              <div className="h-48 flex items-center justify-center mb-4 bg-secondary/50 rounded-lg overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{vehicle.name}</h3>
              <div className="space-y-1 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Грузоподъемность:</span> {vehicle.capacity}
                </p>
                <p className="text-muted-foreground">
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
