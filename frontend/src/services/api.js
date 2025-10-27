import axios from 'axios';

// REMOVED: const API_URL = import.meta.env.VITE_API_URL;

// The API is now on the same domain as the frontend, just at the '/api' path.
// This is a relative path. The browser will automatically handle the domain part.
const API_URL = '/api';

const api = axios.create({
    baseURL: API_URL,
});

// Now, when you call fetchMenu(), axios will request '/api' + '/menu' = '/api/menu'
// which is exactly what our backend Express server is expecting.
export const fetchMenu = () => api.get('/menu');
export const placeOrder = (orderData) => api.post('/orders', orderData);
export const fetchOrderStatus = (orderId) => api.get(`/orders/${orderId}`);