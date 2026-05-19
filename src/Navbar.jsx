import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhoneAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
        {/* SHIFTED LEFT: Reduced lg width from 40% to 33% to eat the blank space */}
        <div className="absolute top-0 left-0 w-[70%] md:w-[40%] lg:w-[33%] h-full bg-white z-10" style={{
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
        }}></div>
        
        {/* Navy Blue - Right Section */}
        {/* SHIFTED LEFT: Increased lg width from 45% to 56% to cover the new contact icons */}
        <div className="absolute top-0 right-0 w-[15%] md:w-[45%] lg:w-[56%] h-full bg-[#2D4B7A] z-10" style={{
          clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </div>

      {/* Main Navbar Container */}
      <div className="relative z-20 flex items-center justify-between px-4 md:px-6 lg:px-8 w-full gap-4">
        
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer h-16 md:h-20 lg:h-[88px] max-w-[55%] md:max-w-[35%] lg:max-w-[28%]" onClick={() => handleNavClick('home')}>
          <img 
            src={data.logoImage} 
            alt={data.logoName} 
            className="h-full w-auto object-contain object-left transition-transform duration-300 hover:scale-105" 
          />
        </div>
        
        {/* Desktop Navigation & Contact Bar */}
        {/* Upgraded from md:flex to lg:flex to protect the layout on tablets */}
        <div className="hidden lg:flex items-center justify-end w-full">
          
          {/* Main Links */}
          <ul className="flex space-x-1 xl:space-x-2 text-white font-medium items-center">
            {data.navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleNavClick(item.id)}
                  className="px-3 xl:px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm xl:text-base drop-shadow-md hover:translate-y-[-2px]"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="ml-2 xl:ml-4 mr-4 xl:mr-6">
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-white text-[#2D4B7A] px-5 xl:px-6 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm xl:text-base whitespace-nowrap"
              >
                {data.ctaText}
              </button>
            </li>
          </ul>

          {/* New Contact & Social Section */}
          <div className="flex items-center space-x-4 border-l border-white/30 pl-4 xl:pl-6 text-white">
            <a href="tel:+11234567890" className="flex items-center hover:text-[#28A78D] transition-colors group">
              <FaPhoneAlt className="text-sm xl:text-base mr-2 group-hover:scale-110 transition-transform"/>
              <span className="text-sm xl:text-base font-semibold tracking-wide whitespace-nowrap">(123) 456-7890</span>
            </a>
            <div className="flex items-center space-x-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 hover:scale-110 transition-all">
                <FaInstagram className="text-xl"/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 hover:scale-110 transition-all">
                <FaWhatsapp className="text-xl"/>
              </a>
            </div>
          </div>

        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-2xl text-white focus:outline-none p-2 drop-shadow-md hover:bg-white/20 rounded-lg transition-all z-20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-700 shadow-2xl relative z-20 animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col space-y-2 px-6 py-6 text-white font-medium">
            {data.navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left text-lg px-4 py-3 rounded-lg hover:bg-[#28A78D]/30 transition-all duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-4 border-t border-slate-700">
              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full bg-[#28A78D] text-white px-5 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#218c75]"
              >
                {data.ctaText}
              </button>
            </li>
          </ul>
          
          {/* Mobile Contact & Socials at bottom of menu */}
          <div className="flex flex-col items-center justify-center space-y-4 pb-8 pt-2">
            <a href="tel:+11234567890" className="flex items-center text-white hover:text-[#28A78D] font-semibold text-lg">
              <FaPhoneAlt className="mr-3" /> (123) 456-7890
            </a>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-pink-400"><FaInstagram className="text-2xl" /></a>
              <a href="#" className="text-white hover:text-green-400"><FaWhatsapp className="text-2xl" /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;