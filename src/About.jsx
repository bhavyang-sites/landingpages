import React from 'react';
import { FaCheck } from 'react-icons/fa';

const About = ({ data }) => {
  return (
    <section id={data.id} className="py-24 bg-gradient-to-b from-white to-slate-50 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="relative group">
            {/* Animated background blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Shadow effect */}
            <div className="absolute inset-0 bg-blue-600 translate-x-6 translate-y-6 rounded-3xl opacity-20"></div>
            
            {/* Main image */}
            <img 
              src={data.image} 
              alt={data.title}
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover z-10 border-4 border-white"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">ABOUT US</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-2">{data.title}</h2>
          <p className="text-blue-600 font-semibold text-lg mb-6">{data.subtitle}</p>
          
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-8 rounded-full"></div>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-8 whitespace-pre-line">
            {data.content}
          </p>
          
          {/* Credentials */}
          {data.credentials && (
            <div className="mb-10 space-y-3">
              {data.credentials.map((credential, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <FaCheck className="text-sm" />
                  </div>
                  <span className="text-slate-700 font-medium">{credential}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* CTA */}
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 transform">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;