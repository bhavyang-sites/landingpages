import React from 'react';

const Hero = ({ data }) => {
  return (
    <section 
      id={data.id}
      className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Adds a premium parallax effect
      }}
    >
      {/* Modern gradient overlay instead of a flat color */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-slate-900/90"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-white flex flex-col items-center">
        <div className="w-20 h-1 bg-blue-500 mb-8 rounded-full"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          {data.headline}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          {data.subheadline}
        </p>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
          {data.ctaText}
        </button>
      </div>
    </section>
  );
};

export default Hero;