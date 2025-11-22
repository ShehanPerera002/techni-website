import React from 'react';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-300 via-white to-white pt-16 pb-24 md:pt-28 md:pb-40 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-white -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 md:pr-12 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6">
            Your Local Trade <br className="hidden lg:block" />
            Experts, On-Demand
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            Instantly connect with skilled and verified plumbers, electricians, and more. Track them in real time to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-blue-200 shadow-lg hover:bg-blue-700 hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-1">
              Join Us Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10" />
          <img 
            src={heroImage}
            alt="Techni App Interface on Devices" 
            className="relative z-10 w-full h-auto rounded-2xl  "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

