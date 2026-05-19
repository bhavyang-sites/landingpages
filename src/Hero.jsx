import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = ({ data }) => {
  return (
    <section 
      id={data.id}
      className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-slate-900/80 to-slate-950/90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-white flex flex-col items-center">
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mb-8 rounded-full animate-pulse"></div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight max-w-3xl">
          <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
            {data.headline}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          {data.subheadline}
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group">
            {data.ctaText}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border-2 border-blue-300 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm">
            <FaPlay className="text-sm" />
            {data.secondaryCtaText}
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-blue-200 text-sm mb-4 uppercase tracking-widest font-semibold">Trusted by hundreds of families</p>
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-blue-200 text-sm">Families Served</p>
            </div>
            <div className="w-px h-8 bg-blue-600 hidden md:block"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-blue-200 text-sm">Years Experience</p>
            </div>
            <div className="w-px h-8 bg-blue-600 hidden md:block"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-blue-200 text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-blue-200 text-sm">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-blue-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;