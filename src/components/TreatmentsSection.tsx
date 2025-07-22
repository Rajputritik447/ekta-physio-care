import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Target } from "lucide-react";
import treatmentImage from "@/assets/treatment-room.jpg";

const TreatmentsSection = () => {
  const conditions = [
    { name: "Back Pain", category: "Orthopedic", duration: "4-8 weeks" },
    { name: "Neck Pain", category: "Orthopedic", duration: "3-6 weeks" },
    { name: "Knee Injuries", category: "Sports", duration: "6-12 weeks" },
    { name: "Shoulder Pain", category: "Orthopedic", duration: "4-10 weeks" },
    { name: "Tennis Elbow", category: "Sports", duration: "3-8 weeks" },
    { name: "Sciatica", category: "Neurological", duration: "4-12 weeks" },
    { name: "Frozen Shoulder", category: "Orthopedic", duration: "8-16 weeks" },
    { name: "Ankle Sprains", category: "Sports", duration: "2-6 weeks" },
    { name: "Post-Surgery Recovery", category: "Rehabilitation", duration: "6-20 weeks" },
    { name: "Chronic Pain", category: "Pain Management", duration: "Ongoing" },
    { name: "Arthritis", category: "Chronic", duration: "Ongoing" },
    { name: "Stroke Recovery", category: "Neurological", duration: "3-12 months" }
  ];

  const treatmentApproach = [
    {
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your condition, medical history, and physical examination.",
      icon: Target
    },
    {
      title: "Personalized Plan",
      description: "Custom treatment plan designed specifically for your condition and recovery goals.",
      icon: CheckCircle
    },
    {
      title: "Progress Monitoring",
      description: "Regular assessment and plan adjustments to ensure optimal recovery progress.",
      icon: Clock
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Orthopedic": "bg-primary/10 text-primary",
      "Sports": "bg-secondary/10 text-secondary",
      "Neurological": "bg-purple-100 text-purple-700",
      "Rehabilitation": "bg-blue-100 text-blue-700",
      "Pain Management": "bg-red-100 text-red-700",
      "Chronic": "bg-orange-100 text-orange-700"
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="treatments" className="py-20 bg-gradient-healing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Conditions We Treat
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized treatment for a wide range of conditions using evidence-based 
            physiotherapy techniques and personalized care plans.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Treatment Image and Approach */}
          <div className="space-y-8">
            <Card className="overflow-hidden shadow-card border-0">
              <img 
                src={treatmentImage} 
                alt="Treatment room" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Modern Treatment Facility
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our clinic is equipped with state-of-the-art physiotherapy equipment 
                  and modern treatment rooms designed to provide the best possible 
                  care environment for our patients.
                </p>
              </div>
            </Card>

            {/* Treatment Approach */}
            <Card className="p-8 shadow-card border-0">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Treatment Approach
              </h3>
              <div className="space-y-6">
                {treatmentApproach.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Conditions List */}
          <div>
            <Card className="p-8 shadow-card border-0">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Common Conditions Treated
              </h3>
              <div className="grid gap-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">
                          {condition.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Typical recovery: {condition.duration}
                        </div>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(condition.category)}>
                      {condition.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Success Metrics */}
            <Card className="p-8 mt-8 bg-gradient-medical text-white shadow-card border-0">
              <h3 className="text-2xl font-bold mb-6">Treatment Success</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                  <div className="text-white/90">Patient Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">85%</div>
                  <div className="text-white/90">Pain Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">90%</div>
                  <div className="text-white/90">Mobility Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">6-8</div>
                  <div className="text-white/90">Avg. Sessions</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;