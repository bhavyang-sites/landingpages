import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Stats from './Stats';
import About from './About';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import { templateData } from './data';

const App = () => {
  return (
    <div className="font-sans antialiased text-slate-900 selection:bg-blue-200">
      <Navbar data={templateData.header} />
      
      <main>
        <Hero data={templateData.hero} />
        <Services data={templateData.services} />
        <Stats data={templateData.stats} />
        <About data={templateData.about} />
        <Testimonials data={templateData.testimonials} />
        <FAQ data={templateData.faq} />
        
        {/* Enhanced Contact Footer */}
        <section id="contact" className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-24 px-6 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Secure Your Financial Future?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book your free consultation today and discover how we can help you achieve your financial goals.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 transform">
                Book Free Consultation
              </button>
              <button className="border-2 border-blue-300 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">Chirag Patel</h3>
                <p className="text-sm">Certified Financial Planner | Wealth Management Expert</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#services" className="hover:text-white transition-colors">FHSA Planning</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">RRSP Strategies</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Insurance Planning</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="hover:text-white transition-colors">About Chirag</a></li>
                  <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li>📧 connect@insurewithchirag.com</li>
                  <li>📱 (647) 821-1177</li>
                  <li>📍 Brampton, Canada</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-sm">
              <p>&copy; 2024 Chirag Patel Financial Planning. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;