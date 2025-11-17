// src/types/index.ts
export * from './blood.types';
export * from './hospital.types';
export * from './user.types';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface Theme {
  mode: 'light' | 'dark';
}