import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import BonusSection from './components/BonusSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <HowItWorks />
        <BonusSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
