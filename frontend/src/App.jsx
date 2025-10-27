import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import MenuPage from './pages/MenuPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import OrderConfirmationPage from './pages/OrderConfirmationPage.jsx';
import './assets/css/App.css';

function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/table/:tableNumber" element={<MenuPage />} />
                    <Route path="/table/:tableNumber/checkout" element={<CheckoutPage />} />
                    <Route path="/order/:orderId" element={<OrderConfirmationPage />} />
                    <Route path="/" element={<Navigate to="/table/1" />} /> 
                    <Route path="*" element={<Navigate to="/table/1" />} /> 
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;