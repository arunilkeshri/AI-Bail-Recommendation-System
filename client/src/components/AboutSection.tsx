import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Brain, 
  Shield, 
  Zap,
  Code,
  Gavel,
  Database
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar?: string;
  initials: string;
  specialization: string[];
}

export default function AboutSection() {
  //todo: remove mock functionality - replace with real team data
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead AI Researcher",
      description: "Ph.D. in Machine Learning with 10+ years experience in judicial AI systems",
      initials: "SJ",
      specialization: ["Machine Learning", "Natural Language Processing", "Predictive Analytics"]
    },
    {
      name: "Michael Chen",
      role: "Legal Technology Director",
      description: "Former prosecutor with expertise in criminal justice reform and legal tech",
      initials: "MC",
      specialization: ["Criminal Law", "Legal Process", "Policy Development"]
    },
    {
      name: "Dr. Alex Rodriguez",
      role: "Data Science Lead",
      description: "Statistician specializing in bias detection and algorithmic fairness",
      initials: "AR",
      specialization: ["Statistical Analysis", "Bias Detection", "Data Ethics"]
    },
    {
      name: "Emma Wilson",
      role: "Software Engineer",
      description: "Full-stack developer focused on building scalable legal technology solutions",
      initials: "EW",
      specialization: ["Full Stack Development", "System Architecture", "UI/UX Design"]
    }
  ];

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Advanced AI",
      description: "State-of-the-art machine learning algorithms trained on comprehensive legal datasets"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Bias Mitigation",
      description: "Built-in fairness checks and bias detection to ensure equitable recommendations"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Processing",
      description: "Instant analysis and recommendations to support efficient decision-making"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Secure Data",
      description: "Enterprise-grade security with end-to-end encryption and compliance standards"
    }
  ];

  const stats = [
    { icon: <Users className="h-5 w-5" />, label: "Cases Analyzed", value: "50,000+" },
    { icon: <Award className="h-5 w-5" />, label: "Accuracy Rate", value: "94.7%" },
    { icon: <Gavel className="h-5 w-5" />, label: "Courts Using System", value: "125+" },
    { icon: <Code className="h-5 w-5" />, label: "Years in Development", value: "5+" }
  ];

  return (
    <div className="space-y-12">
      {/* Mission Statement */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Target className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          To revolutionize the bail decision-making process through artificial intelligence, 
          ensuring fair, consistent, and data-driven recommendations that balance public safety 
          with individual rights in the pursuit of justice.
        </p>
      </div>

      {/* Vision */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Eye className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-serif font-bold">Our Vision</h2>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A future where technology enhances human judgment in the legal system, creating 
          more equitable outcomes while maintaining the essential human element in judicial decisions.
        </p>
      </div>

      {/* Statistics */}
      <Card>
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Impact by the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
                <div className="flex justify-center mb-2 text-primary">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <div>
        <h3 className="text-2xl font-semibold text-center mb-8">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`feature-${feature.title.toLowerCase().replace(' ', '-')}`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h3 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`team-member-${member.name.toLowerCase().replace(' ', '-')}`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-3">{member.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialization.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Technology & Standards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">AI & Machine Learning</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>TensorFlow & PyTorch</div>
                <div>Natural Language Processing</div>
                <div>Predictive Analytics</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Security & Compliance</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>SOC 2 Type II Certified</div>
                <div>GDPR Compliant</div>
                <div>End-to-End Encryption</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal Standards</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>ABA Technology Guidelines</div>
                <div>Federal Rules Compliance</div>
                <div>Judicial Ethics Standards</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}