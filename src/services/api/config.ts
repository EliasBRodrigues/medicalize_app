import axios, { AxiosInstance } from 'axios';

// Defines the configuration type for creating an Axios instance
type ApiConfig = {
  baseURL: string; // Base URL for the API
  timeout?: number; // Optional timeout for requests in milliseconds
  headers?: Record<string, string>; // Optional additional headers for requests
};

// Creates a configured Axios instance with default settings and error handling
export function createApiInstance({
  baseURL,
  timeout = 20000,
  headers,
}: ApiConfig): AxiosInstance {
  // Create a new Axios instance with the provided configuration
  const instance = axios.create({
    baseURL, // Set the base URL for all requests
    timeout, // Set the request timeout (defaults to 20000ms)
    headers: {
      'Content-Type': 'application/json', // Default content type for requests
      ...headers, // Merge any additional headers provided in the config
    },
  });

  // Add a response interceptor to handle successful responses and errors
  instance.interceptors.response.use(
    (response) => response, // Return successful responses unchanged
    (error) => {
      // Log error details with the API's base URL for debugging
      console.error(`Error in API (${baseURL}):`, error.message);
      // Reject the promise to propagate the error to the caller
      return Promise.reject(error);
    }
  );

  // Return the configured Axios instance
  return instance;
}
