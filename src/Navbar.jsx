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
    <nav className="fixed top-0 w-full shadow-md z-50 overflow-hidden bg-slate-900">
      
      {/* --- FIXED ZONED MESH GRADIENT --- */}
      {/* We changed the base from White to Dark Navy. 
        This prevents the colors from washing out and ensures high contrast for the text. 
      */}
      <div className="absolute inset-0 z-0 bg-[#2D4B7A] overflow-hidden">
        
        {/* 1. White Wave (Far Left for the Logo Area) */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-[45%] h-[300%] bg-white blur-[50px] opacity-100 rounded-full"></div>
        
        {/* 2. Teal Wave (Middle-Left for Home & Services) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[25%] w-[35%] h-[300%] bg-[#28A78D] blur-[60px] opacity-95 rounded-full"></div>
        
        {/* 3. Grey Wave (Middle-Right for About & Contact) */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[15%] w-[35%] h-[300%] bg-[#6B7280] blur-[60px] opacity-90 rounded-full"></div>
        
        {/* The Navy Blue wave is naturally created by the base background showing through on the right! */}
      </div>
      {/* -------------------------------------------- */}

      <div className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-3 w-full">
        
        {/* Logo Section - FIXED SIZING */}
        {/* Removed the 'scale' classes. Uses strict heights and object-contain to prevent overflow. */}
        <div className="flex items-center cursor-pointer h-16 md:h-20 py-2" onClick={() => handleScroll('home')}>
          <img 
            src={data.logoImage} 
            alt={data.logoName} 
            className="h-full w-auto object-contain transition-transform duration-300 drop-shadow-sm hover:scale-105" 
          />
        </div>
        
        {/* Desktop Navigation */}
        {/* Added drop-shadow-md to the text to ensure it is readable over any color wave */}
        <ul className="hidden md:flex space-x-8 text-white font-medium items-center">
          {data.navItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => handleScroll(item.id)}
                className="px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm lg:text-base drop-shadow-md"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={() => handleScroll('contact')}
              className="bg-white text-[#2D4B7A] px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm lg:text-base group"
            >
              {data.ctaText}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-2xl text-white focus:outline-none p-2 drop-shadow-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
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