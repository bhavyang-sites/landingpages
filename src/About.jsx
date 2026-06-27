import React from 'react';
import { FaCheckCircle, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* FIX 1: Changed 'items-center' to 'items-start' to align the image to the top of the text */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* ========================================= */}
          {/* LEFT SIDE: ADVISOR IMAGE                  */}
          {/* ========================================= */}
          {/* Added mt-2 so the image aligns perfectly with the visual baseline of the top text */}
          <div className="w-full lg:w-5/12 relative mt-2">
            {/* Teal decorative background square */}
            <div className="absolute top-4 -left-4 w-full h-full bg-[#28A78D] rounded-2xl transform -rotate-2 opacity-20 hidden md:block"></div>
            
            {/* Main Image */}
            {/* FIX 2: Replaced 'h-[500px] object-cover object-top' with 'h-auto' to prevent any cropping */}
            <img 
              src="/chirag-profile.jpg" 
              alt="Chirag Patel - Licensed Insurance Advisor" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
            />
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-4 rounded-xl shadow-xl z-20 border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-[#2D4B7A] p-3 rounded-full text-white">
                <FaShieldAlt className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Licensed In</p>
                <p className="text-[#2D4B7A] font-extrabold text-lg">Ontario, Canada</p>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT SIDE: PROFILE COPY                  */}
          {/* ========================================= */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#28A78D] uppercase mb-3">
              About Chirag Patel
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#2D4B7A] mb-8 leading-tight">
              Your Trusted Financial Partner in Ontario
            </h3>
            
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                I am a licensed insurance and investment advisor proudly serving our Ontario community with transparent, trustworthy financial guidance. From protecting your loved ones with Life and Disability Insurance, to welcoming family with Super Visa Insurance, to growing your wealth through RRSPs, TFSAs, and FHSAs—I am here to help you navigate your options with clarity.
              </p>
              <p>
                Because I work independently with all leading Canadian insurance and investment providers, I am never restricted to a single company's catalog. My focus is entirely on finding the perfect fit for your unique needs. Your family’s financial security deserves more than a one-size-fits-all solution.
              </p>
              <p>
                My commitment to you extends far beyond policy selection. I provide deep, hands-on support across your entire journey, from the initial application right through to <strong>claims support</strong>. Known for my reliability and genuine care, I take pride in being the advisor my community trusts for life's most important decisions—and the one they know they can count on when it matters most.
              </p>
            </div>

            {/* Value Proposition Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#28A78D] text-xl" />
                <span className="font-bold text-[#2D4B7A]">Independent Brokerage</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#28A78D] text-xl" />
                <span className="font-bold text-[#2D4B7A]">End-to-End Claims Support</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#28A78D] text-xl" />
                <span className="font-bold text-[#2D4B7A]">Custom Tailored Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#28A78D] text-xl" />
                <span className="font-bold text-[#2D4B7A]">Community Trusted</span>
              </div>
            </div>

            {/* Signature / CTA Area */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#2D4B7A] hover:bg-[#1f3559] text-white px-8 py-3.5 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Schedule a Conversation
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;