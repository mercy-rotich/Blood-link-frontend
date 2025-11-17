// src/components/sections/BloodInventoryTable.tsx
import React from 'react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import type { BloodType, UrgencyLevel } from '../../types';

interface InventoryItem {
  bloodType: BloodType;
  name: string;
  description: string;
  units: number;
  status: string;
  urgency: UrgencyLevel;
  expiryDate: string;
  daysRemaining: number;
}

const inventoryData: InventoryItem[] = [
  {
    bloodType: 'O-',
    name: 'O Negative',
    description: 'Universal Donor',
    units: 2,
    status: 'Critical',
    urgency: 'critical',
    expiryDate: 'Jan 15, 2025',
    daysRemaining: 5,
  },
  {
    bloodType: 'A+',
    name: 'A Positive',
    description: 'Common Type',
    units: 8,
    status: 'Low Stock',
    urgency: 'high',
    expiryDate: 'Jan 18, 2025',
    daysRemaining: 8,
  },
  {
    bloodType: 'O+',
    name: 'O Positive',
    description: 'Most Common',
    units: 24,
    status: 'Good Stock',
    urgency: 'low',
    expiryDate: 'Jan 22, 2025',
    daysRemaining: 12,
  },
];

const getUrgencyBadgeVariant = (urgency: UrgencyLevel): 'error' | 'warning' | 'info' | 'success' => {
  const variants = {
    critical: 'error' as const,
    high: 'warning' as const,
    medium: 'info' as const,
    low: 'success' as const,
  };
  return variants[urgency];
};

const getUnitsColor = (urgency: UrgencyLevel): string => {
  const colors = {
    critical: 'text-red-600 dark:text-red-400',
    high: 'text-amber-600 dark:text-amber-400',
    medium: 'text-blue-600 dark:text-blue-400',
    low: 'text-green-600 dark:text-green-400',
  };
  return colors[urgency];
};

export const BloodInventoryTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 dark:text-white">
              Blood Type
            </th>
            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 dark:text-white">
              Units Available
            </th>
            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 dark:text-white">
              Status
            </th>
            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 dark:text-white">
              Next Expiry
            </th>
            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 dark:text-white">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {inventoryData.map((item, idx) => (
            <tr 
              key={idx} 
              className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              {/* Blood Type Column */}
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-shadow">
                    {item.bloodType}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {item.description}
                    </div>
                  </div>
                </div>
              </td>

              {/* Units Available Column */}
              <td className="px-4 py-4">
                <span className={`text-2xl font-extrabold ${getUnitsColor(item.urgency)}`}>
                  {item.units}
                </span>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {item.status}
                </div>
              </td>

              {/* Status Column */}
              <td className="px-4 py-4">
                <Badge 
                  variant={getUrgencyBadgeVariant(item.urgency)}
                  size="sm"
                >
                  {item.status}
                </Badge>
              </td>

              {/* Next Expiry Column */}
              <td className="px-4 py-4">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {item.expiryDate}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {item.daysRemaining} days remaining
                </div>
              </td>

              {/* Actions Column */}
              <td className="px-4 py-4">
                {item.urgency === 'critical' ? (
                  <Button 
                    variant="primary" 
                    size="sm"
                    leftIcon={<span>🚨</span>}
                  >
                    Emergency Request
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm"
                    leftIcon={<span>📢</span>}
                  >
                    Request More
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodInventoryTable;