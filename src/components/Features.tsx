import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Award, Headphones, BookOpen, Zap } from "lucide-react";
import scienceImage from "@/assets/science-collaboration.jpg";
import digitalImage from "@/assets/digital-learning.jpg";

const Features = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Small Class Sizes",
      description: "Maximum 20 students per class ensuring personalized attention and better learning outcomes."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Choose from morning, afternoon, or evening classes to fit your lifestyle and commitments."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Teachers",
      description: "Learn from experienced, certified educators passionate about student success."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock academic support system."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Digital Resources",
      description: "Access comprehensive online materials, interactive content, and study tools."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast-Track Options",
      description: "Accelerated programs for motivated students who want to graduate early."
    }
  ];

  return (
    <section className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary/20">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Features That Make the Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our innovative approach to high school education combines traditional excellence 
            with modern technology and personalized learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors duration-300 hover:shadow-soft">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image Showcase */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={scienceImage}
                alt="Students collaborating in science lab"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-medium">Collaborative Learning</p>
                <p className="text-xs text-muted-foreground">Hands-on projects and teamwork</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={digitalImage}
                alt="Student using digital learning tools"
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-transparent"></div>
              <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-medium">Digital Innovation</p>
                <p className="text-xs text-muted-foreground">Modern learning tools</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "98%", label: "Graduation Rate", description: "Students successfully graduate" },
            { number: "92%", label: "College Acceptance", description: "Go on to higher education" },
            { number: "15:1", label: "Student-Teacher Ratio", description: "Personalized attention" },
            { number: "25+", label: "Years Experience", description: "Educational excellence" }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">{stat.number}</div>
              <div className="font-medium text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;