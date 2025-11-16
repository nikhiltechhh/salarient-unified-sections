import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "https://i.ibb.co/CKm221g3/Whats-App-Image-2025-11-16-at-9-55-20-PM.jpg",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const customerLogos = [
    { name: "Meesho", color: "#E91E63" },
    { name: "GEP", color: "#1976D2" },
    { name: "Aparajitha", color: "#7B1FA2" },
    { name: "SpiceJet", color: "#E53935" },
    { name: "Zomato", color: "#E23744" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-background/9 via-background/90 to-background/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))]/40 to-[hsl(var(--hero-gradient-end))]/40" />
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 z-10 h-48 w-48 bg-gradient-to-tr from-yellow-200/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 z-10 h-48 w-48 bg-gradient-to-tl from-yellow-200/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-1/4 z-10 h-32 w-32 rotate-45 bg-yellow-300/15 blur-2xl" />
      <div className="absolute bottom-0 right-1/4 z-10 h-32 w-32 rotate-45 bg-yellow-300/15 blur-2xl" />
      
      {/* Animated Circles */}
      <div className="absolute right-10 top-20 z-10 h-24 w-24 animate-pulse rounded-full bg-primary/5 blur-xl" />
      <div className="absolute left-10 top-40 z-10 h-32 w-32 animate-pulse rounded-full bg-accent/5 blur-xl delay-500" />

      <div className="container relative z-20 px-4 py-12 md:px-8 md:py-16 lg:py-20">
        {/* Video Card */}
        {/* <div className="mb-8 flex justify-center md:justify-start lg:mb-12">
          <div className="group flex max-w-md cursor-pointer items-center gap-4 rounded-xl border border-border/50 bg-background/90 p-4 shadow-xl backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-2xl">
            <div className="relative h-20 w-28 overflow-hidden rounded-lg bg-gradient-to-br from-primary/30 to-accent/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 fill-primary text-primary" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 animate-ping rounded-full bg-primary/20" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-foreground">
                Unburden your HR team
              </span>
              <button className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                Play video
                <Play className="h-3 w-3 fill-current" />
              </button>
            </div>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="mx-auto max-w-5xl mt-20 text-center">
          <h1 className="mb-6 animate-fade-in text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            HR software 
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              built for every business
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl animate-fade-in text-base text-foreground/80 sm:text-lg md:text-xl lg:text-2xl [animation-delay:200ms]">
            Salarient helps you simplify HR operations and create exceptional employee experiences with a smart, cloud-based, mobile-friendly platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex animate-fade-in flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:400ms]">
           <a href="tel:+916281576979">
  <Button
    size="lg"
    className="group min-w-[200px] bg-primary text-base font-medium text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/40"
  >
    Get Started Now
    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
  </Button>
</a>

            <a href="#services">
  <Button
    size="lg"
    variant="outline"
    className="
      min-w-[200px]
      border-2 border-foreground/20
      bg-background/90
      text-base font-medium
      text-foreground
      backdrop-blur-sm
      transition-all
      hover:text-foreground
      hover:scale-105
      hover:border-foreground/40
      hover:bg-background
      hover:shadow-xl
      cursor-pointer
    "
  >
    Explore Services
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</a>

          </div>

          {/* Customer Logos */}
          <div className="mt-16 animate-fade-in md:mt-20 lg:mt-24 [animation-delay:600ms]">
            <div className="mb-6">
              <p className="text-sm font-medium text-muted-foreground">
                Trusted by leading companies worldwide
              </p>
            </div>
            {/* <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              {customerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-60 transition-all duration-300 hover:scale-110 hover:opacity-100"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <span
                    className="text-xl font-bold md:text-2xl"
                    style={{ color: logo.color }}
                  >
                    {logo.name}
                  </span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-yellow-100/20 to-transparent" />
    </section>
  );
};

export default Hero;