import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today to learn more about our programs and how we can help 
            you achieve your academic goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" className="border-border/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" className="border-border/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@example.com" className="border-border/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone</label>
                <Input type="tel" placeholder="+1 (555) 123-4567" className="border-border/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your interests and goals..."
                  className="min-h-[120px] border-border/50"
                />
              </div>
              
              <Button 
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                size="lg"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground">
                We're here to answer your questions and help you take the next step 
                in your educational journey. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="h-5 w-5" />,
                  title: "Visit Us",
                  detail: "123 Education Street, Learning City, LC 12345",
                  extra: "Open campus tours available"
                },
                {
                  icon: <Phone className="h-5 w-5" />,
                  title: "Call Us",
                  detail: "+1 (555) 123-4567",
                  extra: "Mon-Fri 8AM-6PM"
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  title: "Email Us",
                  detail: "info@eduhigh.edu",
                  extra: "24-hour response time"
                },
                {
                  icon: <Clock className="h-5 w-5" />,
                  title: "Office Hours",
                  detail: "Monday - Friday: 8:00 AM - 6:00 PM",
                  extra: "Saturday: 9:00 AM - 2:00 PM"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.detail}</p>
                    <p className="text-sm text-muted-foreground">{item.extra}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-subtle border-primary/20">
              <CardContent className="p-6 space-y-4">
                <h4 className="text-xl font-bold text-foreground">
                  Schedule a Campus Tour
                </h4>
                <p className="text-muted-foreground">
                  Experience our facilities firsthand and meet with our academic counselors.
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Book a Tour
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;