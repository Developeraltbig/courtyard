import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { placeOrder } from '../services/api';
import Header from '../components/Header';
import { generateReceipt } from '../utils/receiptGenerator'; // <-- 1. IMPORT THE UTILITY


const CheckoutPage = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    // const { tableNumber } = useParams();
    const navigate = useNavigate();



    // State is simplified: we only need to track submission status
    const [tableNumber, setTableNumber] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [customer, setCustomer] = useState({ name: '', phone: '' });

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitOrder = async (e) => {
        e.preventDefault();
        if (!customer.name || !customer.phone || !tableNumber) {
            alert('Please fill in all details, including table number.');
            return;
        }

        setIsSubmitting(true); // Disable the button

        const orderData = {
            tableNumber: parseInt(tableNumber, 10),
            customer,
            items: cartItems.map(item => ({ menuItem: item._id, quantity: item.quantity })),
            totalAmount
        };

        try {
            const response = await placeOrder(orderData);
            
            // --- 2. GENERATE AND DOWNLOAD RECEIPT ON SUCCESS ---
            // The response.data contains the complete order object from the server
            // We need to populate it with the full menuItem details for the receipt
            const fullOrderDetails = {
                ...response.data,
                items: response.data.items.map(item => ({
                    ...item,
                    menuItem: cartItems.find(cartItem => cartItem._id === item.menuItem)._doc || cartItems.find(cartItem => cartItem._id === item.menuItem)
                }))
            };
            generateReceipt(fullOrderDetails);
            
            clearCart();
            navigate(`/order/${response.data._id}`);
        } catch (error) {
            console.error('Failed to place order:', error);
            alert('Could not place your order. Please try again.');
            setIsSubmitting(false);
        }
    };


    return (
        <div className="app-container" style={{ backgroundColor: '#fdf6f2' }}>
            <Header />
            <main className="main-content-centered py-5">
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
                        <div className="mb-3">
                                <label htmlFor="tableNumber" className="form-label">Table Number</label>
                                <input
                                    type="number"
                                    id="tableNumber"
                                    className="form-control"
                                    value={tableNumber}
                                    onChange={(e) => setTableNumber(e.target.value)}
                                    required
                                />
                        </div>


                          <div className="d-grid mt-4">
                                <button type="submit" className="btn btn-success btn-lg" disabled={isSubmitting}>
                                    {isSubmitting ? 'Placing Order...' : 'Place Order'}
                                </button>
                            </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default CheckoutPage;