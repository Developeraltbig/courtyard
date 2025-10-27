import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const MenuItem = ({ item }) => {
    // const { addToCart } = useContext(CartContext);
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const itemInCart = cartItems.find(cartItem => cartItem._id === item._id);

        // Component for the quantity controls
    const QuantityControl = () => (
        <div className="d-flex align-items-center justify-content-end">
            <button 
                className="btn btn-danger btn-sm" 
                onClick={() => removeFromCart(item._id)}
                style={{ width: '35px' }}
            >
                -
            </button>
            <span className="mx-2 fw-bold">{itemInCart.quantity}</span>
            <button 
                className="btn btn-danger btn-sm" 
                onClick={() => addToCart(item)}
                style={{ width: '35px' }}
            >
                +
            </button>
        </div>
    );

    // Component for the "Add to Cart" button
    const AddToCartButton = () => (
        <button className="btn btn-danger" onClick={() => addToCart(item)}>
            Add to Cart
        </button>
    );

    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                <img src={item.imageUrl} className="card-img-top" alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-muted flex-grow-1">{item.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                        <span className="fw-bold fs-5 text-danger">${item.price.toFixed(2)}</span>
                        {itemInCart ? <QuantityControl /> : <AddToCartButton />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;