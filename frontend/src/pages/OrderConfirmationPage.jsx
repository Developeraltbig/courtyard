import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { fetchOrderStatus } from '../services/api';

const OrderConfirmationPage = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const getStatus = async () => {
            try {
                const response = await fetchOrderStatus(orderId);
                setOrder(response.data);
            } catch (error) {
                console.error('Failed to fetch order status:', error);
            }
        };
        getStatus();
    }, [orderId]);

    if (!order) {
        return <div className="loading">Loading your order confirmation...</div>;
    }

    return (
        <div className="app-container">
            <Header />
            <main className="main-content-centered">
                <div className="order-status-card">
                    <h2>Thank You, {order.customer.name}!</h2>
                    <p>Your order has been received.</p>
                    <p>Order ID: <strong>{order._id}</strong></p>
                    <p>Status: <span className={`status status-${order.status.toLowerCase()}`}>{order.status}</span></p>
                    
                    <h3>Order Summary</h3>
                    <ul className="order-summary-list">
                        {order.items.map(item => (
                            <li key={item._id}>
                                {item.quantity} x {item.menuItem.name}
                            </li>
                        ))}
                    </ul>
                    <h4>Total: ${order.totalAmount.toFixed(2)}</h4>
                </div>
            </main>
        </div>
    );
};

export default OrderConfirmationPage;