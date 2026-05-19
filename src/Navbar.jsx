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
      // Offset for the taller stacked header
      const headerOffset = 130; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'shadow-xl' : 'shadow-md'
    }`}>
      
      {/* ========================================= */}
      {/* TIER 1: TOP WHITE PANEL (Logo & Contacts) */}
      {/* ========================================= */}
      <div className="w-full bg-white transition-all duration-300">
        {/* max-w-[1400px] adds that nice even padding/spacing to the far left and right edges */}
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-12 py-3 lg:py-4">
          
          {/* Logo - Shifted right naturally by the container padding */}
          <div className="flex items-center cursor-pointer h-16 lg:h-20" onClick={() => handleNavClick('home')}>
            <img 
              src={data.logoImage} 
              alt={data.logoName} 
              className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105" 
            />
          </div>

          {/* Desktop Right Side (Phone, Socials, Button) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            
            {/* Phone Number */}
            <a href="tel:+11234567890" className="flex items-center text-[#2D4B7A] hover:text-[#28A78D] transition-colors group">
              <FaPhoneAlt className="text-lg mr-2 group-hover:scale-110 transition-transform"/>
              <span className="text-lg font-extrabold tracking-wide whitespace-nowrap">(123) 456-7890</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 border-l-2 border-slate-200 pl-6 xl:pl-8">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white hover:scale-110 transition-all shadow-md">
                <FaInstagram className="text-xl"/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#25D366] text-white hover:scale-110 transition-all shadow-md">
                <FaWhatsapp className="text-xl"/>
              </a>
            </div>

            {/* CTA Button */}
            <div className="pl-2">
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-[#2D4B7A] text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-[#1f3559] text-base whitespace-nowrap"
              >
                {data.ctaText}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-2xl text-[#2D4B7A] focus:outline-none p-2 rounded-lg transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* ========================================= */}
      {/* TIER 2: END-TO-END TEAL STRIP (Nav Links) */}
      {/* ========================================= */}
      <div className="hidden lg:block w-full bg-[#28A78D] shadow-inner">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-3 flex items-center space-x-8 xl:space-x-12">
          {data.navItems.map((item) => {
            // Automatically rename the label to "Contact Us" if it's the contact item
            const displayLabel = item.id === 'contact' || item.label.toLowerCase() === 'contact' 
              ? 'Contact Us' 
              : item.label;

            return (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                // Applied the exact #661414 color requested, with an extra bold font to help it stand out against the teal
                className="text-[#661414] font-extrabold text-base tracking-wide hover:text-white transition-colors duration-300 hover:translate-y-[-1px]"
              >
                {displayLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================= */}
      {/* MOBILE DROPDOWN MENU                      */}
      {/* ========================================= */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          
          <ul className="flex flex-col px-6 py-4">
            {data.navItems.map((item) => {
              const displayLabel = item.id === 'contact' || item.label.toLowerCase() === 'contact' 
                ? 'Contact Us' 
                : item.label;

              return (
                <li key={item.id} className="border-b border-slate-100 last:border-none">
                  <button 
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left text-lg py-4 font-bold text-[#2D4B7A] hover:text-[#28A78D] transition-colors"
                  >
                    {displayLabel}
                  </button>
                </li>
              );
            })}
          </ul>
          
          {/* Mobile Contact & Socials Panel */}
          <div className="bg-slate-50 px-6 py-8 flex flex-col items-center space-y-6">
            <a href="tel:+11234567890" className="flex items-center text-[#2D4B7A] font-extrabold text-xl">
              <FaPhoneAlt className="mr-3 text-[#28A78D]" /> (123) 456-7890
            </a>
            
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full bg-[#2D4B7A] text-white px-5 py-4 rounded-lg font-bold transition-all shadow-lg text-lg"
            >
              {data.ctaText}
            </button>

            <div className="flex space-x-6 pt-2">
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
    </header>
  );
};

export default Navbar;