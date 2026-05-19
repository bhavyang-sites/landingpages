import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Services = ({ data }) => {
  return (
    <section id={data.id} className="py-24 bg-gradient-to-b from-slate-50 to-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">OUR SERVICES</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">{data.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{data.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-200 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 transform">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{item.description}</p>
                  
                  {/* Benefits list */}
                  {item.benefits && (
                    <ul className="space-y-2">
                      {item.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                          <FaArrowRight className="text-blue-500 mr-2 text-xs" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;