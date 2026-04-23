import React from 'react';

const About = ({ data }) => {
  return (
    <section id={data.id} className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 translate-x-4 translate-y-4 rounded-2xl"></div>
            <img 
              src={data.image} 
              alt={data.title}
              className="relative rounded-2xl shadow-lg w-full h-[500px] object-cover z-10"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{data.title}</h2>
          <div className="w-16 h-1 bg-blue-600 mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {data.content}
          </p>
          <div className="flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" 
              alt="Avatar" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-slate-900">Chirag Patel</p>
              <p className="text-sm text-slate-500">Certified Financial Planner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;