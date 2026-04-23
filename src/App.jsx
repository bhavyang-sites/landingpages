import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import { templateData } from './data';

const App = () => {
  return (
    <div className="font-sans antialiased text-slate-900 selection:bg-blue-200">
      <Navbar data={templateData.header} />
      
      <main>
        <Hero data={templateData.hero} />
        <Services data={templateData.services} />
        <About data={templateData.about} />
        
        {/* Simple Contact Footer Placeholder */}
        <section id="contact" className="bg-slate-900 text-white py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start planning?</h2>
          <button className="bg-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors">
            Contact Me Today
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;