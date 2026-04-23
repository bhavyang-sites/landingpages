import React from 'react';

const Hero = ({ data }) => {
  return (
    <section 
      id={data.id}
      className="relative h-screen flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-white mt-16">
        <h1 className="text-5xl font-serif font-bold mb-6 leading-tight">
          {data.headline}
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {data.subheadline}
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700 transition-colors">
          {data.ctaText}
        </button>
      </div>
    </section>
  );
};

export default Hero;