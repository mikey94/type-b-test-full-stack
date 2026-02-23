import axios, {type AxiosInstance } from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const apiUrl = `${baseUrl}`;

const api: AxiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default api;