import React, { useState } from 'react';
import { 
  FaPiggyBank, 
  FaGraduationCap, 
  FaHome, 
  FaPlaneArrival, 
  FaHeartbeat, 
  FaTimes 
} from 'react-icons/fa';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Service Data Array - Ordered exactly as requested
  const services = [
    {
      id: 'rrsp-tfsa',
      icon: <FaPiggyBank className="text-4xl text-[#28A78D]" />,
      title: 'RRSP & TFSA Investments',
      shortDesc: 'Optimize your wealth and plan for retirement with tax-advantaged savings accounts.',
      modalTitle: 'The Right Plan for Tax-Advantaged Savings',
      modalContent: (
        <div className="space-y-4 text-slate-600">
          <p>Whether you are saving for retirement, a large purchase, or building a safety net, the Canadian Government provides two powerful tools:</p>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#2D4B7A]">
            <h4 className="font-bold text-[#2D4B7A] text-lg">Registered Retirement Savings Plan (RRSP)</h4>
            <p className="mt-2 text-sm">Contributions are tax-deductible, reducing your current taxable income. Your investments grow tax-free until withdrawal during retirement.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#28A78D]">
            <h4 className="font-bold text-[#28A78D] text-lg">Tax-Free Savings Account (TFSA)</h4>
            <p className="mt-2 text-sm">Contributions are made with after-tax dollars, but your investments grow completely tax-free, and you can withdraw funds at any time without penalty or tax.</p>
          </div>
          <p className="font-medium text-sm pt-2">We help you find the perfect balance between both accounts to maximize your growth and minimize your tax burden.</p>
        </div>
      )
    },
    {
      id: 'resp',
      icon: <FaGraduationCap className="text-4xl text-[#2D4B7A]" />,
      title: 'Kids Education & Future (RESP)',
      shortDesc: 'Secure your child\'s higher education against all financial odds with government grants.',
      modalTitle: 'Registered Education Savings Plan (RESP)',
      modalContent: (
        <div className="space-y-4 text-slate-600">
          <p>An RESP is an investment plan supported by the Government of Canada to help parents sponsor their child's post-secondary education without relying on high-interest student loans.</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Canada Education Savings Grant (CESG):</strong> The government matches 20% of your annual contributions, offering up to <span className="font-bold text-[#28A78D]">$7,200</span> in free grant money per child.</li>
            <li><strong>Canada Learning Bond (CLB):</strong> Additional grants up to <span className="font-bold text-[#28A78D]">$2,000</span> available for eligible families.</li>
            <li><strong>Tax-Advantaged Growth:</strong> Investment income accumulates tax-free until withdrawn by the student, who usually pays little to no tax on it.</li>
          </ul>
          <p className="font-medium text-sm pt-2">Funds can be used for tuition, lodging, supplies, and transportation for both full-time and part-time degrees.</p>
        </div>
      )
    },
    {
      id: 'fhsa',
      icon: <FaHome className="text-4xl text-[#28A78D]" />,
      title: 'First Home Savings Account (FHSA)',
      shortDesc: 'Accelerate your path to homeownership with tax-free savings and withdrawals.',
      modalTitle: 'First Home Savings Account (FHSA)',
      modalContent: (
        <div className="space-y-4 text-slate-600">
          <p>The FHSA is the ultimate financial tool designed specifically for prospective first-time home buyers in Canada. It combines the best features of both an RRSP and a TFSA.</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Tax-Deductible Contributions:</strong> Like an RRSP, the money you put into your FHSA reduces your taxable income for the year.</li>
            <li><strong>Tax-Free Withdrawals:</strong> Like a TFSA, when you withdraw the funds to purchase a qualifying first home, you pay absolutely no tax on the capital or the growth.</li>
            <li><strong>Contribution Limits:</strong> You can contribute up to <span className="font-bold text-[#2D4B7A]">$8,000 annually</span>, up to a lifetime maximum of <span className="font-bold text-[#2D4B7A]">$40,000</span>.</li>
          </ul>
          <p className="font-medium text-sm pt-2">Let us help you build an aggressive growth strategy within your FHSA so you can get the keys to your new home faster.</p>
        </div>
      )
    },
    {
      id: 'visitor-supervisa',
      icon: <FaPlaneArrival className="text-4xl text-[#2D4B7A]" />,
      title: 'Visitor & Supervisa Insurance',
      shortDesc: 'Comprehensive medical coverage for parents, grandparents, and international guests.',
      modalTitle: 'Visitor & Super Visa Insurance',
      modalContent: (
        <div className="space-y-4 text-slate-600">
          <p>Medical expenses at Canadian hospitals for non-residents are incredibly high. Protect your visiting family members with comprehensive emergency coverage.</p>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#28A78D]">
            <h4 className="font-bold text-[#28A78D] text-lg">Parents & Grandparents Super Visa</h4>
            <p className="mt-2 text-sm">Mandatory for the 10-year multi-visit visa. We provide policies that meet the strict government requirements: minimum $100,000 coverage, valid for 365 days, covering hospitalization and repatriation.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#2D4B7A]">
            <h4 className="font-bold text-[#2D4B7A] text-lg">Standard Visitor Insurance</h4>
            <p className="mt-2 text-sm">Ideal for tourists, international students, or foreign workers. Covers ambulance services, prescriptions, dental emergencies, and walk-in clinic visits.</p>
          </div>
          <p className="text-sm font-medium italic">Monthly payment plans are available, and partial refunds are possible if visitors return home early without making a claim.</p>
        </div>
      )
    },
    {
      id: 'life-critical',
      icon: <FaHeartbeat className="text-4xl text-[#28A78D]" />,
      title: 'Life & Critical Illness Insurance',
      shortDesc: 'Protect your family\'s financial stability against life\'s unforeseen health emergencies.',
      modalTitle: 'Life & Critical Illness Protection',
      modalContent: (
        <div className="space-y-4 text-slate-600">
          <p>Ensure your family is looked after, even when you can't be there, with comprehensive safety nets.</p>
          <div className="mb-4">
            <h4 className="font-bold text-[#2D4B7A] text-lg border-b pb-1 mb-2">Life Insurance</h4>
            <p className="text-sm mb-2">We offer specialized solutions tailored to your phase of life, including Term Life (affordable, specific duration), Permanent/Whole Life (lifelong with cash surrender values), and Simplified Issue (no medical exam required).</p>
          </div>
          <div>
            <h4 className="font-bold text-[#2D4B7A] text-lg border-b pb-1 mb-2">Critical Illness Insurance</h4>
            <p className="text-sm mb-2">Provides a tax-free, lump-sum payment if you are diagnosed with one of up to 25 covered conditions (like cancer, heart attack, or stroke). This living benefit replaces your income, pays debts, or covers alternate treatments while you focus on recovery.</p>
            <p className="text-sm font-medium text-[#28A78D]">Includes options for Return of Premium—if you stay healthy, you get your money back.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D4B7A] mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg text-slate-600">
            Click on any service below to learn how we can help secure your family's future, protect your assets, and grow your wealth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col items-start group"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Clickable Title */}
              <button 
                onClick={() => setSelectedService(service)}
                className="text-xl font-bold text-[#2D4B7A] mb-3 text-left hover:text-[#28A78D] transition-colors focus:outline-none"
              >
                {service.title}
              </button>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.shortDesc}
              </p>
              
              {/* Secondary Clickable trigger */}
              <button 
                onClick={() => setSelectedService(service)}
                className="text-[#28A78D] font-bold text-sm flex items-center group-hover:underline focus:outline-none mt-auto"
              >
                Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================= */}
      {/* MODAL / POPUP COMPONENT                   */}
      {/* ========================================= */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          ></div>
          
          {/* Modal Content Box */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-2xl font-extrabold text-[#2D4B7A]">
                {selectedService.modalTitle}
              </h3>
              <button 
                onClick={() => setSelectedService(null)}
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 md:p-8">
              {selectedService.modalContent}
            </div>
            
            {/* Footer / CTA */}
            <div className="bg-slate-50 px-6 py-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm font-medium text-slate-600">
                Ready to secure your future?
              </p>
              <button 
                onClick={() => {
                  setSelectedService(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-[#2D4B7A] hover:bg-[#1f3559] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Book a Free Consultation
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Services;