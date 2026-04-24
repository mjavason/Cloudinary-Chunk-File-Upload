import dotenv from 'dotenv';

dotenv.config({
  path: './.env',
});

export const PORT = process.env.PORT || 5000;
export const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_API_NAME || 'cloud-name';
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || 'api-key';
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || 'api-secret';
