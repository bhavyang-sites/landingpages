import React from 'react';
import { FaShieldAlt, FaHandshake, FaChartLine, FaUserTie } from 'react-icons/fa';

const Stats = () => {
  const differences = [
    {
      icon: FaShieldAlt,
      title: "True Independence",
      desc: "I am not tied to any single company. I have unrestricted access to the entire Canadian market to find the best policy for you.",
      // Using an Unsplash image for a corporate/unrestricted feel
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: FaUserTie,
      title: "Transparent Communication",
      desc: "I provide honest, jargon-free explanations for every decision, ensuring you are empowered to make informed choices.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: FaHandshake,
      title: "Claims-First Support",
      desc: "My partnership with you goes beyond the application. I walk with you during your most difficult times to provide hands-on claims support.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: FaChartLine,
      title: "Long-Term Partnership",
      desc: "From your first home purchase to your eventual retirement, I am committed to building your wealth and security for the long term.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 bg-[#2D4B7A] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            The Difference You Can Expect
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            My commitment to your financial security is built on a foundation of trust, expertise, and personalized advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                // Added 'relative' and 'overflow-hidden' for the background image
                className="relative p-8 rounded-2xl border border-white/10 transition-all duration-300 overflow-hidden group"
              >
                {/* Background Image Layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-[#2D4B7A]/80"></div>

                {/* Content Layer */}
                <div className="relative z-10">
                  <div className="bg-[#28A78D] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;