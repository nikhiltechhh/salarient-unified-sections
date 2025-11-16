import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Shield, Users, Calendar, Headphones, Zap, ArrowRight, CheckCircle, ArrowLeft, Star, TrendingUp, Award, Target, BarChart3, Settings } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesData = {
    automation: {
      icon: Zap,
      title: "Automated Processing",
      tagline: "Lightning-Fast Payroll at Your Fingertips",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      description: "Transform your payroll operations with cutting-edge automation technology that processes payroll in minutes, not hours. Our intelligent system handles complex calculations, tax withholdings, and direct deposits with unprecedented accuracy.",
      
      benefits: [
        {
          icon: TrendingUp,
          title: "99.9% Accuracy Rate",
          description: "Advanced algorithms ensure error-free calculations every time"
        },
        {
          icon: Clock,
          title: "10x Faster Processing",
          description: "Complete full payroll cycles in under 5 minutes"
        },
        {
          icon: Target,
          title: "Zero Manual Entry",
          description: "Eliminate human error with fully automated data integration"
        }
      ],
      
      features: [
        {
          title: "Smart Calculations",
          items: ["Automatic tax withholding", "Multi-state processing", "Overtime calculations", "Bonus & commission handling"]
        },
        {
          title: "Intelligent Scheduling",
          items: ["Customizable pay periods", "Auto-run on schedule", "Holiday adjustments", "Multi-company support"]
        },
        {
          title: "Instant Processing",
          items: ["Real-time updates", "Immediate direct deposits", "Instant pay stub generation", "Live reporting dashboards"]
        }
      ],
      
      stats: [
        { value: "500K+", label: "Payrolls Processed Monthly" },
        { value: "99.9%", label: "Accuracy Rate" },
        { value: "5 min", label: "Average Processing Time" },
        { value: "24/7", label: "System Availability" }
      ]
    },
    
    compliance: {
      icon: Shield,
      title: "Compliance Guaranteed",
      tagline: "Stay Protected with Automated Compliance",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
      description: "Navigate complex regulations effortlessly with our comprehensive compliance system. We automatically handle federal, state, and local tax requirements, ensuring your business stays compliant and penalty-free.",
      
      benefits: [
        {
          icon: Shield,
          title: "100% Compliance Guarantee",
          description: "We guarantee accuracy or we pay the penalties"
        },
        {
          icon: Award,
          title: "Certified Specialists",
          description: "Team of CPAs and tax professionals monitoring changes"
        },
        {
          icon: Settings,
          title: "Automatic Updates",
          description: "System updates with every regulatory change instantly"
        }
      ],
      
      features: [
        {
          title: "Tax Management",
          items: ["Federal tax calculations", "State & local taxes", "Quarterly filings", "Year-end reporting (W-2, 1099)"]
        },
        {
          title: "Regulatory Compliance",
          items: ["ACA compliance tracking", "FLSA overtime rules", "Wage garnishments", "New hire reporting"]
        },
        {
          title: "Audit Protection",
          items: ["Complete audit trails", "Document archiving", "Compliance alerts", "Expert audit support"]
        }
      ],
      
      stats: [
        { value: "50+", label: "States Covered" },
        { value: "100%", label: "Compliance Rate" },
        { value: "10K+", label: "Tax Regulations Tracked" },
        { value: "$0", label: "Penalty Fees for Clients" }
      ]
    },
    
    selfservice: {
      icon: Users,
      title: "Employee Self-Service",
      tagline: "Empower Your Workforce with 24/7 Access",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
      description: "Give your employees complete control over their information with an intuitive self-service portal. Access pay information, manage benefits, request time off, and update personal details anytime, anywhere.",
      
      benefits: [
        {
          icon: Users,
          title: "Employee Satisfaction",
          description: "95% employee satisfaction with self-service features"
        },
        {
          icon: Clock,
          title: "Reduce HR Workload",
          description: "Save 15+ hours per week on administrative tasks"
        },
        {
          icon: TrendingUp,
          title: "Paperless Operations",
          description: "Go fully digital and reduce paper waste by 80%"
        }
      ],
      
      features: [
        {
          title: "Document Access",
          items: ["Pay stubs (current & historical)", "Tax documents (W-2, W-4)", "Benefits summaries", "Employment verification"]
        },
        {
          title: "Benefits Management",
          items: ["Enrollment & changes", "Coverage details", "Dependent management", "FSA/HSA contributions"]
        },
        {
          title: "Time Management",
          items: ["PTO requests", "Time-off balances", "Schedule viewing", "Shift swap requests"]
        }
      ],
      
      stats: [
        { value: "24/7", label: "Portal Access" },
        { value: "95%", label: "User Satisfaction" },
        { value: "3 sec", label: "Average Load Time" },
        { value: "99.9%", label: "Uptime Guarantee" }
      ]
    },
    
    timetracking: {
      icon: Calendar,
      title: "Time Tracking",
      tagline: "Accurate Time Management Made Simple",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      description: "Streamline time and attendance with our comprehensive tracking solution. Capture employee hours accurately, manage schedules efficiently, and integrate seamlessly with payroll for error-free processing.",
      
      benefits: [
        {
          icon: BarChart3,
          title: "Real-Time Insights",
          description: "Live dashboards showing attendance and labor costs"
        },
        {
          icon: Target,
          title: "Reduce Time Theft",
          description: "Biometric options prevent buddy punching"
        },
        {
          icon: TrendingUp,
          title: "Optimize Scheduling",
          description: "AI-powered scheduling based on business needs"
        }
      ],
      
      features: [
        {
          title: "Time Capture",
          items: ["Mobile clock in/out", "Biometric verification", "GPS location tracking", "Offline mode support"]
        },
        {
          title: "Schedule Management",
          items: ["Drag-and-drop scheduling", "Shift templates", "Overtime alerts", "Break time tracking"]
        },
        {
          title: "Payroll Integration",
          items: ["Auto-sync to payroll", "Exception handling", "Approval workflows", "Custom pay rules"]
        }
      ],
      
      stats: [
        { value: "Real-time", label: "Data Synchronization" },
        { value: "40%", label: "Reduction in Time Theft" },
        { value: "15 hrs", label: "Saved Per Week" },
        { value: "5+", label: "Clock-In Methods" }
      ]
    },
    
    support: {
      icon: Headphones,
      title: "Expert Support",
      tagline: "World-Class Support When You Need It",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
      description: "Experience unparalleled customer service with our team of certified payroll specialists available 24/7. Get instant help via phone, chat, or email from experts who understand your business needs.",
      
      benefits: [
        {
          icon: Award,
          title: "Certified Specialists",
          description: "All support staff are certified payroll professionals"
        },
        {
          icon: Clock,
          title: "Rapid Response",
          description: "Average response time under 2 minutes"
        },
        {
          icon: Star,
          title: "98% Satisfaction",
          description: "Industry-leading customer satisfaction scores"
        }
      ],
      
      features: [
        {
          title: "Multi-Channel Support",
          items: ["24/7 phone support", "Live chat assistance", "Email ticketing system", "Video call consultations"]
        },
        {
          title: "Proactive Assistance",
          items: ["Regular account reviews", "Compliance alerts", "Best practice guidance", "Training webinars"]
        },
        {
          title: "Dedicated Resources",
          items: ["Named account manager", "Implementation specialist", "Knowledge base access", "Community forums"]
        }
      ],
      
      stats: [
        { value: "24/7", label: "Availability" },
        { value: "< 2 min", label: "Response Time" },
        { value: "98%", label: "Satisfaction Rate" },
        { value: "100+", label: "Support Specialists" }
      ]
    }
  };

  const service = servicesData[serviceId];

  // If service not found, redirect to home
  if (!service) {
    navigate('/');
    return null;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Curved Bottom */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        {/* Image Container */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-blue-900/90"></div>
        </div>

        {/* Curved Bottom SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64 C360,10 1080,10 1440,64 L1440,120 L0,120 Z" fill="rgb(249, 250, 251)" />
          </svg>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* <button
              onClick={() => navigate('/')}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </button> */}

            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-2xl mb-6">
              <Icon className="w-10 h-10 text-blue-600" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light">{service.tagline}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{service.description}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {service.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-gray-100 hover:border-blue-600 transition-all duration-300 hover:shadow-xl">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Key <span className="text-blue-600">Benefits</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-600 group">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <BenefitIcon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Powerful <span className="text-blue-600">Features</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your HR operations with {service.title}. Join thousands of satisfied customers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <a href="tel:+916281576979" className="inline-block">
            <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </a>

            <button className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-blue-800 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;