import React from 'react';
import { Users, Route, Clock } from 'lucide-react';
import workers from '../assets/workers.jpg';

const BusinessFeature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-start">
    <div className="bg-blue-600 p-2 rounded-lg mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const GrowBusiness = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Grow Your Business with <span className="text-blue-600">TECHNI</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Join our network of skilled professionals and connect with new clients in your area. We provide the tools you need to succeed, so you can focus on what you do best.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              <BusinessFeature icon={Users} title="More Clients, More Jobs" description="Get access to a steady stream of job requests from homeowners and businesses actively seeking your skills." />
              <BusinessFeature icon={Clock} title="Flexible Scheduling" description="Manage your availability, accept jobs that fit your schedule and take control of your work life balance." />
              <BusinessFeature icon={Route} title="Smart Job Tracking" description="Our real time tracking and job management tools help you stay organized, from initial booking to final payment." />
              <div className="flex items-end">
                <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-colors">Sign Up as a Worker</button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-blue-50 rounded-3xl -z-10"></div>
              <img src={workers} alt="Techni professionals" className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/3]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;