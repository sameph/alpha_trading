import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "5000+", label: "Cars Imported", icon: Globe },
    { number: "2500+", label: "Happy Clients", icon: Users },
    { number: "100%", label: "Secure Process", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-luxury">M.Y. ALPHA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your trusted partner in luxury automotive imports since 2008. We specialize in bringing 
              the world's finest vehicles to your doorstep with unmatched expertise and service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-premium">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-luxury rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-luxury-foreground" />
                </div>
                <div className="text-3xl font-bold text-luxury mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2008, M.Y. ALPHA GENERAL TRADING began with a simple vision: 
                  to make luxury automotive imports accessible, transparent, and reliable. 
                  What started as a small operation has grown into one of the region's most 
                  trusted car import specialists.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We understand that importing a vehicle is more than just a transaction—it's 
                  about bringing dreams to life. Every car we import undergoes rigorous 
                  quality checks and documentation processes to ensure you receive nothing 
                  but the best.
                </p>
                <Button variant="default" className="bg-gradient-luxury text-luxury-foreground hover:opacity-90">
                  View Our Fleet
                </Button>
              </div>
              
              <div className="animate-slide-up">
                <Card className="bg-gradient-card border-border shadow-premium">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-luxury">Our Mission</h3>
                    <p className="text-muted-foreground mb-6">
                      To provide exceptional automotive import services that exceed expectations 
                      while maintaining the highest standards of quality, transparency, and 
                      customer satisfaction.
                    </p>
                    
                    <h3 className="text-2xl font-bold mb-4 text-luxury">Our Values</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Transparency in all transactions</li>
                      <li>• Quality assurance at every step</li>
                      <li>• Customer-first approach</li>
                      <li>• Expertise and professionalism</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Expert Team</h2>
            <p className="text-xl text-muted-foreground">
              Our experienced professionals ensure every import meets the highest standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Mohammed Al-Ahmad", role: "Import Specialist", experience: "12+ Years" },
              { name: "Yusuf Hassan", role: "Quality Inspector", experience: "10+ Years" },
              { name: "Ahmad Rashid", role: "Documentation Expert", experience: "8+ Years" },
            ].map((member, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-premium text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-luxury rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-luxury-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-luxury mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;