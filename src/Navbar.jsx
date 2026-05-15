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
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      {/* Notice the wrapper below: We removed the max-width constraints. 
        Now it spans 'w-full' and uses generous padding (lg:px-16) to hug the screen edges.
      */}
      <div className="flex items-center justify-between px-6 lg:px-16 py-3 w-full">
        
        {/* Logo Section - Now using the SVG */}
        <div className="flex items-center z-50 cursor-pointer" onClick={() => handleScroll('home')}>
          <img 
            src={data.logoImage} 
            alt={data.logoName} 
            className="h-16 md:h-20 lg:h-28 w-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-slate-700 font-medium items-center">
          {data.navItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => handleScroll(item.id)}
                className="hover:text-blue-600 transition-colors text-sm lg:text-base"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={() => handleScroll('contact')}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-500 font-semibold transition-all shadow-sm hover:shadow-md text-sm lg:text-base"
            >
              {data.ctaText}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-2xl text-slate-700 focus:outline-none z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl">
          <ul className="flex flex-col space-y-4 px-6 py-8 text-slate-700 font-medium">
            {data.navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleScroll(item.id)}
                  className="w-full text-left text-lg hover:text-blue-600 transition-colors py-2"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-4 border-t border-slate-100">
              <button 
                onClick={() => handleScroll('contact')}
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-500 font-semibold transition-colors text-center shadow-md"
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