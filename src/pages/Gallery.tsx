import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Share2, Filter } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Sports Cars",
    "Luxury Sedans",
    "SUVs",
    "Classics",
    "Supercars",
  ];

  const galleryItems = [
    {
      id: 1,
      title: "BMW M4 Competition",
      category: "Sports Cars",
      year: 2023,
      status: "Delivered",
      description:
        "Stunning M4 Competition delivered to satisfied client in Dubai",
    },
    {
      id: 2,
      title: "Mercedes S-Class",
      category: "Luxury Sedans",
      year: 2023,
      status: "Available",
      description: "Ultimate luxury sedan with cutting-edge technology",
    },
    {
      id: 3,
      title: "Porsche 911 Turbo S",
      category: "Sports Cars",
      year: 2023,
      status: "Reserved",
      description: "The pinnacle of sports car engineering",
    },
    {
      id: 4,
      title: "Range Rover Autobiography",
      category: "SUVs",
      year: 2023,
      status: "Available",
      description: "Luxury SUV combining elegance with capability",
    },
    {
      id: 5,
      title: "Ferrari F8 Tributo",
      category: "Supercars",
      year: 2023,
      status: "Delivered",
      description: "Italian masterpiece delivered to collector",
    },
    {
      id: 6,
      title: "Lamborghini Huracán",
      category: "Supercars",
      year: 2023,
      status: "Available",
      description: "Pure Italian passion and performance",
    },
    {
      id: 7,
      title: "Audi RS6 Avant",
      category: "Sports Cars",
      year: 2023,
      status: "Delivered",
      description: "The perfect blend of practicality and performance",
    },
    {
      id: 8,
      title: "Bentley Continental GT",
      category: "Luxury Sedans",
      year: 2023,
      status: "Available",
      description: "British luxury at its finest",
    },
    {
      id: 9,
      title: "McLaren 720S",
      category: "Supercars",
      year: 2023,
      status: "Reserved",
      description: "Formula 1 technology for the road",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500";
      case "Reserved":
        return "bg-yellow-500";
      case "Delivered":
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
              Our <span className="text-luxury">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our collection of successfully imported vehicles and see
              the quality and variety that defines Alpha G.T FZCO GENERAL
              TRADING.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-premium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-5 h-5 text-luxury mr-2" />
            <span className="text-luxury font-semibold">
              Filter by Category
            </span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={
                  activeFilter === category
                    ? "bg-gradient-luxury text-luxury-foreground"
                    : "border-border hover:bg-secondary"
                }
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="bg-gradient-card border-border shadow-premium hover:shadow-luxury transition-all duration-300 overflow-hidden group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${getStatusColor(item.status)} text-white`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80">
                      {item.year}
                    </Badge>
                  </div>

                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="default"
                        className="bg-gradient-luxury text-luxury-foreground"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border bg-background/90"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-luxury mb-1">
                      {item.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>

                  <div className="flex space-x-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-gradient-luxury text-luxury-foreground hover:opacity-90"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:bg-secondary"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Vehicles Imported" },
              { number: "50+", label: "Luxury Brands" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-luxury mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Import Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6">
                  Featured Success Story
                </h2>
                <h3 className="text-2xl text-luxury font-semibold mb-4">
                  Ferrari F8 Tributo - A Dream Realized
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  When Ahmed contacted us about importing a specific Ferrari F8
                  Tributo from Italy, we knew this wasn't just about a car
                  purchase—it was about making a dream come true. After 3 months
                  of careful sourcing, inspection, and seamless import process,
                  we delivered this masterpiece to its new home.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury rounded-full"></div>
                    <span className="text-sm">
                      Source location: Maranello, Italy
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury rounded-full"></div>
                    <span className="text-sm">Import duration: 3 months</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury rounded-full"></div>
                    <span className="text-sm">Client satisfaction: 100%</span>
                  </div>
                </div>
                <Button
                  variant="default"
                  className="bg-gradient-luxury text-luxury-foreground hover:opacity-90"
                >
                  Read Full Story
                </Button>
              </div>

              <div className="animate-slide-up">
                <Card className="bg-gradient-card border-border shadow-luxury">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-secondary relative overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-luxury/30 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-gradient-luxury text-luxury-foreground">
                          Success Story
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Want Your Car Featured Here?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let us help you import your dream vehicle and become part of our
              success story gallery.
            </p>
            <Button
              variant="default"
              className="bg-gradient-luxury text-luxury-foreground hover:opacity-90 px-8 py-3"
            >
              Start Your Import Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
