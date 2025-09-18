import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Beaker, Globe, Palette, Code } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Advanced Mathematics",
      description: "Master calculus, statistics, and advanced mathematical concepts with interactive problem-solving.",
      level: "Advanced",
      duration: "2 Semesters",
      students: "1,200",
      color: "text-primary",
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: "Chemistry & Physics",
      description: "Explore the fundamental laws of nature through hands-on experiments and theoretical study.",
      level: "Intermediate",
      duration: "2 Semesters",
      students: "980",
      color: "text-secondary",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Literature & Writing",
      description: "Develop critical thinking and communication skills through classic and contemporary texts.",
      level: "All Levels",
      duration: "1 Semester",
      students: "1,500",
      color: "text-accent",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "World History",
      description: "Journey through civilizations and understand how historical events shape our modern world.",
      level: "Intermediate",
      duration: "1 Semester",
      students: "800",
      color: "text-primary",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Arts",
      description: "Express yourself through various artistic mediums including digital art, music, and drama.",
      level: "All Levels",
      duration: "1 Semester",
      students: "650",
      color: "text-secondary",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Computer Science",
      description: "Learn programming fundamentals, web development, and prepare for the digital future.",
      level: "Beginner",
      duration: "2 Semesters",
      students: "1,100",
      color: "text-accent",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary/20">
            Our Courses
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Comprehensive High School Curriculum
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of courses designed to challenge and inspire students 
            while preparing them for college and career success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="space-y-4">
                <div className={`${course.color} group-hover:scale-110 transition-transform duration-300`}>
                  {course.icon}
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {course.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {course.duration}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {course.students} students enrolled
                  </span>
                  <Button size="sm" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-secondary text-secondary-foreground hover:opacity-90"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;