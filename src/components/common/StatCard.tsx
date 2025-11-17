// src/components/common/StatCard.tsx
import React from 'react';
import { Card, CardContent } from './Card';
import { cn } from '../../utils/cn';

export interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  value, 
  icon, 
  trend,
  className 
}) => {
  return (
    <Card hover gradient className={cn('text-center', className)}>
      <CardContent className="flex flex-col items-center justify-center py-6">
        {icon && <div className="text-4xl mb-3">{icon}</div>}
        <div className="text-3xl font-extrabold text-red-600 dark:text-red-400 mb-2">
          {value}
        </div>
        <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          {label}
        </div>
        {trend && (
          <div className={cn(
            'mt-2 text-xs font-bold flex items-center gap-1',
            trend.isPositive ? 'text-green-600' : 'text-red-600'
          )}>
            <span>{trend.isPositive ? '↑' : '↓'}</span>
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
