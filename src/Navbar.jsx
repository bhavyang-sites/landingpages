import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
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
      scrolled ? 'shadow-lg bg-[#2D4B7A]/95 backdrop-blur-md' : 'bg-[#2D4B7A]'
    }`}>
      
      {/* --- Gradient Background --- */}
      <div className="absolute inset-0 z-0 bg-[#2D4B7A] overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 left-[30%] w-[40%] h-[300%] bg-[#28A78D] blur-[60px] opacity-95 rounded-full"></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[35%] h-[300%] bg-[#6B7280] blur-[60px] opacity-90 rounded-full"></div>
        {/* Removed white fade to show transparent logo properly */}
      </div>

      {/* Main Navbar Container */}
      <div className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-3 w-full">
        
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer h-12 md:h-14 bg-white/10 px-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all" onClick={() => handleNavClick('home')}>
          <img 
            src={data.logoImage} 
            alt={data.logoName} 
            className="h-full w-auto object-contain transition-transform duration-300 hover:scale-110 drop-shadow-sm" 
          />
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-2 text-white font-medium items-center">
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
              className="bg-white text-[#2D4B7A] px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm lg:text-base"
            >
              {data.ctaText}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-2xl text-white focus:outline-none p-2 drop-shadow-md hover:bg-white/20 rounded-lg transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
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