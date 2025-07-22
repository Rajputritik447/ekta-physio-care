import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clinic Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                Ekta Physio Care
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Leading physiotherapy clinic in Mumbai, dedicated to helping 
                patients recover from injuries, manage pain, and improve their 
                quality of life through personalized treatment plans.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="text-white/90">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span className="text-white/90">dr.ekta@physiocare.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-white/90">Bandra West, Mumbai - 400050</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block text-white/80 hover:text-secondary transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-white/80 hover:text-secondary transition-colors"
                >
                  About Dr. Ekta
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-white/80 hover:text-secondary transition-colors"
                >
                  Our Services
                </button>
                <button 
                  onClick={() => scrollToSection('treatments')}
                  className="block text-white/80 hover:text-secondary transition-colors"
                >
                  Treatments
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="block text-white/80 hover:text-secondary transition-colors"
                >
                  Patient Reviews
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-white/80 hover:text-secondary transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <div className="space-y-3 text-white/80">
                <div>Pain Management</div>
                <div>Sports Injury Recovery</div>
                <div>Post-Surgical Rehab</div>
                <div>Neurological Rehab</div>
                <div>Manual Therapy</div>
                <div>Electrotherapy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Hours */}
        <div className="border-t border-white/20 py-8">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="flex items-center justify-center md:justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-secondary" />
                <div>
                  <div className="font-semibold text-white">Clinic Hours</div>
                  <div className="text-white/80 text-sm">Mon-Sat: 9 AM - 7 PM</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-secondary font-semibold">Emergency Contact</div>
                <div className="text-white/90">+91 99999 99999</div>
              </div>
              
              <button 
                onClick={() => scrollToSection('appointment')}
                className="bg-secondary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </Card>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 py-6">
          <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 text-sm text-white/70">
            <div className="flex items-center space-x-2">
              <span>© 2024 Ekta Physio Care. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for better health</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;