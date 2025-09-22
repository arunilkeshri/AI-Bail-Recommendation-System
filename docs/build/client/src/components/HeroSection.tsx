import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BarChart3 } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_courthouse_hero_image_f4dda1d5.png";

interface HeroSectionProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

export default function HeroSection({ onGetStarted, onLearnMore }: HeroSectionProps) {
  const handleGetStarted = () => {
    console.log('Get started clicked');
    onGetStarted?.();
  };

  const handleLearnMore = () => {
    console.log('Learn more clicked');
    onLearnMore?.();
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Modern courthouse representing justice and technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            <Shield className="w-3 h-3 mr-1" />
            Trusted by Legal Professionals
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            AI-Powered
            <span className="block bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Bail Decisions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced artificial intelligence meets legal expertise to provide data-driven insights 
            for fair, efficient, and consistent bail recommendations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="text-lg px-8 py-6 shadow-lg"
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleLearnMore}
              className="text-lg px-8 py-6 bg-background/20 backdrop-blur-sm border-2"
              data-testid="button-learn-more"
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              View Dashboard
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "10,000+", label: "Cases Processed" },
              { number: "95%", label: "Accuracy Rate" },
              { number: "40%", label: "Time Saved" }
            ].map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
                <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}