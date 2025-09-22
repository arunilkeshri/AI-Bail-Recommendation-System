import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", testId: "link-github" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", testId: "link-linkedin" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", testId: "link-twitter" },
    { icon: Mail, href: "mailto:contact@aibailsystem.com", label: "Email", testId: "link-email" },
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-serif font-bold text-2xl">AI Bail System</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Advancing justice through artificial intelligence. Our system provides data-driven insights 
              to support fair and efficient bail decisions in the modern legal system.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="/dashboard" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </a>
              <a href="/cases" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cases
              </a>
              <a href="/recommendations" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Recommendations
              </a>
              <a href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Data Protection
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} AI Bail Recommendation System. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    asChild
                    data-testid={social.testId}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="hover-elevate"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}