import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}` },
});
