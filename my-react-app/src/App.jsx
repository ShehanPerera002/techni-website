import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SimpleSteps from './components/SimpleSteps';
import GrowBusiness from './components/GrowBusiness';
import WorkerCategories from './components/WorkerCategories';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="how-it-works">
          <SimpleSteps />
        </section>

        <section id="services">
          <WorkerCategories />
        </section>

        <section id="for-professionals">
          <GrowBusiness />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}