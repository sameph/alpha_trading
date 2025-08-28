import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Ship,
  Shield,
  FileText,
  Wrench,
  CreditCard,
  Truck,
  CheckCircle,
  Clock,
  Building,
  Package,
  Droplets,
  Wheat,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Droplets,
      title: "Oil Import Services",
      description: "Complete import solutions for cooking oils and edible fats",
      features: [
        "Global sourcing",
        "Quality testing",
        "Bulk quantities",
        "Competitive pricing",
      ],
      price: "Custom rates",
    },
    {
      icon: Wheat,
      title: "Rice Import Services",
      description: "Premium rice varieties from leading agricultural regions",
      features: [
        "Multiple varieties",
        "Quality grades",
        "Flexible packaging",
        "Fast delivery",
      ],
      price: "Market rates",
    },
    {
      icon: FileText,
      title: "Documentation & Clearance",
      description: "Complete documentation and customs clearance services",
      features: [
        "Import licenses",
        "Customs clearance",
        "Quality certificates",
        "Legal compliance",
      ],
      price: "From AED 2,000",
    },
    {
      icon: Building,
      title: "Free Zone Services",
      description: "Complete free zone setup and operational support",
      features: [
        "License processing",
        "Office setup",
        "Visa assistance",
        "Ongoing support",
      ],
      price: "From AED 15,000",
    },
  ];

  const additionalServices = [
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Safe transportation and delivery services",
      included: true,
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive testing and certification",
      included: true,
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Terms",
      description: "LC, TT, and other payment options",
      included: false,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Discuss your requirements and specifications",
    },
    {
      step: "02",
      title: "Sourcing",
      description: "Find the best suppliers and negotiate prices",
    },
    {
      step: "03",
      title: "Documentation",
      description: "Handle all paperwork and legal requirements",
    },
    {
      step: "04",
      title: "Quality Control",
      description: "Inspect and certify product quality",
    },
    {
      step: "05",
      title: "Delivery",
      description: "Secure shipping and final delivery",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-luxury">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From sourcing to delivery, we handle every aspect of your food
              commodity imports and free zone setup with precision, care, and
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border shadow-premium hover:shadow-luxury transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-luxury rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-luxury-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-luxury font-semibold">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-luxury" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="default"
                    className="w-full bg-gradient-luxury text-luxury-foreground hover:opacity-90"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Import Process</h2>
            <p className="text-xl text-muted-foreground">
              A streamlined 5-step process that ensures your commodity import is
              smooth and worry-free
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-luxury-foreground">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support services to complete your import experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border shadow-premium text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-luxury rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-luxury-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Badge
                    variant={service.included ? "default" : "secondary"}
                    className={
                      service.included
                        ? "bg-gradient-luxury text-luxury-foreground"
                        : ""
                    }
                  >
                    {service.included ? "Included" : "Optional"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Zone Services Detail */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-luxury mr-4" />
                  <h2 className="text-4xl font-bold">Free Zone Services</h2>
                </div>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Complete free zone setup and management services. From license
                  processing to ongoing operational support, we help you
                  establish and maintain your business in UAE free zones.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-luxury" />
                    <span>Business license processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-luxury" />
                    <span>Office space setup and management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-luxury" />
                    <span>Visa processing and PRO services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-luxury" />
                    <span>Banking assistance and account opening</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-luxury" />
                    <span>Ongoing compliance and support</span>
                  </div>
                </div>

                <Button
                  variant="default"
                  className="bg-gradient-luxury text-luxury-foreground hover:opacity-90"
                >
                  Learn About Free Zone Services
                </Button>
              </div>

              <div className="animate-slide-up">
                <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-luxury">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Popular Free Zones
                  </h3>
                  <div className="space-y-4">
                    {[
                      "JAFZA - Jebel Ali Free Zone",
                      "DMCC - Dubai Multi Commodities Centre",
                      "DIFC - Dubai International Financial Centre",
                      "Abu Dhabi Global Market (ADGM)",
                      "Sharjah Airport International Free Zone",
                    ].map((zone, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-luxury rounded-full"></div>
                        <span className="text-sm">{zone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle key={i} className="w-6 h-6 text-luxury mx-1" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium mb-6 text-foreground">
                "Alpha G.T FZCO made our food import business incredibly smooth.
                Their expertise in sourcing quality products and handling all
                documentation exceeded our expectations."
              </blockquote>
              <cite className="text-luxury font-semibold">
                - Omar Al-Rashid, Food Distribution LLC
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Import Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get started with a free consultation and discover how easy
              importing can be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                className="bg-gradient-luxury text-luxury-foreground hover:opacity-90 px-8 py-3"
              >
                Start Your Import
              </Button>
              <Button
                variant="outline"
                className="border-border hover:bg-secondary px-8 py-3"
              >
                <Clock className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
