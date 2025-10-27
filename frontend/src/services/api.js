import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: API_URL,
});

export const fetchMenu = () => api.get('/menu');
export const placeOrder = (orderData) => api.post('/orders', orderData);
export const fetchOrderStatus = (orderId) => api.get(`/orders/${orderId}`);