import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/cases", label: "Cases" },
    { path: "/recommendations", label: "Recommendations" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    return path !== "/" && location.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-2 hover-elevate p-2 rounded-md">
              <Scale className="h-8 w-8 text-primary" />
              <span className="font-serif font-bold text-xl">AI Bail System</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} data-testid={`link-${item.label.toLowerCase()}`}>
                  <Button 
                    variant={isActive(item.path) ? "secondary" : "ghost"}
                    size="sm"
                    className="text-sm font-medium"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                data-testid="button-menu-toggle"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} data-testid={`mobile-link-${item.label.toLowerCase()}`}>
                  <Button
                    variant={isActive(item.path) ? "secondary" : "ghost"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}