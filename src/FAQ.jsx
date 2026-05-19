import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id={data.id} className="py-24 bg-gradient-to-b from-slate-50 to-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">{data.title}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{data.subtitle}</p>
        </div>
        
        <div className="space-y-4">
          {data.items.map((item, index) => (
            <div 
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-200 transition-colors group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-slate-900 text-left group-hover:text-blue-600 transition-colors">
                  {item.question}
                </h3>
                <div className={`flex-shrink-0 ml-4 text-blue-600 transition-transform duration-500 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}>
                  <FaChevronDown size={20} />
                </div>
              </button>
              
              {/* Answer content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 py-6 bg-gradient-to-b from-blue-50 to-white border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Still have questions?</h3>
          <p className="text-slate-600 mb-6">Get in touch with us for personalized guidance</p>
          <button className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 transform">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
