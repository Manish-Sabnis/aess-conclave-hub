import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Speakers", path: "/speakers" },
    { name: "Register", path: "/register" },
    { name: "Committee", path: "/committee" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Logos Section */}
      <div className="bg-secondary/30 border-b border-border/50 py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-items-center max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="w-24 h-16 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center hover:bg-background transition-all duration-300"
              >
                <span className="text-muted-foreground text-xs">Logo {num}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              IEEE AESS Conclave
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-secondary/50"
                activeClassName="bg-secondary text-primary"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

          {isOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 rounded-lg transition-all duration-300 hover:bg-secondary/50"
                  activeClassName="bg-secondary text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
