// src/pages/Home.tsx
import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import {
  HeroSection,
  FeaturesSection,
  TrustSection,
  DashboardSection,
} from '../components/sections';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-red-50 dark:from-gray-900 dark:via-blue-950 dark:to-red-950 transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TrustSection />
        <DashboardSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;