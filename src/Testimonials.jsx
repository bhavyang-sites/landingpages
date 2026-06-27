import React from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const Testimonials = ({ data }) => {
  // We define the 3 reviews here based on your Instagram content
  const actualReviews = [
    {
      name: 'Visal Desai',
      role: 'QA Manager',
      content: "Outstanding service! From start to finish, Chirag was incredibly professional, smart, and knowledgeable about Super Visa Insurance. Every option was explained clearly, all my questions were answered patiently, and the entire process was smooth and stress-free. I felt confident knowing I was working with someone who truly understands insurance and genuinely cares about clients.",
    },
    {
      name: 'Maria Azusana',
      role: 'First-Time Home Buyer',
      content: "We have trusted Chirag for his financial advice and insurance guidance. He has been very helpful and knowledgeable in his expertise. He listened to our future goals and found the best policy for me and my family, including the kids. He answered every question we had and explained the whole scenario that fits our future needs.",
    },
    {
      name: 'Sukhmeen Kaur',
      role: 'Super Visa Client',
      content: "I never believe in buying insurance but first time in my life, I purchased visitor insurance for my parents. When they travel Canada, my mother had an emergency. Many thanks to Chirag and his team to support me from buying insurance to claim process. He guided me on how to file a claim. Claim approved within a week.",
    }
  ];

  return (
    <section id={data.id} className="py-24 bg-slate-50 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-[#28A78D]/10 text-[#28A78D] px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D4B7A] mb-6">{data.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{data.subtitle}</p>
        </div>
        
        {/* Grid: 3 Reviews + 1 Image Tile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Mapping the 3 Reviews */}
          {actualReviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-[#2D4B7A]/5 text-6xl">
                <FaQuoteRight />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={16} />
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-6 text-sm italic flex-grow">
                "{review.content}"
              </p>
              
              <div className="border-t border-slate-100 pt-6 mt-auto">
                <p className="font-bold text-[#2D4B7A]">{review.name}</p>
                <p className="text-[#28A78D] font-semibold text-sm">{review.role}</p>
              </div>
            </div>
          ))}

          {/* 4th Tile: The Image */}
          <div className="rounded-2xl overflow-hidden shadow-md h-full min-h-[300px] relative group">
            <img 
              src="/reviews-updated.jpg" 
              alt="Professional Partnership" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#2D4B7A]/40 flex items-center justify-center">
              <p className="text-white font-bold text-xl px-4 text-center">Your Trusted Partner</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;