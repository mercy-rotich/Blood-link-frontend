// src/types/blood.types.ts
export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type UrgencyLevel = 'critical' | 'high' | 'medium' | 'low';

export interface BloodUnit {
  id: string;
  bloodType: BloodType;
  unitsAvailable: number;
  status: UrgencyLevel;
  expiryDate: Date;
  collectionDate: Date;
  location: string;
}

export interface BloodInventory {
  hospitalId: string;
  totalUnits: number;
  bloodUnits: BloodUnit[];
  lastUpdated: Date;
}

export interface DonationRequest {
  id: string;
  hospitalId: string;
  bloodType: BloodType;
  unitsNeeded: number;
  urgencyLevel: UrgencyLevel;
  requestDate: Date;
  status: 'pending' | 'fulfilled' | 'cancelled';
  notes?: string;
}
