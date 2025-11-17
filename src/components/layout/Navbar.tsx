// src/components/layout/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { useTheme } from '../../hooks/useTheme';
import { ROUTES } from '../../constants';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'Features', path: '#features' },
    { label: 'Safety', path: '#safety' },
    { label: 'Contact', path: ROUTES.CONTACT },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-red-100 dark:border-red-900/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-105">
              <span className="text-2xl">🩸</span>
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
              BloodLink
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-gray-700 dark:text-gray-300 font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
            </button>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-11 h-11 rounded-lg border-2 border-red-600 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="ghost" size="sm" className="w-full">
              Sign In
            </Button>
            <Button variant="primary" size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};