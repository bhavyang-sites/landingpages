import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = ({ data }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      
      {/* ========================================= */}
      {/* BACKGROUND IMAGE & OVERLAY                */}
      {/* ========================================= */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]">
        {/* Replace this src with your actual desired image URL or imported asset */}
        <img
          src="/hero.jpg"
          alt="Secure family home"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft gradient overlay: Clear at the top, darker at the bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20"></div>
      </div>

      {/* ========================================= */}
      {/* HERO CONTENT                              */}
      {/* ========================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-8">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
          Secure Your Family's Financial Future with Confidence
        </h1>

        {/* Subheadline (Location Removed) */}
        <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
          Expert wealth management, tailored insurance, and strategic planning for families navigating today's dynamic financial landscape.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="flex items-center justify-center w-full sm:w-auto bg-[#2D4B7A] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-[#1f3559] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Start Your Free Consultation <FaArrowRight className="ml-3 text-sm" />
          </button>
          
          <button className="flex items-center justify-center w-full sm:w-auto bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
            <FaPlay className="mr-3 text-sm" /> Learn More
          </button>
        </div>

        {/* ========================================= */}
        {/* TRUST INDICATORS / STATS                  */}
        {/* ========================================= */}
        <div className="pt-10 border-t border-white/20">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-slate-300 uppercase mb-8">
            Trusted by hundreds of families
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">500+</h3>
              <p className="text-sm md:text-base text-slate-300 mt-1 font-medium">Families Served</p>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">15+</h3>
              <p className="text-sm md:text-base text-slate-300 mt-1 font-medium">Years Experience</p>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">98%</h3>
              <p className="text-sm md:text-base text-slate-300 mt-1 font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;