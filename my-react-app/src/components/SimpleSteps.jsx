import React from 'react';
import { 
  Search, CheckCircle, UserPlus, 
  Bell, CreditCard, Calendar 
} from 'lucide-react'; 
// 👆 1. We brought back 'CheckCircle' into the import

const StepItem = ({ number, title, description, icon: Icon }) => (
  <div className="flex items-start gap-5 mb-8 last:mb-0">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-900 mb-1">
        {number}. {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const SimpleSteps = () => {
  const customerSteps = [
    { icon: Search, title: "Find a Worker", description: "Describe your needs and browse through available, qualified tradespeople in your area. Compare profiles, ratings and reviews." },
    { icon: Calendar, title: "Book & Track", description: "Choose the right worker fit for you and book instantly. Track your professional's arrival time in real time." },
    { icon: CheckCircle, title: "Job Done", description: "Once the job is complete, payment can be done by cash method. Leave a review to help our community grow." }
  ];

  const workerSteps = [
    { icon: UserPlus, title: "Create Your Profile", description: "Sign up and Build your profile. Showcase your skills, experience, and upload your qualifications to get verified." },
    { icon: Bell, title: "Get Job Alerts", description: "Receive notifications for job requests in your service area that match your skills. Accept the jobs that fit your schedule." },
    { icon: CreditCard, title: "Get Paid", description: "Complete the work and get paid quickly. Focus on your craft, we'll handle the admin." }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Simple Steps to Get Things Done</h2>
            
            {/* 👇 2. UPDATED: Using the SVG Component styled like your photo */}
            {/* fill-black makes the circle black. text-white makes the checkmark white. */}
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 fill-black text-white" />
            
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We connect you with qualified professionals in just a few easy steps. Whether you are booking a service or offering one, our process is straightforward and transparent.
          </p>
        </div>
        
        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* COLUMN 1: CUSTOMERS */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-blue-600 mb-6 pl-2">For Customers</h3>
            <div className="bg-white p-8 sm:p-10 rounded-2xl border-2 border-blue-500 shadow-lg flex-1">
              {customerSteps.map((step, idx) => (
                <StepItem key={idx} number={idx + 1} {...step} />
              ))}
            </div>
          </div>

          {/* COLUMN 2: WORKERS */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-blue-600 mb-6 pl-2">For Workers</h3>
            <div className="bg-white p-8 sm:p-10 rounded-2xl border-2 border-blue-500 shadow-lg flex-1">
              {workerSteps.map((step, idx) => (
                <StepItem key={idx} number={idx + 1} {...step} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;