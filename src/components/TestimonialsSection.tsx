import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      condition: "Chronic Back Pain",
      rating: 5,
      image: "PS",
      testimonial: "Dr. Ekta completely transformed my life. I had been suffering from chronic back pain for 3 years, and within 6 weeks of treatment, I was pain-free. Her approach is professional yet caring, and she explains everything clearly.",
      duration: "Treated for 6 weeks"
    },
    {
      name: "Rajesh Kumar",
      condition: "Post-Surgery Knee Recovery",
      rating: 5,
      image: "RK",
      testimonial: "After my knee surgery, I was worried about recovery. Dr. Ekta's rehabilitation program was excellent. She guided me through every step, and now I'm back to playing cricket! Highly recommend her expertise.",
      duration: "Treated for 10 weeks"
    },
    {
      name: "Anita Desai",
      condition: "Frozen Shoulder",
      rating: 5,
      image: "AD",
      testimonial: "I couldn't lift my arm above my head for months. Dr. Ekta's treatment plan was thorough and effective. Her manual therapy techniques and exercises helped me regain full range of motion. Grateful for her care!",
      duration: "Treated for 12 weeks"
    },
    {
      name: "Vikram Singh",
      condition: "Sports Injury",
      rating: 5,
      image: "VS",
      testimonial: "As a professional athlete, I needed the best care for my hamstring injury. Dr. Ekta's sports-specific rehabilitation program got me back to competition faster than expected. Her knowledge of sports injuries is exceptional.",
      duration: "Treated for 4 weeks"
    },
    {
      name: "Meera Patel",
      condition: "Neck Pain & Headaches",
      rating: 5,
      image: "MP",
      testimonial: "Years of desk work caused severe neck pain and frequent headaches. Dr. Ekta not only treated my pain but also taught me exercises and posture techniques to prevent future issues. Life-changing treatment!",
      duration: "Treated for 8 weeks"
    },
    {
      name: "Arjun Reddy",
      condition: "Sciatica",
      rating: 5,
      image: "AR",
      testimonial: "The shooting pain down my leg was unbearable. Dr. Ekta's comprehensive treatment approach including manual therapy and specific exercises eliminated my sciatica completely. Professional and effective care.",
      duration: "Treated for 10 weeks"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Patient Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Read what our patients have to say about their recovery journey 
            and experience with our physiotherapy treatments.
          </p>
        </div>

        {/* Overall Rating */}
        <Card className="p-8 mb-12 bg-gradient-medical text-white shadow-card border-0 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-8 w-8 fill-secondary text-secondary" />
              ))}
            </div>
            <div className="text-4xl font-bold text-secondary mb-2">5.0 / 5.0</div>
            <div className="text-white/90 text-lg">
              Based on 200+ patient reviews
            </div>
            <div className="text-white/80 text-sm mt-2">
              100% of patients would recommend Dr. Ekta
            </div>
          </div>
        </Card>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-card border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-4 w-4 ${
                      star <= testimonial.rating 
                        ? 'fill-secondary text-secondary' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.testimonial}"
              </p>

              {/* Patient Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.condition}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.duration}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-accent shadow-soft border-0 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Recovery Story?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join hundreds of satisfied patients who have successfully recovered 
              from their conditions with personalized physiotherapy care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium transition-colors"
                onClick={() => {
                  const element = document.getElementById('appointment');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Your Consultation
              </button>
              <button 
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-md font-medium transition-colors"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ask Questions
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;