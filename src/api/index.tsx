import { Env } from '@env';
import axios from 'axios';

const client = axios.create({
  baseURL: Env.API_URL,
});

// Add a request interceptor
client.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken as any) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to get access token
const getAccessToken = () => {};

export { client };
