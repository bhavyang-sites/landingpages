import React from 'react';

const Stats = ({ data }) => {
  return (
    <section id={data.id} className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">{data.title}</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{data.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 transform group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                  <Icon />
                </div>
                <p className="text-5xl font-bold text-white mb-3">{item.number}</p>
                <p className="text-blue-100 text-lg font-semibold">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
