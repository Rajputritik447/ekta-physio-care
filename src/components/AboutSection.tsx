import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Heart, Target, CheckCircle } from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";

const AboutSection = () => {
  const qualifications = [
    "BPT - Bachelor of Physiotherapy",
    "MPT - Master of Physiotherapy (Orthopedics)",
    "Certified in Dry Needling",
    "Sports Injury Specialist",
    "Manual Therapy Certification"
  ];

  const expertise = [
    "Orthopedic Rehabilitation",
    "Sports Injury Recovery",
    "Post-Surgical Care",
    "Chronic Pain Management",
    "Neurological Conditions",
    "Pediatric Physiotherapy"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-healing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Dr. Ekta Rajput
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to helping patients achieve optimal health through evidence-based 
            physiotherapy treatments and personalized care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Doctor Image and Stats */}
          <div className="space-y-8">
            <Card className="p-8 shadow-card border-0 bg-white">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-soft">
                  <img 
                    src={doctorImage} 
                    alt="Dr. Ekta Rajput" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Dr. Ekta Rajput
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">
                  Physiotherapy Specialist
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  "My mission is to help every patient regain their mobility, 
                  reduce pain, and improve their quality of life through 
                  comprehensive physiotherapy care."
                </p>
              </div>
            </Card>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center shadow-soft border-0">
                <Award className="h-8 w-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center shadow-soft border-0">
                <Heart className="h-8 w-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </Card>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            {/* Professional Background */}
            <Card className="p-8 shadow-card border-0 bg-white">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Professional Background
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Ekta Rajput is a highly qualified physiotherapist with over 8 years 
                of experience in treating various musculoskeletal and neurological conditions. 
                She completed her Master's in Physiotherapy with specialization in Orthopedics 
                and has since dedicated her career to helping patients recover from injuries 
                and improve their physical health.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-3">Qualifications:</h4>
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{qualification}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Areas of Expertise */}
            <Card className="p-8 shadow-card border-0 bg-white">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Areas of Expertise
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="p-8 bg-gradient-medical text-white shadow-card border-0">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Recovery Journey?
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Take the first step towards better health. Schedule a consultation 
                to discuss your condition and create a personalized treatment plan.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('appointment');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Consultation Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;