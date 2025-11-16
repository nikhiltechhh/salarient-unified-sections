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
    <section className="relative min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 -mt-28">

      <div className="relative max-w-7xl mx-auto">

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={index}
                to={`/services/${service.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl block"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >

                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
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
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
