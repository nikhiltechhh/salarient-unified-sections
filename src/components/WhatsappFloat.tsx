import React, { useState, useEffect } from 'react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
   
    const phoneNumber = '+916281576979';
    const message = encodeURIComponent('Hello! I would like to know more about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Tooltip */}
      <div
        className={`absolute right-20 top-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          <p className="text-sm font-semibold text-gray-800">Chat with us!</p>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
      </div>

      {/* Main Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Outer Glow Ring */}
        <div
          className={`absolute inset-0 bg-green-500 rounded-full transition-all duration-300 ${
            isHovered ? 'scale-110 opacity-30' : 'scale-100 opacity-20'
          }`}
        ></div>

        {/* Button */}
        <div
          className={`relative bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        >
          <div className="w-16 h-16 flex items-center justify-center">
            {/* WhatsApp Logo SVG */}
            <svg
              viewBox="0 0 32 32"
              className="w-9 h-9"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.488 2.025 7.788L.05 31.95l8.363-2.013A15.915 15.915 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.338c-2.5 0-4.863-.688-6.888-1.888l-.5-.3-5.138 1.238 1.275-5.05-.325-.525A13.263 13.263 0 012.663 16c0-7.35 5.987-13.338 13.337-13.338S29.338 8.65 29.338 16 23.35 29.338 16 29.338z"
              />
              <path
                d="M23.238 19.488c-.4-.2-2.363-1.163-2.738-1.3-.362-.138-.625-.2-.887.2-.263.4-1.013 1.3-1.238 1.563-.225.262-.45.3-.85.1-.4-.2-1.7-.625-3.238-2-.2-.175-3.488-3.025-3.863-3.413-.375-.387-.038-.6.175-.788.175-.175.4-.462.6-.688.188-.225.263-.375.4-.625.138-.25.075-.475-.025-.662-.1-.188-.888-2.138-1.213-2.925-.325-.775-.65-.675-.888-.688-.225-.012-.475-.012-.725-.012s-.675.1-1.038.475c-.362.375-1.387 1.35-1.387 3.3s1.425 3.838 1.625 4.1c.2.263 2.838 4.325 6.875 6.063.962.413 1.713.662 2.3.85.963.3 1.838.25 2.525.15.775-.112 2.363-.962 2.7-1.9.337-.937.337-1.738.237-1.9-.1-.163-.362-.263-.762-.463z"
              />
            </svg>
          </div>
        </div>
        {/* New Message Indicator Dot */}
        {/* <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div> */}
      </button>
    </div>
  );
};

export default WhatsAppFloat;