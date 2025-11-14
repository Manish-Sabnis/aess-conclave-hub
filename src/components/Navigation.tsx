import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo5 from "@/assets/logo5.png";

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
      <div className="py-3 md:py-8">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex items-center justify-center gap-4 md:gap-12">
            {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => {
              // Logo 1 (index 0) and Logo 4 (index 3) - horizontal, enlarge
              // Logo 2 (index 1) and Logo 5 (index 4) - square, shrink
              // Logo 3 (index 2) - middle one
              let widthClass = '';
              if (index === 0) {
                // Horizontal logos - larger
                widthClass = 'w-38 sm:w-44 md:w-72';
              } else if (index === 1) {
                // Square logos - smaller
                widthClass = 'w-38 sm:w-24 md:w-32';
              }
              else if (index === 3) {
                // Horizontal logos - larger
                widthClass = 'w-38 sm:w-44 md:w-80';
              }
                else if (index === 4) {
                // Square logos - smaller
                widthClass = 'w-20 sm:w-24 md:w-30';
              } else {
                // Middle logo
                widthClass = 'w-40 sm:w-48 md:w-50';
              }
              
              return (
                <div
                  key={index}
                  className={`${widthClass} h-20 sm:h-24 md:h-32 rounded-lg bg-background/50 flex items-center justify-center hover:bg-background transition-all duration-300 p-2 md:p-3`}
                >
                  <img src={logo} alt={`Partner logo ${index + 1}`} className="w-full h-full object-contain" />
                </div>
              );
            })}
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
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-secondary/10"
                activeClassName="bg-secondary/5 text-primary"
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
                  className="block px-4 py-2 rounded-lg transition-all duration-300 hover:bg-secondary/10"
                  activeClassName="bg-secondary/20 text-primary"
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
