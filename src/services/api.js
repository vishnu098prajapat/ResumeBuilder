import { mockApi } from './mockApi';

const USE_MOCK_API = true; // Set this to false when real backend is ready

const BASE_URL = 'http://localhost:5000/api';

const realApi = {
  auth: {
    login: async (credentials) => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      if (!response.ok) throw new Error('Login failed');
      return response.json();
    },
    // ... other methods
  },
  // ... other endpoints
};

export const api = USE_MOCK_API ? mockApi : realApi; 