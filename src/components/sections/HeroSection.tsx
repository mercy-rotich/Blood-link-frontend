// src/components/sections/HeroSection.tsx
import React from 'react';
import { Button } from '../common/Button';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '50K+', label: 'Verified Donors' },
  { value: '2,847', label: 'Lives Saved' },
  { value: '500+', label: 'Partner Hospitals' },
  { value: '98.7%', label: 'Success Rate' },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-rose-500 to-pink-400 text-white py-20 lg:py-32 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-white rounded-full top-1/2 -right-32 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-80 h-80 bg-white rounded-full -bottom-40 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/30 animate-fade-in">
          <span className="text-2xl">🏥</span>
          <span className="font-semibold text-sm sm:text-base">
            Trusted by 500+ Healthcare Facilities
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up">
          Connecting Lives Through
          <br />
          <span className="bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
            Safe Blood Donation
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Join our secure, HIPAA-compliant platform that connects verified donors with healthcare facilities in real-time. Every donation is tracked, every life matters.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-50 shadow-2xl"
            leftIcon={<span className="text-2xl">❤️</span>}
          >
            Become a Donor
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            leftIcon={<span className="text-2xl">🏥</span>}
          >
            Healthcare Provider
          </Button>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 hover:bg-white/15 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl sm:text-4xl font-extrabold mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;