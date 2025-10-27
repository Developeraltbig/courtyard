import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();
    const { tableNumber } = useParams();

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            navigate(`/table/${tableNumber}/checkout`);
        } else {
            alert('Your cart is empty.');
        }
    };

    return (
        <div className="card shadow-sm sticky-top" style={{ top: '20px' }}>
            <div className="card-body">
                <h4 className="card-title mb-3">Your Order</h4>
                {cartItems.length === 0 ? (
                    <p className="text-muted">Your cart is empty.</p>
                ) : (
                    <>
                        <ul className="list-group list-group-flush">
                            {cartItems.map((item) => (
                                <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    <div>
                                        <div>{item.name}</div>
                                        <small className="text-muted">${item.price.toFixed(2)}</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-sm btn-outline-secondary" onClick={() => removeFromCart(item._id)}>-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button className="btn btn-sm btn-outline-secondary" onClick={() => addToCart(item)}>+</button>
                                    </div>
                                    <span className="fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="d-flex justify-content-between fw-bold fs-5 mt-3 pt-3 border-top">
                            <span>Total:</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="d-grid mt-3">
                            <button className="btn btn-success" onClick={handleCheckout}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;