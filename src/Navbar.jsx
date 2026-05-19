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
    <nav className="fixed top-0 w-full shadow-md z-50 overflow-hidden bg-[#2D4B7A]">
      
      {/* --- REFINED ZONED MESH GRADIENT --- */}
      <div className="absolute inset-0 z-0 bg-[#2D4B7A] overflow-hidden">
        
        {/* 1. Teal Wave (Pushed slightly right to meet the white fade) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[30%] w-[40%] h-[300%] bg-[#28A78D] blur-[60px] opacity-95 rounded-full"></div>
        
        {/* 2. Grey Wave (Middle-Right) */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[35%] h-[300%] bg-[#6B7280] blur-[60px] opacity-90 rounded-full"></div>
        
        {/* 3. SOLID WHITE FADE (Fix for the Logo Box) */}
        {/* Uses a linear gradient instead of a blur. It stays pure white for the first 60%, then fades perfectly into the Teal. */}
        <div className="absolute top-0 left-0 w-[50%] md:w-[40%] h-full bg-gradient-to-r from-white from-60% to-transparent z-10"></div>
      </div>
      {/* -------------------------------------------- */}

      {/* Main Navbar Container - REDUCED PADDING (py-2 instead of py-3) */}
      <div className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-2 w-full">
        
        {/* Logo Section - REDUCED HEIGHT (h-12 md:h-14 instead of h-16 md:h-20) */}
        <div className="flex items-center cursor-pointer h-12 md:h-14" onClick={() => handleScroll('home')}>
          <img 
            src={data.logoImage} 
            alt={data.logoName} 
            className="h-full w-auto object-contain transition-transform duration-300 drop-shadow-sm hover:scale-105" 
          />
        </div>
        
        {/* Desktop Navigation */}
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
              // Slightly reduced padding on the button to match the thinner navbar
              className="bg-white text-[#2D4B7A] px-5 py-2 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm lg:text-base group"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-700 shadow-xl relative z-20">
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