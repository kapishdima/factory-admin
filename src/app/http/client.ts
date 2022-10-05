import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://damp-eyrie-64541.herokuapp.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
