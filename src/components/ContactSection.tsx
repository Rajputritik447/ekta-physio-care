import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Car, Train, Bus } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conveniently located in the heart of Mumbai with easy access 
            by public transport. We're here to help you on your recovery journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 shadow-card border-0">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Address</div>
                    <div className="text-muted-foreground">
                      Ekta Physio Care Clinic<br />
                      123 Medical Plaza, 2nd Floor<br />
                      Linking Road, Bandra West<br />
                      Mumbai - 400050, Maharashtra
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <div className="text-muted-foreground">
                      Primary: +91 98765 43210<br />
                      Emergency: +91 99999 99999
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <div className="text-muted-foreground">
                      dr.ekta@physiocare.com<br />
                      info@ektaphysiocare.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Operating Hours</div>
                    <div className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Transportation */}
            <Card className="p-8 shadow-card border-0">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                How to Reach Us
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-accent rounded-lg">
                  <Train className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">By Train</div>
                    <div className="text-sm text-muted-foreground">
                      Bandra Station (Western Line) - 10 min walk
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-accent rounded-lg">
                  <Bus className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">By Bus</div>
                    <div className="text-sm text-muted-foreground">
                      Multiple bus routes, nearest stop: Linking Road
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-accent rounded-lg">
                  <Car className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">By Car</div>
                    <div className="text-sm text-muted-foreground">
                      Parking available nearby, valet service provided
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Map and Directions */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <Card className="overflow-hidden shadow-card border-0">
              <div className="h-80 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <div className="text-lg font-semibold text-foreground mb-2">
                    Interactive Map
                  </div>
                  <div className="text-muted-foreground">
                    123 Medical Plaza, Bandra West<br />
                    Mumbai - 400050
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>

            {/* Nearby Landmarks */}
            <Card className="p-8 shadow-card border-0">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nearby Landmarks
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Bandstand Promenade</span>
                  <span className="text-sm text-primary font-medium">5 min walk</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Linking Road Market</span>
                  <span className="text-sm text-primary font-medium">2 min walk</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Bandra-Worli Sea Link</span>
                  <span className="text-sm text-primary font-medium">10 min drive</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Holy Family Hospital</span>
                  <span className="text-sm text-primary font-medium">8 min walk</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Turner Road</span>
                  <span className="text-sm text-primary font-medium">3 min walk</span>
                </div>
              </div>
            </Card>

            {/* Contact CTA */}
            <Card className="p-8 bg-gradient-medical text-white shadow-card border-0">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Visit?
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                We're conveniently located in Bandra West with easy access 
                from all parts of Mumbai. Call us now to book your appointment 
                or get directions to our clinic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.open('tel:+919876543210')}
                >
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => {
                    const element = document.getElementById('appointment');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Online
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;