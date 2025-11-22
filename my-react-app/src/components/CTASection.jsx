import React from 'react';

const CTASection = () => (
  <section className="py-16 px-4">
    <div className="max-w-5xl mx-auto bg-blue-600 rounded-[2.5rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
      
      <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Get Started?</h2>
      <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed relative z-10">
        Whether you need a quick fix or planning a major project, TECHNI connects you with the right professionals. Sign up today and experience the easy way to manage your home services.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        <button className="bg-yellow-400 text-gray-900 font-bold px-8 py-3.5 rounded-lg hover:bg-yellow-300 transition-colors shadow-lg">
          Find a Worker
        </button>
        <button className="bg-blue-500/30 backdrop-blur-sm border border-blue-400 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-blue-500/50 transition-colors">
          Become a Worker
        </button>
      </div>
    </div>
  </section>
);

export default CTASection;