import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Heart, 
  Users, 
  Zap, 
  Shield, 
  Brain,
  Baby,
  Dumbbell,
  Stethoscope
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Activity,
      title: "Pain Management",
      description: "Comprehensive pain relief through targeted physiotherapy techniques, manual therapy, and exercise programs.",
      features: ["Chronic pain relief", "Acute pain management", "Joint pain treatment", "Muscle pain therapy"]
    },
    {
      icon: Dumbbell,
      title: "Sports Injury Recovery",
      description: "Specialized rehabilitation for athletes and sports enthusiasts to return to peak performance safely.",
      features: ["Injury assessment", "Recovery protocols", "Performance enhancement", "Injury prevention"]
    },
    {
      icon: Shield,
      title: "Post-Surgical Rehabilitation",
      description: "Expert care following orthopedic surgeries to ensure optimal healing and recovery.",
      features: ["Post-op recovery", "Mobility restoration", "Strength building", "Scar tissue management"]
    },
    {
      icon: Brain,
      title: "Neurological Rehabilitation",
      description: "Specialized treatment for neurological conditions to improve function and quality of life.",
      features: ["Stroke recovery", "Balance training", "Coordination improvement", "Motor skill development"]
    },
    {
      icon: Heart,
      title: "Cardiopulmonary Therapy",
      description: "Respiratory and cardiac rehabilitation to improve breathing and cardiovascular health.",
      features: ["Breathing exercises", "Cardiac rehabilitation", "Endurance training", "Respiratory therapy"]
    },
    {
      icon: Baby,
      title: "Pediatric Physiotherapy",
      description: "Gentle, age-appropriate treatments for children with developmental or injury-related conditions.",
      features: ["Developmental delays", "Pediatric injuries", "Movement disorders", "Growth-related issues"]
    },
    {
      icon: Users,
      title: "Geriatric Care",
      description: "Specialized physiotherapy for older adults focusing on mobility, balance, and independence.",
      features: ["Fall prevention", "Mobility enhancement", "Strength maintenance", "Pain management"]
    },
    {
      icon: Stethoscope,
      title: "Manual Therapy",
      description: "Hands-on techniques including joint mobilization, soft tissue massage, and manipulation.",
      features: ["Joint mobilization", "Soft tissue massage", "Trigger point therapy", "Myofascial release"]
    },
    {
      icon: Zap,
      title: "Electrotherapy",
      description: "Advanced electrotherapy modalities for pain relief and tissue healing acceleration.",
      features: ["TENS therapy", "Ultrasound therapy", "Electrical stimulation", "Laser therapy"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive physiotherapy services tailored to your specific needs. 
            We offer evidence-based treatments to help you recover faster and stronger.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-8 shadow-card border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-medical rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => {
                    const element = document.getElementById('appointment');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-12 bg-gradient-medical text-white shadow-card border-0 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a consultation with Dr. Ekta Rajput to discuss your condition 
              and receive a personalized treatment recommendation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('appointment');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;