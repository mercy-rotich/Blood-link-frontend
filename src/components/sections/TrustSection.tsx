// src/components/sections/TrustSection.tsx
import React from 'react';

interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

const trustItems: TrustItem[] = [
  {
    icon: '🛡️',
    title: 'Bank-Level Security',
    description: '256-bit encryption, multi-factor authentication, and continuous security monitoring.'
  },
  {
    icon: '✅',
    title: 'Medical Verification',
    description: 'All donors undergo medical screening. All hospitals are verified healthcare facilities.'
  },
  {
    icon: '📋',
    title: 'Audit Trail',
    description: 'Complete tracking of every donation from request to completion for regulatory compliance.'
  },
  {
    icon: '🔄',
    title: '24/7 Monitoring',
    description: 'Round-the-clock system monitoring with immediate alerts for critical situations.'
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section id="safety" className="py-16 bg-gradient-to-br from-gray-50 to-red-50 dark:from-gray-800 dark:to-red-900/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-red-100 dark:border-red-900/30 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;