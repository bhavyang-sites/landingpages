import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    // Replaced bg-white with a dark base and overflow-hidden to contain the waves
    <nav className="fixed top-0 w-full shadow-md z-50 overflow-hidden bg-slate-900">
      
    {/* --- ZONED MESH GRADIENT WAVE EFFECT --- */}
      {/* We set the base background to white for the logo area */}
      <div className="absolute inset-0 z-0 bg-white overflow-hidden">
        
        {/* 1. Teal Wave (Sitting behind Home & Services) */}
        <div className="absolute -bottom-16 left-[25%] w-[30%] h-64 rounded-full bg-[#28A78D] blur-[70px] opacity-70"></div>
        
        {/* 2. Grey Wave (Sitting behind About & Contact - using the logo's slate grey) */}
        <div className="absolute -top-16 right-[25%] w-[30%] h-64 rounded-full bg-[#6B7280] blur-[70px] opacity-50"></div>
        
        {/* 3. Navy Blue Wave (Sitting behind the CTA Button) */}
        <div className="absolute -bottom-10 -right-10 w-[35%] h-64 rounded-full bg-[#2D4B7A] blur-[70px] opacity-90"></div>
      </div>
      {/* -------------------------------------------- */}

      {/* Main Navbar Container (Added relative z-10 to sit above the waves) */}
      <div className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-3 w-full">
        
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer h-12 md:h-16" onClick={() => handleScroll('home')}>
          {/* NOTE: You will need a white version of the logo for this to be visible! */}
          <img 
            src={data.logoImage} 
            alt={data.logoName} 
            className="h-full w-auto transform scale-[2.5] lg:scale-[3] origin-left transition-transform duration-300 drop-shadow-md" 
          />
        </div>
        
        {/* Desktop Navigation (Updated text to white/gray-100 for contrast) */}
        <ul className="hidden md:flex space-x-8 text-white font-medium items-center">
          {data.navItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => handleScroll(item.id)}
                // Changed hover effects to use a white transparent background
                className="px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm lg:text-base drop-shadow-sm"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={() => handleScroll('contact')}
              // Changed the button to white with teal text so it pops against the dark waves
              className="bg-white text-[#28A78D] px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm lg:text-base group"
            >
              {data.ctaText}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button (Updated to white) */}
        <button 
          className="md:hidden text-2xl text-white focus:outline-none p-2 drop-shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu (Kept dark to match the header) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-700 shadow-xl relative z-10">
          <ul className="flex flex-col space-y-4 px-6 py-8 text-white font-medium">
            {data.navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleScroll(item.id)}
                  className="w-full text-left text-lg px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-4 border-t border-slate-700">
              <button 
                onClick={() => handleScroll('contact')}
                className="w-full bg-[#28A78D] text-white px-5 py-3 rounded-lg font-bold transition-all duration-300 text-center shadow-lg"
              >
                {data.ctaText}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;