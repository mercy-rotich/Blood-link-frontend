
// src/constants/bloodTypes.ts
import { BloodType } from '../types';

export const BLOOD_TYPES: BloodType[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const BLOOD_TYPE_INFO: Record<BloodType, {
  name: string;
  description: string;
  compatibility: BloodType[];
  donorsTo: BloodType[];
}> = {
  'O-': {
    name: 'O Negative',
    description: 'Universal Donor',
    compatibility: ['O-'],
    donorsTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  'O+': {
    name: 'O Positive',
    description: 'Most Common',
    compatibility: ['O+', 'O-'],
    donorsTo: ['A+', 'B+', 'AB+', 'O+']
  },
  'A-': {
    name: 'A Negative',
    description: 'Rare Type',
    compatibility: ['A-', 'O-'],
    donorsTo: ['A+', 'A-', 'AB+', 'AB-']
  },
  'A+': {
    name: 'A Positive',
    description: 'Common Type',
    compatibility: ['A+', 'A-', 'O+', 'O-'],
    donorsTo: ['A+', 'AB+']
  },
  'B-': {
    name: 'B Negative',
    description: 'Rare Type',
    compatibility: ['B-', 'O-'],
    donorsTo: ['B+', 'B-', 'AB+', 'AB-']
  },
  'B+': {
    name: 'B Positive',
    description: 'Common Type',
    compatibility: ['B+', 'B-', 'O+', 'O-'],
    donorsTo: ['B+', 'AB+']
  },
  'AB-': {
    name: 'AB Negative',
    description: 'Rarest Type',
    compatibility: ['AB-', 'A-', 'B-', 'O-'],
    donorsTo: ['AB+', 'AB-']
  },
  'AB+': {
    name: 'AB Positive',
    description: 'Universal Recipient',
    compatibility: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    donorsTo: ['AB+']
  }
};