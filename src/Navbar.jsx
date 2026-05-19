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
        {/* SHRUNK SLIGHTLY: Reduced lg width to 30% so "Home" is fully in the Teal area */}
        <div className="absolute top-0 left-0 w-[70%] md:w-[40%] lg:w-[30%] h-full bg-white z-10" style={{
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
        }}></div>
        
        {/* Navy Blue - Right Section */}
        {/* PUSHED RIGHT: Reduced lg width from 56% to 46% to give Teal more room for the "About" link */}
        <div className="absolute top-0 right-0 w-[15%] md:w-[45%] lg:w-[46%] h-full bg-[#2D4B7A] z-10" style={{
          clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </div>

      {/* Main Navbar Container */}
      <div className="relative z-20 flex items-center justify-between px-4 md:px-6 lg:px-8 w-full gap-4">
        
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer h-16 md:h-20 lg:h-[88px] max-w-[55%] md:max-w-[35%] lg:max-w-[25%]" onClick={() => handleNavClick('home')}>
          <img 
            src={data.logoImage} 
            alt={data.logoName} 
            className="h-full w-auto object-contain object-left transition-transform duration-300 hover:scale-105" 
          />
        </div>
        
        {/* Desktop Navigation & Contact Bar */}
        {/* Changed to justify-between to naturally spread the links left and the contacts right */}
        <div className="hidden lg:flex items-center justify-between w-full pl-2 xl:pl-6">
          
          {/* Main Links - Shifted Left */}
          <ul className="flex space-x-1 xl:space-x-3 text-white font-medium items-center">
            {data.navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleNavClick(item.id)}
                  className="px-2 xl:px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm xl:text-base drop-shadow-md hover:translate-y-[-2px]"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="ml-2 xl:ml-4">
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-white text-[#2D4B7A] px-5 xl:px-6 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm xl:text-base whitespace-nowrap"
              >
                {data.ctaText}
              </button>
            </li>
          </ul>

          {/* Contact & Social Section */}
          <div className="flex items-center space-x-3 xl:space-x-4 pl-4 text-white ml-auto">
            
            {/* Highlighted Teal Phone Box */}
            <a href="tel:+11234567890" className="flex items-center bg-[#28A78D] hover:bg-[#218c75] px-4 py-2 rounded-lg transition-all shadow-md group border border-[#218c75]">
              <FaPhoneAlt className="text-sm xl:text-base mr-2 group-hover:scale-110 transition-transform"/>
              <span className="text-sm xl:text-base font-bold tracking-wide whitespace-nowrap">(123) 456-7890</span>
            </a>

            {/* Brand Colored Social Icons */}
            <div className="flex items-center space-x-2 xl:space-x-3">
              {/* Official Instagram Gradient */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white hover:scale-110 transition-all shadow-md">
                <FaInstagram className="text-xl"/>
              </a>
              {/* Official WhatsApp Green */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#25D366] text-white hover:scale-110 transition-all shadow-md">
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
          
          {/* Mobile Contact & Socials */}
          <div className="flex flex-col items-center justify-center space-y-5 pb-8 pt-2">
            <a href="tel:+11234567890" className="flex items-center bg-[#28A78D] px-6 py-3 rounded-lg text-white font-bold text-lg shadow-md">
              <FaPhoneAlt className="mr-3" /> (123) 456-7890
            </a>
            <div className="flex space-x-6">
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-md">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#25D366] text-white shadow-md">
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;