import React from 'react';

const Navbar = ({ data }) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Smoothly scroll to the section
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-8 py-4">
      <div className="flex flex-col">
        <span className="text-xl font-bold text-blue-800">{data.logoName}</span>
        <span className="text-sm text-gray-500">{data.logoSubtitle}</span>
      </div>
      
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
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
      </ul>

      <button 
        onClick={() => handleScroll('contact')}
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 font-medium"
      >
        {data.ctaText}
      </button>
    </nav>
  );
};

export default Navbar;