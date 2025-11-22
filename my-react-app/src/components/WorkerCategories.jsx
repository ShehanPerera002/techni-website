import React from 'react';

const WorkerCard = ({ image, title, description }) => (
  <div className="flex flex-col items-center text-center group cursor-pointer">
    <div className="relative w-48 h-48 mb-4 rounded-3xl overflow-hidden shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const WorkerCategories = () => {
  const categories = [
    { title: "Plumbers", desc: "Leaks, installations & more", img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=400&q=80" },
    { title: "Carpenters", desc: "Repair, furniture & more", img: "https://images.unsplash.com/photo-1622151834677-70f982c9adef?auto=format&fit=crop&w=400&q=80" },
    { title: "Gardeners", desc: "Maintenance, Landscaping", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80" },
    { title: "Painters", desc: "Interior & Exterior painting", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80" },
    { title: "Electricians", desc: "Wiring, repairs & more", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80" },
    { title: "AC Technicians", desc: "Servicing, Installation", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">A Worker For Every Project</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
          {categories.map((cat, idx) => (
            <WorkerCard key={idx} title={cat.title} description={cat.desc} image={cat.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkerCategories;