import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Globe,
  Shield,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Ethiopia, Addis Ababa",
        "Prime Business District",
        "Visit by appointment",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+251 4 XXX XXXX",
        "+251 50 XXX XXXX",
        "24/7 Support Available",
      ],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "info@myalpha-trading.com",
        "imports@myalpha-trading.com",
        "Quick Response Guaranteed",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Sunday - Thursday: 9AM - 6PM",
        "Friday: 2PM - 6PM",
        "Saturday: 10AM - 4PM",
      ],
    },
  ];

  const offices = [
    {
      city: "Addis Ababa",
      country: "Ethiopia",
      address: "Bole Medianialem, Addis Ababa, Ethiopia",
      phone: "+251 4 XXX XXXX",
      type: "Headquarters",
    },
    {
      city: "Hawassa",
      country: "Ethiopia",
      address: "piassa, Hawassa, Ethiopia",
      phone: "+251 2 XXX XXXX",
      type: "Branch Office",
    },
    {
      city: "Adama",
      country: "Ethiopia",
      address: "Industrial Area, Adama, Ethiopia",
      phone: "+251 6 XXX XXXX",
      type: "Branch",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Get In <span className="text-luxury">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to import your dream car? Contact our expert team for
              personalized consultation and start your import journey today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="bg-gradient-card border-border shadow-premium">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-luxury rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-luxury-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Send us a Message</h2>
                      <p className="text-muted-foreground">
                        We'll get back to you within 24 hours
                      </p>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Your first name"
                          className="bg-secondary border-border focus:border-luxury"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Your last name"
                          className="bg-secondary border-border focus:border-luxury"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-secondary border-border focus:border-luxury"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+251 XX XXX XXXX"
                        className="bg-secondary border-border focus:border-luxury"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Vehicle Import Inquiry"
                        className="bg-secondary border-border focus:border-luxury"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about the vehicle you'd like to import..."
                        className="bg-secondary border-border focus:border-luxury min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-luxury text-luxury-foreground hover:opacity-90"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-slide-up">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-border shadow-premium"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-luxury rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-luxury-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p
                              key={idx}
                              className="text-muted-foreground text-sm"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Offices</h2>
            <p className="text-xl text-muted-foreground">
              Multiple locations across the UAE to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border shadow-premium text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-luxury rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-luxury-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                  <p className="text-luxury font-semibold mb-2">
                    {office.type}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {office.address}
                  </p>
                  <p className="text-sm font-mono text-foreground">
                    {office.phone}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-card border-border shadow-premium overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-secondary relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-luxury mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">
                        Addis Ababa Headquarters
                      </h3>
                      <p className="text-muted-foreground">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our import services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does the import process take?",
                answer:
                  "Typically 4-8 weeks depending on the source country and vehicle specifications.",
              },
              {
                question: "What documents do I need?",
                answer:
                  "Valid Emirates ID, passport copy, and proof of residence. We handle all other paperwork.",
              },
              {
                question: "Do you provide financing options?",
                answer:
                  "Yes, we work with leading banks to offer competitive financing solutions.",
              },
              {
                question: "Is there a warranty on imported vehicles?",
                answer:
                  "We offer comprehensive inspection and can arrange extended warranty options.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border shadow-premium animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-luxury rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-luxury-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Import?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today for a free consultation and personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                className="bg-gradient-luxury text-luxury-foreground hover:opacity-90 px-8 py-3"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                variant="outline"
                className="border-border hover:bg-secondary px-8 py-3"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
