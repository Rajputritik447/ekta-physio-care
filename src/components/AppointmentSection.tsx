import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AppointmentSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.condition) {
      toast({
        title: "Please fill in required fields",
        description: "Name, phone, and condition are required to book an appointment.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Appointment Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      condition: "",
      preferredDate: "",
      preferredTime: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"
  ];

  const conditions = [
    "Back Pain", "Neck Pain", "Knee Pain", "Shoulder Pain", "Sports Injury",
    "Post-Surgery Recovery", "Sciatica", "Arthritis", "Frozen Shoulder",
    "Tennis Elbow", "Chronic Pain", "Other"
  ];

  return (
    <section id="appointment" className="py-20 bg-gradient-healing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards recovery. Schedule your consultation 
            with Dr. Ekta Rajput today and start your journey to better health.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="p-8 shadow-card border-0 h-fit">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground">+91 98765 43210</div>
                  <div className="text-sm text-muted-foreground">Available 9 AM - 7 PM</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">dr.ekta@physiocare.com</div>
                  <div className="text-sm text-muted-foreground">We'll respond within 24 hours</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Address</div>
                  <div className="text-muted-foreground">
                    123 Medical Plaza,<br />
                    Bandra West, Mumbai - 400050<br />
                    Maharashtra, India
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Hours</div>
                  <div className="text-muted-foreground">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-5 w-5 text-red-600" />
                <div className="font-semibold text-red-800">Emergency</div>
              </div>
              <div className="text-red-700 text-sm">
                For urgent cases, call: +91 99999 99999
              </div>
            </div>
          </Card>

          {/* Appointment Form */}
          <Card className="lg:col-span-2 p-8 shadow-card border-0">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Schedule Your Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="condition" className="text-foreground font-medium">
                  Condition/Reason for Visit *
                </Label>
                <Select onValueChange={(value) => handleInputChange("condition", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditions.map((condition) => (
                      <SelectItem key={condition} value={condition}>
                        {condition}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date" className="text-foreground font-medium">
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                    className="mt-2"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <Label htmlFor="time" className="text-foreground font-medium">
                    Preferred Time
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground font-medium">
                  Additional Information
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Please describe your symptoms, pain level, or any other relevant information..."
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <Button 
                type="submit" 
                variant="medical" 
                size="lg" 
                className="w-full text-lg py-6"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Request Appointment
              </Button>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>We'll confirm your appointment within 24 hours</span>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;