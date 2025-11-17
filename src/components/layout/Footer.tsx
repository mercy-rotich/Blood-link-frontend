// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'For Healthcare Providers',
      links: [
        { label: 'Hospital Registration', path: ROUTES.HOSPITAL_PORTAL },
        { label: 'Blood Inventory Management', path: ROUTES.HOSPITAL_INVENTORY },
        { label: 'Emergency Request System', path: ROUTES.HOSPITAL_REQUESTS },
        { label: 'API Integration', path: '/api-docs' },
        { label: 'Training & Support', path: '/support' },
      ],
    },
    {
      title: 'For Donors',
      links: [
        { label: 'Become a Donor', path: ROUTES.DONOR_REGISTER },
        { label: 'Donation Centers', path: '/centers' },
        { label: 'Eligibility Check', path: '/eligibility' },
        { label: 'Donation History', path: ROUTES.DONOR_PROFILE },
        { label: 'Rewards Program', path: '/rewards' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Safety Guidelines', path: '/safety' },
        { label: 'Blood Type Compatibility', path: '/compatibility' },
        { label: 'Medical Resources', path: '/resources' },
        { label: 'Research & Data', path: '/research' },
        { label: 'Community Impact', path: '/impact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: '📘', label: 'Facebook', url: '#' },
    { icon: '🐦', label: 'Twitter', url: '#' },
    { icon: '💼', label: 'LinkedIn', url: '#' },
    { icon: '📧', label: 'Email', url: 'mailto:contact@bloodlink.com' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link to={ROUTES.HOME} className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🩸</span>
              </div>
              <span className="text-2xl font-extrabold text-white">
                BloodLink
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Connecting lives through safe, verified blood donation. HIPAA-compliant platform trusted by healthcare professionals worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold mb-4 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-red-400 transition-colors duration-200 inline-block hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} BloodLink. All rights reserved. Saving lives through technology.
          </p>
        </div>
      </div>
    </footer>
  );
};