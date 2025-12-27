import React, { useState } from 'react';
import { FaArrowUp } from "react-icons/fa6";
import BlurText from "./BlurText"; // Ensure this import path matches your project structure

const Footer = () => {
  const [hover, setHover] = useState(false);

  const handleResetAndScrollTop = () => {
    // 1. Instant scroll to top
    window.scrollTo({ top: 0, behavior: 'auto' });

    // 2. OPTIONAL: Uncomment to force a page reload
    // window.location.reload(); 
  };

  return (
    <footer className="w-full bg-[#10100e] text-white py-16 relative flex flex-col items-center justify-center">
      
      {/* --- Main Content --- */}
      <div className="text-center space-y-4 mb-8 z-10 px-4">
        <p className="text-gray-400 text-sm sm:text-base font-light tracking-wide">
          Let's connect and build something amazing!
        </p>
        
        {/* Email Link */}
        <a 
          href="mailto:akshay.code.bhat@gmail.com"
          className="block text-2xl sm:text-4xl font-bold hover:text-gray-300 transition-colors duration-300"
        >
          akshay.code.bhat@gmail.com
        </a>
      </div>

      {/* --- Copyright (Bottom Center) --- */}
      <div className="mt-12 text-gray-500 text-xs sm:text-sm">
        © 2025 Akshay Bhat. All rights reserved.
      </div>

      {/* --- Back to Top Button (Bottom Right) --- */}
      <button
        onClick={handleResetAndScrollTop}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="cursor-pointer absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center bg-[#ffffe3] rounded-full hover:bg-[#e6e6cc] transition-all duration-300 group border border-transparent hover:border-gray-700 pb-1"
        title="Restart and Back to Top" // Native tooltip as backup
      >
        
        {/* The Arrow Icon */}
        <FaArrowUp className="text-[#10100e] text-lg mt-1" />

        {/* Hover Text Reveal */}
        {/* We use bottom-[120%] to push the text UPWARDS since we are at the footer */}
        <div className="absolute bottom-[120%] w-max pointer-events-none">
            <BlurText
                text="Back to Top"
                delay={100}
                trigger={hover}
                className="text-sm text-[#ffffe3] "
            />
        </div>

      </button>

    </footer>
  );
};

export default Footer;