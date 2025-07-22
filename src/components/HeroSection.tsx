import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Clock, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapy.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Physiotherapy clinic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-6 w-6 text-secondary" />
              <span className="text-secondary font-semibold">Certified Physiotherapist</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Dr. Ekta Rajput
              <span className="block text-secondary text-3xl lg:text-4xl mt-2">
                Physiotherapy Expert
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Specialized in pain management, sports injuries, and rehabilitation. 
              Helping patients recover faster with personalized treatment plans and 
              advanced physiotherapy techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => scrollToSection('appointment')}
                className="text-lg px-8 py-6"
              >
                Book Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-white/80">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">8+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">95%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Appointment Card */}
          <div className="lg:ml-auto">
            <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-card border-0">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Quick Appointment
                </h3>
                <p className="text-muted-foreground">
                  Get professional physiotherapy care
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-medium">Available Today</span>
                  </div>
                  <span className="text-sm text-secondary font-semibold">2:00 PM - 7:00 PM</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">Slots Available</span>
                  </div>
                  <span className="text-sm text-secondary font-semibold">3 Remaining</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-primary" />
                    <span className="font-medium">Rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                    <span className="text-sm font-semibold ml-1">5.0</span>
                  </div>
                </div>
              </div>

              <Button 
                variant="medical" 
                size="lg" 
                className="w-full text-lg py-6"
                onClick={() => scrollToSection('appointment')}
              >
                Schedule Appointment
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                * Same day appointments available
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;