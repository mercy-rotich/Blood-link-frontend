// src/components/sections/FeaturesSection.tsx
import React from 'react';
import { Card, CardContent } from '../common/Card';
import { Badge } from '../common/Badge';

interface Feature {
  icon: string;
  title: string;
  description: string;
  badge: string;
}

const features: Feature[] = [
  {
    icon: '🔐',
    title: 'HIPAA Compliant Security',
    description: 'End-to-end encryption, audit trails, and compliance with all healthcare privacy regulations. Your data is protected at every level.',
    badge: 'SOC 2 Certified'
  },
  {
    icon: '⚡',
    title: 'Real-Time Verification',
    description: 'Instant donor verification, blood type confirmation, and eligibility checks. Reduce wait times from hours to minutes.',
    badge: 'FDA Guidelines'
  },
  {
    icon: '🏥',
    title: 'Hospital Integration',
    description: 'Seamless integration with Epic, Cerner, and other major EHR systems. No workflow disruption, just enhanced efficiency.',
    badge: 'HL7 Compatible'
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Predictive modeling for blood demand, donor behavior analytics, and inventory optimization to prevent shortages.',
    badge: 'AI-Powered'
  },
  {
    icon: '🌍',
    title: 'Global Standards',
    description: 'Compliant with WHO blood safety guidelines, regional regulations, and international best practices for blood banking.',
    badge: 'WHO Approved'
  },
  {
    icon: '📱',
    title: 'Multi-Platform Access',
    description: 'Web, mobile, and tablet applications with offline capabilities. Access critical information anywhere, anytime.',
    badge: '99.9% Uptime'
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
            Why Healthcare Professionals Trust BloodLink
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Built with medical-grade security, real-time verification, and seamless integration with existing hospital systems.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              hover 
              gradient
              className="group"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
                {/* Badge */}
                <Badge variant="success" size="sm" className="inline-flex items-center gap-1">
                  <span>✓</span> {feature.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;