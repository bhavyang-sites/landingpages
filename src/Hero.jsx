import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = ({ data }) => {
  return (
    // Pushes the Hero section down below the fixed Navigation Bar
    <section className="relative min-h-[calc(100vh-88px)] lg:min-h-[calc(100vh-144px)] mt-[88px] lg:mt-[144px] flex items-center justify-start py-12 overflow-hidden">
      
      {/* ========================================= */}
      {/* BACKGROUND IMAGE & OVERLAY                */}
      {/* ========================================= */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]">
        {/* Replace this URL with your new left-copy-space image! 
          I have set object-right so the image focuses on the right side on mobile screens.
        */}
        <img
          src="hero1.jpg"
          alt="Secure family home"
          className="w-full h-full object-cover object-right"
        />
        {/* Soft gradient overlay to ensure text is always readable */}
        <div className="absolute inset-0 bg-slate-900/40 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
      </div>

      {/* ========================================= */}
      {/* HERO CONTENT (LEFT-ALIGNED)               */}
      {/* ========================================= */}
      {/* max-w-[1400px] ensures it aligns perfectly with the Navigation bar above it */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 text-left text-white">
        
        {/* max-w-2xl traps the text strictly on the left half of the screen on desktop */}
        <div className="max-w-2xl">
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            Secure Your Family's Financial Future with <span className="text-[#28A78D]">Confidence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-100 mb-10 font-light leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            Smart investments and reliable insurance to help your family grow wealth and protect what matters most.
          </p>

          {/* Action Buttons - Changed justify-center to justify-start */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 mb-16">
            <button className="flex items-center justify-center w-full sm:w-auto bg-[#2D4B7A] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-[#1f3559] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#2D4B7A]">
              Start Your Free Consultation <FaArrowRight className="ml-3 text-sm" />
            </button>
            
            <button className="flex items-center justify-center w-full sm:w-auto bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm drop-shadow-md">
              <FaPlay className="mr-3 text-sm" /> Learn More
            </button>
          </div>

          {/* ========================================= */}
          {/* TRUST INDICATORS / STATS                  */}
          {/* ========================================= */}
          {/* Aligned left to match the rest of the layout */}
          <div className="pt-10 border-t border-white/30 inline-block w-full">
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-slate-200 uppercase mb-6 drop-shadow-md">
              Trusted by hundreds of families
            </p>
            
            <div className="flex flex-wrap items-center justify-start gap-8 md:gap-12">
              <div className="text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md">500+</h3>
                <p className="text-sm md:text-base text-slate-200 mt-1 font-medium drop-shadow-md">Families Served</p>
              </div>
              
              <div className="hidden md:block w-px h-10 bg-white/30"></div>
              
              <div className="text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md">15+</h3>
                <p className="text-sm md:text-base text-slate-200 mt-1 font-medium drop-shadow-md">Years Experience</p>
              </div>
              
              <div className="hidden md:block w-px h-10 bg-white/30"></div>
              
              <div className="text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md">98%</h3>
                <p className="text-sm md:text-base text-slate-200 mt-1 font-medium drop-shadow-md">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;