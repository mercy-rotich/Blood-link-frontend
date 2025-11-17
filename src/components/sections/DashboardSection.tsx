// src/components/sections/DashboardSection.tsx
import React from 'react';
import { Card, CardHeader, CardContent } from '../common/Card';
import { Badge } from '../common/Badge';
import { StatCard } from '../common/StatCard';
import { AlertBox } from '../common/AlertBox';
import { BloodInventoryTable } from './BloodInventoryTable';
import type { BloodUnit } from '../../types';

const hospitalStats = [
  { value: '127', label: 'Total Units Available' },
  { value: '8', label: 'Active Requests' },
  { value: '23', label: 'Donors En Route' },
  { value: '98.7%', label: 'Success Rate' },
];

export const DashboardSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
            Real-World Dashboard Preview
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience how healthcare professionals manage blood inventory and emergency requests
          </p>
        </div>

        {/* Main Dashboard Card */}
        <Card hover className="mb-8">
          {/* Card Header */}
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="text-3xl">🏥</span>
                  Kenyatta National Hospital
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Blood Bank Dashboard - Live View
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="success" size="sm">
                  Verified Facility
                </Badge>
                <Badge variant="info" size="sm">
                  <span>🔒</span> Secure Session
                </Badge>
              </div>
            </div>
          </CardHeader>

          {/* Card Content */}
          <CardContent className="space-y-6">
            {/* Critical Alert */}
            <AlertBox 
              variant="error" 
              title="Critical Blood Shortage Alert"
            >
              O- blood type critically low (2 units remaining). 5 compatible donors notified automatically within 3km radius.
              <div className="mt-3">
                <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                  🔍 View Details
                </button>
              </div>
            </AlertBox>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hospitalStats.map((stat, idx) => (
                <StatCard
                  key={idx}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

            {/* Blood Inventory Table */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <span>📊</span> Current Blood Inventory
              </h4>
              <BloodInventoryTable />
            </div>
          </CardContent>
        </Card>

        {/* System Alerts Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <AlertBox variant="error" title="Critical Blood Shortage">
            O- blood critically low. Auto-notifications sent to 47 compatible donors within 10km radius.
          </AlertBox>
          
          <AlertBox variant="warning" title="Expiring Inventory Alert">
            6 units of B+ blood expiring in 3 days. Consider transfer to partner facilities.
          </AlertBox>
          
          <AlertBox variant="success" title="Emergency Request Fulfilled">
            Critical AB- request fulfilled in 34 minutes. Patient treatment proceeding successfully.
          </AlertBox>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;