import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { placeOrder } from '../services/api';
import Header from '../components/Header';

const CheckoutPage = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const { tableNumber } = useParams();
    const navigate = useNavigate();

    const [customer, setCustomer] = useState({ name: '', phone: '' });

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitOrder = async (e) => {
        e.preventDefault();
        if (!customer.name || !customer.phone) {
            alert('Please enter your name and phone number.');
            return;
        }

        const orderData = {
            tableNumber: parseInt(tableNumber, 10),
            customer,
            items: cartItems.map(item => ({ menuItem: item._id, quantity: item.quantity })),
            totalAmount
        };

        try {
            const response = await placeOrder(orderData);
            const orderId = response.data._id;
            clearCart();
            navigate(`/order/${orderId}`);
        } catch (error) {
            console.error('Failed to place order:', error);
            alert('Could not place your order. Please try again.');
        }
    };

    return (
        <div className="app-container">
            <Header />
            <main className="main-content-centered">
                <div className="checkout-container">
                    <h2>Checkout</h2>
                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <ul>
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <span>{item.quantity} x {item.name}</span>
                                    <span><i className='fa fa-inr'></i>{(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="summary-total">
                            <strong>Total:</strong>
                            <strong><i className='fa fa-inr'></i>{totalAmount.toFixed(2)}</strong>
                        </div>
                    </div>

                    <form className="checkout-form" onSubmit={handleSubmitOrder}>
                        <h3>Your Details</h3>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={customer.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={customer.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="place-order-btn">
                            Place Order & Pay
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default CheckoutPage;