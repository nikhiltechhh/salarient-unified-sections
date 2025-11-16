import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const customerLogos = [
    { name: "Meesho", color: "#E91E63" },
    { name: "GEP", color: "#1976D2" },
    { name: "Aparajitha", color: "#7B1FA2" },
    { name: "SpiceJet", color: "#E53935" },
    { name: "Zomato", color: "#E23744" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 h-48 w-48 bg-gradient-to-tr from-yellow-200/30 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 h-48 w-48 bg-gradient-to-tl from-yellow-200/30 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-32 w-32 rotate-45 bg-yellow-300/20 blur-2xl" />
      <div className="absolute bottom-0 right-1/4 h-32 w-32 rotate-45 bg-yellow-300/20 blur-2xl" />

      <div className="container relative px-4 py-12 md:px-8 md:py-16 lg:py-20">
        {/* Video Card */}
        <div className="mb-8 flex justify-center md:justify-start lg:mb-12">
          <div className="group flex max-w-md cursor-pointer items-center gap-4 rounded-xl border bg-background/80 p-4 shadow-sm backdrop-blur transition-all hover:shadow-md">
            <div className="h-20 w-28 overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="flex h-full items-center justify-center">
                <Play className="h-8 w-8 text-primary" />
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
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            HR software
            <br />
            for every business
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-base text-foreground/80 sm:text-lg md:text-xl lg:text-2xl">
            Streamline all your HR processes and deliver exceptional employee experiences
            with Salarient—cloud-based HR software that's intuitive, agile, mobile-friendly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group min-w-[200px] bg-primary text-base font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              Sign up for free trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] border-2 border-foreground/20 bg-background/80 text-base font-medium text-foreground backdrop-blur transition-all hover:border-foreground/40 hover:bg-background"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Customer Logos */}
          <div className="mt-16 md:mt-20 lg:mt-24">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              {customerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-100"
                >
                  <span
                    className="text-xl font-bold md:text-2xl"
                    style={{ color: logo.color }}
                  >
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Mountains */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-100/40 to-transparent" />
    </section>
  );
};

export default Hero;
