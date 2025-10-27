import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { fetchOrderStatus } from '../services/api';
import { generateReceipt } from '../utils/receiptGenerator'; // Import the PDF generator

const OrderConfirmationPage = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStatus = async () => {
            try {
                const response = await fetchOrderStatus(orderId);
                setOrder(response.data);
            } catch (error) {
                console.error('Failed to fetch order status:', error);
                // Optionally set an error state here
            } finally {
                setLoading(false);
            }
        };

        // Fetch the order status when the component mounts
        getStatus();
    }, [orderId]); // Dependency array ensures this runs only when orderId changes

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#fdf6f2' }}>
                <h2>Loading Confirmation...</h2>
            </div>
        );
    }

    if (!order) {
        return (
             <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#fdf6f2' }}>
                <h2>Order Not Found</h2>
            </div>
        )
    }

    return (
        <div style={{ backgroundColor: '#fdf6f2', minHeight: '100vh' }}>
            <Header />
            <main className="main-content-centered py-5">
                <div className="card shadow-sm text-center" style={{ maxWidth: '600px', width: '100%' }}>
                    <div className="card-body p-4 p-md-5">
                        <h2 className="card-title text-success">Thank You, {order.customer.name}!</h2>
                        <p className="lead">Your order has been received and is being prepared.</p>

                        {/* Estimated Time Display */}
                        {order.estimatedReadyTime && (
                            <div className="alert alert-info mt-4">
                                <h4 className="alert-heading">Estimated Ready Time</h4>
                                <p className="mb-0 fs-4 fw-bold">
                                    {new Date(order.estimatedReadyTime).toLocaleTimeString('en-IN', { 
                                        hour: '2-digit', 
                                        minute: '2-digit',
                                        hour12: true 
                                    })}
                                </p>
                            </div>
                        )}

                        {/* View/Download Receipt Button */}
                        <div className="d-grid gap-2 mt-4">
                            <button className="btn btn-secondary" onClick={() => generateReceipt(order)}>
                                <i className="bi bi-download me-2"></i> {/* Optional: For an icon if you use Bootstrap Icons */}
                                Download Receipt
                            </button>
                        </div>

                        {/* Order Details Section */}
                        <div className="mt-4 text-start">
                            <p><strong>Order ID:</strong> {order._id}</p>
                            <p><strong>Status:</strong> <span className="badge bg-primary fs-6">{order.status}</span></p>
                            <h5 className="mt-4">Order Summary</h5>
                            <ul className="list-group list-group-flush">
                                {order.items.map(item => (
                                    <li key={item._id} className="list-group-item d-flex justify-content-between">
                                        <span>{item.quantity} x {item.menuItem.name}</span>
                                        <span>₹{(item.menuItem.price * item.quantity).toFixed(2)}</span>
                                    </li>
                                ))}
                                <li className="list-group-item d-flex justify-content-between fw-bold fs-5 border-top pt-3">
                                    <span>Total</span>
                                    <span>₹{order.totalAmount.toFixed(2)}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OrderConfirmationPage;