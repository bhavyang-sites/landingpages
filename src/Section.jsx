import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="min-h-screen py-20 px-8 bg-gray-50 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-600 pb-2 inline-block">
          {title}
        </h2>
        <div className="text-gray-600 text-lg">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;