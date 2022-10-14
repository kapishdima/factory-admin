import axios from 'axios';
import { getToken } from 'entities/token';

export const http = axios.create({
  baseURL: 'https://damp-eyrie-64541.herokuapp.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use((request) => {
  const token = getToken();

  return {
    ...request,
    headers: {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    },
  };
});
