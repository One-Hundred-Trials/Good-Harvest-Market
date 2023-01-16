import axios from 'axios';

export const url = 'https://mandarin.api.weniv.co.kr';

export const instance = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' },
});

export const imgInstance = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'multipart/form-data' },
});

export const axiosPrivate = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (!config.headers.Authorization) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);
