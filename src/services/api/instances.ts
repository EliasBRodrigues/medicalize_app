import { createApiInstance } from './config';

// Defines constant base URLs for the APIs used in the application
const API_URLS = {
  TEXT_EXTRACTION: 'https://text-extraction-api-zn6c.onrender.com', // Base URL for the text extraction API
  MEDICINES: 'https://medicalize-app.onrender.com', // Base URL for the medicines API
} as const;

export const getExtractedText = createApiInstance({
  baseURL: API_URLS.TEXT_EXTRACTION, // Set the base URL to the text extraction API
  timeout: 100000, // Set the request timeout to 20 seconds
});

export const getMedicines = createApiInstance({
  baseURL: API_URLS.MEDICINES, // Set the base URL to the text extraction API
  timeout: 900000, // Set the request timeout to 20 seconds
});

