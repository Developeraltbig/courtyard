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
        return <div className="d-flex justify-content-center align-items-center vh-100"><h2>Loading Confirmation...</h2></div>;
    }

    return (
        <div className="app-container">
            <Header />
            <main className="main-content-centered">
                <div className="order-status-card">
                    <h2>Thank You, {order.customer.name}!</h2>
                    <p>Your order has been received.</p>
                    {/* --- ADD ESTIMATED TIME DISPLAY --- */}
                    {order.estimatedReadyTime && (
                        <div className="alert alert-info mt-4">
                            <h4 className="alert-heading">Estimated Ready Time</h4>
                            <p className="mb-0 fs-4 fw-bold">
                                {new Date(order.estimatedReadyTime).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                    )}

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
                    <h4>Total: <i className='fa fa-inr'></i>{order.totalAmount.toFixed(2)}</h4>
                </div>
            </main>
        </div>
    );
};

export default OrderConfirmationPage;