import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, Users, Calendar, Headphones, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 'automation',
      icon: Zap,
      title: "Automated Processing",
      description: "Run payroll in minutes with intelligent automation that eliminates manual calculations and reduces errors by 99.9%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      stat: "99.9%",
      statLabel: "Error Reduction",
      features: ["Auto calculations", "Smart scheduling", "Instant processing"]
    },
    {
      id: 'compliance',
      icon: Shield,
      title: "Compliance Guaranteed",
      description: "Stay compliant with automatic tax calculations, filing, and updates for federal, state, and local regulations.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      stat: "100%",
      statLabel: "Compliance Rate",
      features: ["Tax calculations", "Auto filing", "Regular updates"]
    },
    {
      id: 'selfservice',
      icon: Users,
      title: "Employee Self-Service",
      description: "Empower your team with 24/7 access to pay stubs, tax documents, benefits enrollment, and time-off requests.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      stat: "24/7",
      statLabel: "Access Portal",
      features: ["Pay stubs access", "Benefits enrollment", "Time-off requests"]
    },
    {
      id: 'timetracking',
      icon: Calendar,
      title: "Time Tracking",
      description: "Seamlessly track hours, manage schedules, and integrate time data directly into payroll processing.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      stat: "Real-time",
      statLabel: "Data Sync",
      features: ["Hour tracking", "Schedule management", "Payroll integration"]
    },
    {
      id: 'support',
      icon: Headphones,
      title: "Expert Support",
      description: "Get help when you need it with 24/7 phone, chat, and email support from certified payroll specialists.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
      stat: "24/7",
      statLabel: "Support Team",
      features: ["Phone support", "Live chat", "Email assistance"]
    }
  ];

  return (
    <section id="services" className="relative min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 -mt-28">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-blue-600">HRM Solutions</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Streamline your workforce management with our complete suite of professional services designed for modern businesses
          </p>
        </div>

        {/* Services Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={`/services/${service.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl block"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600 opacity-20 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className={`absolute top-6 left-6 w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg transform transition-all duration-500 ${hoveredIndex === index ? 'scale-110 rotate-6' : ''}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute top-6 right-6 bg-white rounded-lg px-4 py-2 shadow-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {service.stat}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{service.statLabel}</div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-blue-600 font-semibold group/link">
                    <span className="transition-all duration-300 group-hover/link:translate-x-1">Learn More</span>
                    <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover/link:translate-x-2" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div id="contact" className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border-2 border-blue-100">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your HR Operations?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust our platform to streamline their workforce management
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="tel:+916281576979" className="inline-block">
              <button className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span>100% Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
