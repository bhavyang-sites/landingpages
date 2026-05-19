import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 overflow-hidden transition-all duration-300 ${
      scrolled ? 'shadow-lg bg-white/95 backdrop-blur-md' : 'bg-white'
    }`}>
      
      {/* --- Responsive Bold Color Sections with Tilted Slices --- */}
      <div className="absolute inset-0 z-0 bg-[#28A78D]">
        
        {/* Pure White - Left Section */}
        {/* FIX: Increased mobile width to 70% so the slanted cut is pushed further to the right */}
        <div className="absolute top-0 left-0 w-[70%] md:w-[45%] lg:w-[40%] h-full bg-white z-10" style={{
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
        }}></div>
        
        {/* Navy Blue - Right Section */}
        {/* Adjusted mobile width to 15% to ensure the Teal middle section still shows */}
        <div className="absolute top-0 right-0 w-[15%] md:w-[40%] lg:w-[45%] h-full bg-[#2D4B7A] z-10" style={{
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </div>

      {/* Main Navbar Container */}
      <div className="relative z-20 flex items-center justify-between px-4 md:px-6 lg:px-12 w-full gap-4">
        
        {/* Logo Section */}
        {/* FIX: Reduced max-w to 55% on mobile. This mathematically guarantees the logo stops growing before it hits the slanted edge! */}
        <div className="flex items-center cursor-pointer h-16 md:h-20 lg:h-[88px] max-w-[55%] md:max-w-[35%] lg:max-w-[30%]" onClick={() => handleNavClick('home')}>
          <img 
            src={data.logoImage} 
            alt={data.logoName} 
            className="h-full w-auto object-contain object-left transition-transform duration-300 hover:scale-105" 
          />
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-2 text-white font-medium items-center justify-end w-full">
          {data.navItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => handleNavClick(item.id)}
                className="px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm lg:text-base drop-shadow-md hover:translate-y-[-2px]"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="ml-4">
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-white text-[#2D4B7A] px-6 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm lg:text-base whitespace-nowrap"
            >
              {data.ctaText}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-2xl text-white focus:outline-none p-2 drop-shadow-md hover:bg-white/20 rounded-lg transition-all z-20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-700 shadow-2xl relative z-20 animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col space-y-2 px-6 py-6 text-white font-medium">
            {data.navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left text-lg px-4 py-3 rounded-lg hover:bg-blue-600/20 transition-all duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-4 border-t border-slate-700">
              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-blue-500"
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