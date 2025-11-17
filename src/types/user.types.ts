import { BloodType } from "./blood.types";
import { Hospital } from "./hospital.types";

// src/types/user.types.ts
export interface Donor {
  id: string;
  firstName: string;
  lastName: string;
  bloodType: BloodType;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  lastDonationDate?: Date;
  totalDonations: number;
  verified: boolean;
  location: {
    lat: number;
    lng: number;
  };
  eligibilityStatus: 'eligible' | 'temporarily_ineligible' | 'permanently_ineligible';
}

export interface User {
  id: string;
  email: string;
  role: 'donor' | 'hospital_admin' | 'system_admin';
  profile: Donor | Hospital;
  createdAt: Date;
  lastLogin: Date;
}