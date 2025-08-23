import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Fuel, Settings, Star } from "lucide-react";

const Fleet = () => {
  const vehicles = [
    {
      id: 1,
      brand: "BMW",
      model: "M4 Competition",
      year: 2023,
      price: "$85,000",
      engine: "3.0L Twin Turbo",
      fuel: "Gasoline",
      status: "Available",
      features: ["Navigation", "Premium Sound", "Leather Seats", "Sunroof"],
      rating: 5
    },
    {
      id: 2,
      brand: "Mercedes-Benz",
      model: "AMG GT 63S",
      year: 2023,
      price: "$165,000",
      engine: "4.0L V8 Biturbo",
      fuel: "Gasoline",
      status: "Reserved",
      features: ["AMG Package", "Carbon Fiber", "Track Mode", "Premium Interior"],
      rating: 5
    },
    {
      id: 3,
      brand: "Audi",
      model: "RS6 Avant",
      year: 2023,
      price: "$125,000",
      engine: "4.0L V8 TFSI",
      fuel: "Gasoline",
      status: "Available",
      features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen", "Matrix LED"],
      rating: 5
    },
    {
      id: 4,
      brand: "Porsche",
      model: "911 Turbo S",
      year: 2023,
      price: "$230,000",
      engine: "3.8L Twin Turbo",
      fuel: "Gasoline",
      status: "Available",
      features: ["Sport Chrono", "PASM", "Ceramic Brakes", "Alcantara"],
      rating: 5
    },
    {
      id: 5,
      brand: "Lamborghini",
      model: "Huracán EVO",
      year: 2023,
      price: "$265,000",
      engine: "5.2L V10",
      fuel: "Gasoline",
      status: "Coming Soon",
      features: ["ALA System", "Carbon Fiber", "Launch Control", "Racing Seats"],
      rating: 5
    },
    {
      id: 6,
      brand: "Ferrari",
      model: "F8 Tributo",
      year: 2023,
      price: "$285,000",
      engine: "3.9L V8 Turbo",
      fuel: "Gasoline",
      status: "Available",
      features: ["Side Slip Control", "Manettino", "Carbon Package", "Scuderia Ferrari"],
      rating: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500";
      case "Reserved":
        return "bg-yellow-500";
      case "Coming Soon":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Our Premium <span className="text-luxury">Fleet</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our carefully curated collection of luxury and performance vehicles, 
              each selected for its exceptional quality and distinctive character.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-premium">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {["All", "BMW", "Mercedes-Benz", "Audi", "Porsche", "Lamborghini", "Ferrari"].map((filter) => (
              <Button
                key={filter}
                variant={filter === "All" ? "default" : "outline"}
                className={filter === "All" ? "bg-gradient-luxury text-luxury-foreground" : "border-border hover:bg-secondary"}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card 
                key={vehicle.id} 
                className="bg-gradient-card border-border shadow-premium hover:shadow-luxury transition-all duration-300 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(vehicle.status)} text-white`}>
                      {vehicle.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(vehicle.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-luxury text-luxury" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-luxury">{vehicle.brand}</h3>
                      <p className="text-foreground font-medium">{vehicle.model}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-luxury">{vehicle.price}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{vehicle.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Fuel className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <Settings className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{vehicle.engine}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {vehicle.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{vehicle.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      variant="default" 
                      className="flex-1 bg-gradient-luxury text-luxury-foreground hover:opacity-90"
                      disabled={vehicle.status === "Reserved"}
                    >
                      {vehicle.status === "Reserved" ? "Reserved" : "Inquire Now"}
                    </Button>
                    <Button variant="outline" className="border-border hover:bg-secondary">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We specialize in sourcing specific vehicles. Let us know your requirements 
              and we'll find the perfect car for you.
            </p>
            <Button variant="default" className="bg-gradient-luxury text-luxury-foreground hover:opacity-90 px-8 py-3">
              Request Custom Import
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;