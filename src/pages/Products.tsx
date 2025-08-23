import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Droplets, Wheat, Star } from "lucide-react";

const Products = () => {
  const oilProducts = [
    {
      id: 1,
      name: "Sunflower Oil",
      brand: "Premium Grade",
      origin: "Ukraine/Russia",
      price: "$1,200/MT",
      specifications: "Refined, RBD",
      packaging: "PET Bottle, Flexi Tank",
      features: ["High Quality", "Bulk Available", "Fast Delivery", "Certified"],
      rating: 5
    },
    {
      id: 2,
      name: "Palm Oil",
      brand: "RBD Palm Oil",
      origin: "Indonesia/Malaysia",
      price: "$950/MT",
      specifications: "RBD, IV 50-55",
      packaging: "Flexi Tank, Drums",
      features: ["Food Grade", "Sustainable", "Bulk Quantities", "Competitive Price"],
      rating: 5
    },
    {
      id: 3,
      name: "Soybean Oil",
      brand: "Refined",
      origin: "Argentina/Brazil",
      price: "$1,100/MT",
      specifications: "Refined, Degummed",
      packaging: "Flexi Tank, IBC",
      features: ["High Purity", "GMO Free Available", "Fast Shipping", "Quality Assured"],
      rating: 5
    }
  ];

  const riceProducts = [
    {
      id: 1,
      name: "Basmati Rice",
      brand: "Premium 1121",
      origin: "India/Pakistan",
      price: "$1,800/MT",
      specifications: "Extra Long Grain",
      packaging: "50kg PP Bags",
      features: ["Aromatic", "Premium Grade", "Export Quality", "Long Grain"],
      rating: 5
    },
    {
      id: 2,
      name: "Jasmine Rice",
      brand: "Thai Hom Mali",
      origin: "Thailand",
      price: "$1,600/MT",
      specifications: "100% Pure",
      packaging: "25kg/50kg Bags",
      features: ["Fragrant", "Premium Quality", "White Rice", "Export Grade"],
      rating: 5
    },
    {
      id: 3,
      name: "Long Grain Rice",
      brand: "Parboiled",
      origin: "India/Myanmar",
      price: "$800/MT",
      specifications: "5% Broken",
      packaging: "50kg PP Bags",
      features: ["Nutritious", "Bulk Quantities", "Good Price", "Quality Certified"],
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Our Premium <span className="text-luxury">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              High-quality food commodities sourced from trusted global suppliers, 
              ensuring the best prices and consistent quality for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Cooking Oils Section */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Droplets className="w-12 h-12 text-luxury mr-4" />
              <h2 className="text-4xl font-bold">Cooking Oils</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Premium refined cooking oils from certified suppliers worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oilProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="bg-gradient-card border-border shadow-premium hover:shadow-luxury transition-all duration-300 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-amber-400/20 to-orange-400/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">
                      Available
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-luxury text-luxury" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Droplets className="w-16 h-16 text-luxury opacity-40" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-luxury">{product.name}</h3>
                      <p className="text-foreground font-medium">{product.brand}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-luxury">{product.price}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Origin:</span>
                      <span>{product.origin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Specs:</span>
                      <span>{product.specifications}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Packaging:</span>
                      <span>{product.packaging}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{product.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      variant="default" 
                      className="flex-1 bg-gradient-luxury text-luxury-foreground hover:opacity-90"
                    >
                      Request Quote
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

      {/* Rice Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Wheat className="w-12 h-12 text-luxury mr-4" />
              <h2 className="text-4xl font-bold">Rice Varieties</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Premium rice from leading agricultural regions, perfect for every culinary need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riceProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="bg-gradient-card border-border shadow-premium hover:shadow-luxury transition-all duration-300 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-amber-100/20 to-yellow-200/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">
                      Available
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-luxury text-luxury" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Wheat className="w-16 h-16 text-luxury opacity-40" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-luxury">{product.name}</h3>
                      <p className="text-foreground font-medium">{product.brand}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-luxury">{product.price}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Origin:</span>
                      <span>{product.origin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Grade:</span>
                      <span>{product.specifications}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Packaging:</span>
                      <span>{product.packaging}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{product.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      variant="default" 
                      className="flex-1 bg-gradient-luxury text-luxury-foreground hover:opacity-90"
                    >
                      Request Quote
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
              Need Custom Quantities or Specifications?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We specialize in sourcing specific products and quantities. Let us know your requirements 
              and we'll provide the best solution for your business needs.
            </p>
            <Button variant="default" className="bg-gradient-luxury text-luxury-foreground hover:opacity-90 px-8 py-3">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;