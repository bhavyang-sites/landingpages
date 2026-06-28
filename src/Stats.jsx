import React from 'react';
import { FaShieldAlt, FaHandshake, FaChartLine, FaUserTie } from 'react-icons/fa';

const Stats = () => {
  const differences = [
    {
      icon: FaShieldAlt,
      title: "True Independence",
      desc: "I am not tied to any single company. I have unrestricted access to the entire Canadian market to find the best policy for you."
    },
    {
      icon: FaUserTie,
      title: "Transparent Communication",
      desc: "I provide honest, jargon-free explanations for every decision, ensuring you are empowered to make informed choices."
    },
    {
      icon: FaHandshake,
      title: "Claims-First Support",
      desc: "My partnership with you goes beyond the application. I walk with you during your most difficult times to provide hands-on claims support."
    },
    {
      icon: FaChartLine,
      title: "Long-Term Partnership",
      desc: "From your first home purchase to your eventual retirement, I am committed to building your wealth and security for the long term."
    }
  ];

  return (
    <section className="py-20 bg-[#2D4B7A]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            The Difference You Can Expect
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            My commitment to your financial security is built on a foundation of trust, expertise, and personalized advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                // Removed bg-white/opacity and images. Used a solid clean white background
                // and a subtle border for a crisp, professional, high-trust look.
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-[#28A78D] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#2D4B7A] mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;