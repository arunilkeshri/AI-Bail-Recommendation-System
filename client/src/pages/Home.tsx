import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import { BarChart3, Shield, Zap, Users, ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Data-Driven Insights",
      description: "Advanced analytics provide comprehensive risk assessments based on historical data and predictive modeling."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Bias Mitigation",
      description: "Built-in fairness algorithms detect and minimize potential bias to ensure equitable recommendations."
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Real-Time Processing",
      description: "Instant analysis and recommendations enable faster, more efficient bail decision-making."
    }
  ];

  const benefits = [
    "Reduce processing time by up to 40%",
    "Improve consistency in bail decisions",
    "Enhanced public safety through risk assessment",
    "Comprehensive audit trail and documentation",
    "Integration with existing court systems",
    "24/7 system availability and support"
  ];

  const handleGetStarted = () => {
    // Navigate to dashboard
    window.location.href = "/dashboard";
  };

  const handleLearnMore = () => {
    // Smooth scroll to features section
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        onGetStarted={handleGetStarted}
        onLearnMore={handleLearnMore}
      />

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Revolutionizing Bail Decisions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered system combines cutting-edge technology with legal expertise 
              to provide fair, fast, and accurate bail recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-200" data-testid={`feature-${index}`}>
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Why Choose Our System?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your court's bail process with proven technology that enhances 
                decision-making while maintaining judicial discretion and human oversight.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`benefit-${index}`}>
                    <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">94.7%</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    Accuracy Rate
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Our system maintains industry-leading accuracy while processing thousands 
                    of cases across multiple jurisdictions.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-foreground">50K+</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        Cases Processed
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">125+</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        Courts Served
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Bail Process?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading courts nationwide in implementing fair, efficient, and data-driven bail decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6" data-testid="button-request-demo">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" data-testid="button-learn-more">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}