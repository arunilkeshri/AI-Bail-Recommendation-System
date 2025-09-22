import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Calendar, 
  Clock, 
  Phone,
  Mail,
  MapPin,
  Users,
  BookOpen,
  Headphones
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      title: "Sales Inquiry",
      description: "Interested in implementing our system? Get in touch with our sales team.",
      icon: <Users className="h-6 w-6 text-primary" />,
      action: "Schedule Demo",
      priority: "high"
    },
    {
      title: "Technical Support",
      description: "Need help with system configuration or troubleshooting?", 
      icon: <Headphones className="h-6 w-6 text-primary" />,
      action: "Get Support",
      priority: "urgent"
    },
    {
      title: "Documentation",
      description: "Access comprehensive guides, API docs, and training materials.",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      action: "View Docs",
      priority: "self-service"
    },
    {
      title: "Partnership",
      description: "Explore partnership opportunities with our legal tech platform.",
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      action: "Discuss Partnership",
      priority: "medium"
    }
  ];

  const supportHours = [
    { level: "Emergency Support", availability: "24/7", response: "< 1 hour", badge: "priority" },
    { level: "Priority Support", availability: "Business Hours", response: "< 4 hours", badge: "standard" },
    { level: "General Inquiries", availability: "Business Hours", response: "< 24 hours", badge: "general" }
  ];

  const handleContactMethod = (method: string) => {
    console.log('Contact method selected:', method);
  };

  const handleSubmit = (data: any) => {
    console.log('Contact form submitted:', data);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-primary/10 text-primary border-primary/20";
      case "urgent": return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium": return "bg-chart-3/10 text-chart-3 border-chart-3/20";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "priority": return "bg-destructive/10 text-destructive border-destructive/20";
      case "standard": return "bg-chart-3/10 text-chart-3 border-chart-3/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our AI Bail Recommendation System? Our team of experts 
            is here to help you implement, configure, and optimize your judicial processes.
          </p>
        </div>

        {/* Contact Methods */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-elevate transition-all duration-200 cursor-pointer" data-testid={`contact-method-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">{method.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold">{method.title}</h3>
                        <Badge className={getPriorityColor(method.priority)}>
                          {method.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleContactMethod(method.title)}
                        data-testid={`button-${method.title.toLowerCase().replace(' ', '-')}`}
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Levels */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Support Response Times</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {supportHours.map((support, index) => (
                <div key={index} className="text-center p-4 border rounded-lg" data-testid={`support-level-${index}`}>
                  <Badge className={getBadgeColor(support.badge)} variant="secondary">
                    {support.level}
                  </Badge>
                  <div className="mt-3 space-y-2">
                    <div className="text-sm text-muted-foreground">{support.availability}</div>
                    <div className="font-semibold text-lg">{support.response}</div>
                    <div className="text-xs text-muted-foreground">Average Response Time</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Contact Form */}
        <ContactForm onSubmit={handleSubmit} />

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Emergency Hotline</h3>
              <p className="text-sm text-muted-foreground mb-4">
                24/7 support for critical system issues
              </p>
              <Button variant="outline" size="sm" data-testid="button-emergency-call">
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Schedule Meeting</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Book a consultation with our experts
              </p>
              <Button variant="outline" size="sm" data-testid="button-schedule-meeting">
                Book Meeting
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Send us detailed questions or requests
              </p>
              <Button variant="outline" size="sm" data-testid="button-email-support">
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}