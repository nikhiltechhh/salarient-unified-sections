import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Users, Shield, Cpu, ArrowRight, Sparkles } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [stats, setStats] = useState({ clients: 0, interactions: 0, satisfaction: 0 });
  const statsRef = useRef(null);

  // initial fade-in
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  // Stats animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !statsAnimated) {
            setStatsAnimated(true);
            animateStats();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsAnimated]);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        clients: Math.floor(50 * progress),
        interactions: Math.floor(5000 * progress),
        satisfaction: Math.floor(98 * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setStats({ clients: 50, interactions: 5000, satisfaction: 98 });
      }
    }, duration / steps);
  };

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Experience Management",
      description: "Omnichannel customer support, VIP routing, and CX analytics to boost satisfaction and retention."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Back Office Processing",
      description: "Payroll reconciliation, invoice processing, data entry and document workflows to streamline operations."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Safety Solutions",
      description: "Content moderation, fraud detection, and policy enforcement to protect your platform and users."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & IT Services",
      description: "Custom AI models, automation, integrations and managed IT services to accelerate innovation."
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 text-blue-600">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider">About Us</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Global Leader in Payroll <br className="hidden md:block" />
            <span className="text-blue-600">& Customer Experience</span>
          </h2>

          <div
            className="h-1 bg-blue-600 mx-auto transition-all duration-700"
            style={{ width: isVisible ? "96px" : "0px" }}
          />
        </div>

        {/* Leadership Section */}
        <div
          className={`max-w-4xl mx-auto mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* CEO */}
            <div className="flex flex-col items-center text-center shadow-xl rounded-xl">
              <div className="relative inline-block mb-4">
                <h3 className="text-3xl font-bold text-gray-900">G Vamshi Krishna Reddy</h3>
                <span className="absolute -top-8 -right-8 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Founder & CEO
                </span>
              </div>
              <p className="text-gray-600 max-w-xs">
                Leading Salarient's vision to revolutionize payroll management and customer experience globally
              </p>
            </div>

            {/* Co-founder */}
            <div className="flex flex-col items-center text-center shadow-xl rounded-xl">
              <div className="relative inline-block mb-4">
                <h3 className="text-3xl font-bold text-gray-900">K Naveen Reddy</h3>
                <span className="absolute -top-8 -right-20 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  Co-founder
                </span>
              </div>
              <p className="text-gray-600 max-w-xs">
                Driving innovation and strategic growth across all business operations
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

          {/* Left */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              Founded in 2025, <span className="font-bold text-gray-900">SALARIENT HR solutions </span> was born from a simple frustration: payroll shouldn't be this complicated. Our founders, former CFOs at growing companies, experienced firsthand the challenges of managing payroll with outdated, inflexible systems.
              <span className="font-bold text-gray-900"> </span>. They envisioned a modern payroll platform that would be powerful enough for enterprise needs yet simple enough for small businesses. Today, SALARIENT HR solutions serves 50+ businesses and processes 5000+ payrolls annually. We've grown from a small startup to a leading payroll provider, but we've never lost sight of our core mission: making payroll and HR management effortless for businesses everywhere.
            </p>

            <div
              className="border-l-4 border-blue-600 pl-6 py-4 transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-8px)",
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses with intelligent, automated payroll solutions that save time, reduce errors, and ensure compliance—so they can focus on what matters most: growing their business and taking care of their people.
              </p>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-8 pt-8">
              <div className="transition-transform duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-blue-600">{stats.clients}+</div>
                <p className="text-sm text-gray-600">Global Clients</p>
              </div>
              <div className="transition-transform duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-blue-600">{stats.interactions}+</div>
                <p className="text-sm text-gray-600">Interactions</p>
              </div>
              <div className="transition-transform duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-blue-600">{stats.satisfaction}%</div>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                className="w-full h-[500px] object-cover"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;