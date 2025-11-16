import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", hasDropdown: true },
    { name: "Solutions", hasDropdown: true },
    { name: "Pricing", hasDropdown: false },
    { name: "Customers", hasDropdown: false },
    { name: "Partners", hasDropdown: true },
    { name: "Resources", hasDropdown: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-foreground">Salarient</span>
            <span className="text-xs text-muted-foreground">HR Payroll Solutions</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={cn(
                "flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary",
                "group"
              )}
            >
              {item.name}
              {item.hasDropdown && (
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-16 border-b bg-background p-4 shadow-lg lg:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="flex items-center justify-between text-left text-sm font-medium text-foreground"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
