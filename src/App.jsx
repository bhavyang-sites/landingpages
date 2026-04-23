import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Section from './Section';
import { templateData } from './data';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar data={templateData.header} />
      
      <main>
        <Hero data={templateData.hero} />
        
        {/* Dynamically render the rest of the sections */}
        {templateData.sections.map((section) => (
          <Section key={section.id} id={section.id} title={section.title}>
            <p>{section.content}</p>
            {/* You could also pass specific sub-components here based on the section type */}
          </Section>
        ))}
      </main>
    </div>
  );
};

export default App;