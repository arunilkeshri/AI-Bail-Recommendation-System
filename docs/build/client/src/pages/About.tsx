import AboutSection from "@/components/AboutSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Award, Users, Globe } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2019",
      title: "Project Inception", 
      description: "Research began on AI applications in judicial decision-making"
    },
    {
      year: "2021",
      title: "First Pilot Program",
      description: "Successful pilot implementation in 5 regional courts"
    },
    {
      year: "2022", 
      title: "Technology Validation",
      description: "Achieved 94% accuracy rate across 10,000+ case evaluations"
    },
    {
      year: "2023",
      title: "National Expansion", 
      description: "System deployed across 100+ courts nationwide"
    },
    {
      year: "2024",
      title: "Advanced AI Integration",
      description: "Latest machine learning models with bias detection capabilities"
    }
  ];

  const awards = [
    {
      title: "Legal Tech Innovation Award",
      organization: "American Bar Association",
      year: "2023"
    },
    {
      title: "Excellence in AI Ethics",
      organization: "IEEE Computer Society", 
      year: "2023"
    },
    {
      title: "Justice Technology Leadership",
      organization: "National Center for State Courts",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Scale className="h-10 w-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">About Our System</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between traditional legal processes and modern artificial intelligence 
            to create a fairer, more efficient justice system.
          </p>
        </div>

        {/* Main About Content */}
        <AboutSection />

        {/* Timeline */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Five years of research, development, and real-world implementation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-border"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center" data-testid={`milestone-${milestone.year}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'}`}>
                    <Card className="hover-elevate transition-all duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="secondary">{milestone.year}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <Card>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-serif font-bold">Awards & Recognition</h2>
              </div>
              <p className="text-muted-foreground">
                Recognized by leading organizations for innovation and excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="text-center" data-testid={`award-${index}`}>
                  <div className="mb-3">
                    <Award className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <h3 className="font-semibold mb-1">{award.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                  <Badge variant="outline">{award.year}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Global Impact */}
        <Card className="bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Globe className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold">Global Impact</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary">125+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Courts Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Cases Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">States Active</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">94.7%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Accuracy Rate</div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground">
                Making a difference in judicial systems across the nation, one fair decision at a time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}