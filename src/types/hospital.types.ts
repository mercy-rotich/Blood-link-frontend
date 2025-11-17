// src/types/hospital.types.ts
export interface Hospital {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  contactNumber: string;
  email: string;
  verified: boolean;
  registrationDate: Date;
  totalDonationsReceived: number;
  activeRequests: number;
}

export interface HospitalStats {
  totalUnits: number;
  activeRequests: number;
  donorsEnRoute: number;
  successRate: number;
}