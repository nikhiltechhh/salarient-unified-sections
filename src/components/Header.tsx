import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  hasDropdown: boolean;
  dropdownItems?: string[];
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { 
      name: "Features", 
      hasDropdown: true,
      dropdownItems: ["Employee Management", "Payroll Processing", "Time & Attendance", "Leave Management"]
    },
    { 
      name: "Solutions", 
      hasDropdown: true,
      dropdownItems: ["Small Business", "Enterprise", "Remote Teams", "Global Workforce"]
    },
    { name: "Pricing", hasDropdown: false },
    { name: "Customers", hasDropdown: false },
    { 
      name: "Partners", 
      hasDropdown: true,
      dropdownItems: ["Become a Partner", "Partner Portal", "Integrations", "API Access"]
    },
    { 
      name: "Resources", 
      hasDropdown: true,
      dropdownItems: ["Blog", "Case Studies", "Whitepapers", "Webinars", "Help Center"]
    },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-lg shadow-primary/20">
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
            <div key={item.name} className="relative">
              <button
                onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary",
                  "group py-2"
                )}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown 
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      activeDropdown === item.name && "rotate-180"
                    )} 
                  />
                )}
              </button>
              
              {/* Desktop Dropdown */}
              {item.hasDropdown && activeDropdown === item.name && (
                <div className="absolute left-0 top-full z-50 mt-2 w-56 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2">
                  <div className="rounded-lg border border-border bg-background shadow-lg">
                    <div className="p-2">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block rounded-md px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Animated Hamburger Menu Button */}
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out",
              mobileMenuOpen && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-4 bg-foreground transition-all duration-300 ease-in-out",
              mobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out",
              mobileMenuOpen && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-background shadow-lg transition-all duration-300 ease-in-out lg:hidden",
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          )}
        >
          <nav className="container flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-border/50 pb-2 last:border-0">
                <button
                  onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                  className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        activeDropdown === item.name && "rotate-180"
                      )} 
                    />
                  )}
                </button>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && (
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      activeDropdown === item.name
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-16 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
