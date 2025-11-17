// src/hooks/useTheme.ts - Light Mode as Default
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      // Check if user has a saved preference
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved as 'light' | 'dark';
      }
      // Default to light mode if no saved preference
      return 'light';
    }
    return 'light'; // Default to light
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme, setTheme };
};