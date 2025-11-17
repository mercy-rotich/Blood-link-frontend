// src/components/common/AlertBox.tsx
import React from 'react';
import { cn } from '../../utils/cn';

export interface AlertBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'error' | 'warning' | 'success' | 'info';
  title?: string;
  onClose?: () => void;
}

export const AlertBox: React.FC<AlertBoxProps> = ({ 
  children, 
  className, 
  variant = 'info',
  title,
  onClose,
  ...props 
}) => {
  const variants = {
    error: 'bg-red-50 border-red-300 text-red-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200',
    warning: 'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-200',
    success: 'bg-green-50 border-green-300 text-green-900 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200',
    info: 'bg-blue-50 border-blue-300 text-blue-900 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200',
  };

  const icons = {
    error: '⚠',
    warning: '⚠',
    success: '✓',
    info: 'ℹ',
  };

  return (
    <div
      className={cn(
        'p-4 rounded-xl border flex items-start gap-3 transition-all duration-300',
        variants[variant],
        className
      )}
      role="alert"
      {...props}
    >
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/50 dark:bg-black/20 flex items-center justify-center font-bold">
        {icons[variant]}
      </div>
      <div className="flex-1">
        {title && (
          <h4 className="font-bold mb-1 text-base">{title}</h4>
        )}
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 text-current opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  );
};
