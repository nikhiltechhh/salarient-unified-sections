import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  const footerData = {
    company: {
      name: '',
      tagline: 'Empowering organizations with innovative human resource management solutions for a better workplace.',
      logo: 'https://i.ibb.co/s9J9ScsZ/Salar.png', // <-- YOUR LOGO FILE
      social: [
        // { icon: Facebook, href: '#facebook', label: 'Facebook' },
        // { icon: Twitter, href: '#twitter', label: 'Twitter' },
        { icon: Linkedin, href: 'linkedin.com/in/salarient-hr-software-solutions-967405379/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://www.instagram.com/salarient_hr_solutions/?igsh=MXE1d24xY2dsdHZodw%3D%3D#', label: 'Instagram' }
      ]
    },
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' },
     
    ],
    resources: [
      { name: 'Payroll Processing', href: '#blog' },
      { name: 'Time & Attendance', href: '#docs' },
      { name: 'HR Management', href: '#support' },
      { name: 'Benifits Admin', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ],
    contact: [
      { icon: MapPin, text: '3-2-44, Bagameri, Kukatpally, Hyderabad -500072' },
      { icon: Mail, text: 'salarienthrsolutions@outlook.com' },
      { icon: Phone, text: '+916281576979' },
      { icon: Clock, text: 'Mon - Fri: 9AM - 6PM' }
    ]
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"></div>

      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="rgba(30, 58, 138, 0.5)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">

        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer">

              {/* LOGO PLACEHOLDER */}
              <div className="w-24 h-16  overflow-hidden  bg-white flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                <img
                  src={footerData.company.logo}
                  alt="Company Logo"
                  className="object-contain w-full h-full"
                />
              </div>

              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {footerData.company.name}
              </h3>
            </div>

            <p className="text-blue-200 leading-relaxed">
              {footerData.company.tagline}
            </p>

            <div className="flex space-x-3">
              {footerData.company.social.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`quick-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-blue-200 hover:text-cyan-400 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight
                      size={16}
                      className={`mr-2 transform transition-all duration-300 ${hoveredLink === `quick-${idx}` ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}
                    />
                    <span className={`transform transition-transform duration-300 ${hoveredLink === `quick-${idx}` ? 'translate-x-1' : ''}`}>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Products
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {footerData.resources.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`resource-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-blue-200 hover:text-cyan-400 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight
                      size={16}
                      className={`mr-2 transform transition-all duration-300 ${hoveredLink === `resource-${idx}` ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}
                    />
                    <span className={`transform transition-transform duration-300 ${hoveredLink === `resource-${idx}` ? 'translate-x-1' : ''}`}>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
              </h4>

              <ul className="space-y-4">
                {footerData.contact.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-blue-200 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                      <item.icon size={16} className="group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Salarient HR Solutions. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
