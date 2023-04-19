import axios from 'axios';
import { USER_AUTH_DATA_KEY } from '../const';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_AUTH_DATA_KEY) || '';
    }
    return config;
});
