import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = ({ data }) => {
  return (
    <section id={data.id} className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">CLIENT REVIEWS</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">{data.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{data.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 transform group relative"
              >
                {/* Quote icon in corner */}
                <div className="absolute top-6 right-6 text-blue-100 text-3xl opacity-60">
                  <Icon />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-6 text-sm">
                  "{item.content}"
                </p>
                
                <div className="border-t border-slate-200 pt-6">
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-blue-600 font-semibold text-sm">{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
