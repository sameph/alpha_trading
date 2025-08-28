import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Star,
  Shield,
  Clock,
  Award,
  Truck,
  Users,
  Globe,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import cookingOilImage from "@/assets/cooking-oil.jpg";
import riceProductsImage from "@/assets/rice-products.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Import Process",
      description:
        "15+ years of expertise in food commodity imports with 100% transparency",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Rigorous quality control and certification of every shipment",
    },
    {
      icon: Clock,
      title: "Fast & Reliable",
      description:
        "Streamlined logistics ensuring your products arrive on time, every time",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "Dedicated team of specialists guiding you through every step",
    },
  ];

  const stats = [
    { number: "10000+", label: "Tons Imported" },
    { number: "500+", label: "Happy Clients" },
    { number: "25+", label: "Countries Served" },
    { number: "15+", label: "Years Experience" },
  ];

  const services = [
    {
      title: "Oil Import",
      description: "Premium cooking oils from trusted global suppliers",
      features: ["Quality sourcing", "Bulk quantities", "Customs clearance"],
      price: "Competitive rates",
    },
    {
      title: "Rice Import",
      description: "High-quality rice varieties from leading producers",
      features: ["Premium grades", "Bulk packaging", "Fast delivery"],
      price: "Market prices",
    },
    {
      title: "Free Zone Services",
      description: "Complete free zone setup and operational support",
      features: ["License processing", "Setup assistance", "Ongoing support"],
      price: "Custom packages",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-gradient-luxury text-luxury-foreground mb-6 px-4 py-2">
                Premium Food Import Specialists
              </Badge>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Premium
                <span className="text-luxury block">Food Imports</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Alpha G.T FZCO GENERAL TRADING delivers high-quality cooking
                oils, rice, and free zone services. With 15+ years of expertise,
                we make food commodity imports seamless, transparent, and
                reliable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/fleet">
                  <Button
                    size="lg"
                    className="bg-gradient-luxury text-luxury-foreground hover:opacity-90 px-8 py-4 text-lg animate-luxury-glow"
                  >
                    Explore Our Products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-secondary px-8 py-4 text-lg"
                  >
                    Get Free Quote
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-luxury rounded-full border-2 border-background flex items-center justify-center"
                    >
                      <Star className="w-4 h-4 text-luxury-foreground fill-current" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    Rated 5/5 by 2500+ clients
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Excellence in every import
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-slide-up lg:animate-fade-in">
              <div className="relative">
                <img
                  src={cookingOilImage}
                  alt="Premium cooking oil products - Alpha G.T FZCO quality imports"
                  className="w-full h-auto rounded-2xl shadow-luxury"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-card p-6 rounded-xl border border-border shadow-premium">
                  <div className="flex items-center space-x-3">
                    <Package className="w-8 h-8 text-luxury" />
                    <div>
                      <p className="font-bold text-lg">Premium Import</p>
                      <p className="text-sm text-muted-foreground">
                        Quality Guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-luxury mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Why Choose <span className="text-luxury">Alpha G.T FZCO</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the difference of working with UAE's premier food
              import specialists
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border shadow-premium hover:shadow-luxury transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-luxury-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive food import solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border shadow-premium hover:shadow-luxury transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <span className="text-luxury font-bold">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-luxury rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-border hover:bg-secondary"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                variant="default"
                className="bg-gradient-luxury text-luxury-foreground hover:opacity-90 px-8 py-3"
              >
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-5xl font-bold mb-6">
                  Premium <span className="text-luxury">Products</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Discover our high-quality food commodities sourced from
                  trusted global suppliers. From premium cooking oils to finest
                  rice varieties, we ensure quality in every shipment.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-luxury mb-2">
                      25+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Global Suppliers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-luxury mb-2">
                      100+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Product Varieties
                    </div>
                  </div>
                </div>

                <Link to="/fleet">
                  <Button
                    variant="default"
                    className="bg-gradient-luxury text-luxury-foreground hover:opacity-90"
                  >
                    Browse Products
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="animate-slide-up">
                <img
                  src={riceProductsImage}
                  alt="Premium rice products showcase"
                  className="w-full h-auto rounded-2xl shadow-luxury"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 text-luxury fill-current mx-1"
                />
              ))}
            </div>
            <blockquote className="text-3xl font-medium mb-8 text-foreground leading-relaxed">
              "Alpha G.T FZCO has been our trusted partner for food imports.
              Their quality assurance and reliable delivery has helped our
              business grow significantly."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-luxury-foreground" />
              </div>
              <div className="text-left">
                <cite className="text-luxury font-bold text-lg">
                  Sarah Al-Zahra
                </cite>
                <p className="text-muted-foreground">Restaurant Chain Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-luxury">Import Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of satisfied clients who trusted us with their food
              commodity imports. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-luxury text-luxury-foreground hover:opacity-90 px-8 py-4 text-lg"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
              </Link>
              <Link to="/fleet">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-secondary px-8 py-4 text-lg"
                >
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
