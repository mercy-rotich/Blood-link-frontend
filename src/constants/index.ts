
// src/constants/index.ts
export * from './bloodTypes';
export * from './routes';


export const URGENCY_COLORS = {
  critical: 'bg-red-100 text-red-700 border-red-300',
  high: 'bg-amber-100 text-amber-700 border-amber-300',
  medium: 'bg-blue-100 text-blue-700 border-blue-300',
  low: 'bg-green-100 text-green-700 border-green-300',
} as const;

export const STATUS_COLORS = {
  pending: 'bg-yellow-100 text-yellow-700',
  fulfilled: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
} as const;

export const DONATION_INTERVAL_DAYS = 56; // Minimum days between donations
export const BLOOD_SHELF_LIFE_DAYS = 42; // Maximum storage time for blood
export const NOTIFICATION_RADIUS_KM = 10; // Default radius for donor notifications