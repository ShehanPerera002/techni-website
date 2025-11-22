import React from 'react';
import { 
  MapPin, Calendar, Bot, LifeBuoy, 
  Lock, Wallet, ShieldCheck, Mic 
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group bg-white p-8 rounded-xl border-2 border-blue-500 hover:border-blue-600 shadow-[0_4px_20px_rgba(59,130,246,0.1)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] transition-all duration-300 flex flex-col items-center text-center h-full">
    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  const featuresData = [
    {
      icon: MapPin,
      title: "Real time Tracking",
      description: "Know exactly when your professional will arrive with our live map tracking feature."
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Schedule, and manage services in one place, with a just few clicks."
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "Get instant help with job descriptions, quotes, and scheduling with our smart AI assistant."
    },
    {
      icon: LifeBuoy,
      title: "Emergency Button",
      description: "Immediate access to emergency platforms and contacts when you need them most."
    },
    {
      icon: Lock,
      title: "Encrypted Calls",
      description: "Communicate securely with end-to-end encrypted in-app calls to protect your privacy."
    },
    {
      icon: Wallet,
      title: "Transparent Pricing",
      description: "See clear, upfront costs before you book. No hidden fees, no surprises."
    },
    {
      icon: ShieldCheck,
      title: "Verified Professionals",
      description: "Rest easy knowing every tradesperson on our platform is vetted, reviewed and reliable."
    },
    {
      icon: Mic,
      title: "Sinhala Voice Integration",
      description: "Use Sinhala voice commands to get help to book services and interact with the app effortlessly."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Everything you need, right at your fingertips
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our platform is designed to make finding and booking trade services simple, transparent, and efficient.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;