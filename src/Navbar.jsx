import React, { useState } from 'react';
// We import the standard hamburger and close icons
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ data }) => {
  // This state tracks whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Smoothly scroll to the section
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Automatically close the mobile menu after a link is clicked
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      {/* Main Navbar Container */}
      <div className="flex items-center justify-between px-6 md:px-8 py-4 max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="flex flex-col z-50">
          <span className="text-xl font-bold text-blue-800">{data.logoName}</span>
          <span className="text-xs md:text-sm text-gray-500">{data.logoSubtitle}</span>
        </div>
        
        {/* Desktop Navigation (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          {data.navItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => handleScroll(item.id)}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={() => handleScroll('contact')}
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 font-medium transition-colors shadow-sm hover:shadow-md"
            >
              {data.ctaText}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button (Visible ONLY on Mobile) */}
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
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors text-center shadow-md"
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