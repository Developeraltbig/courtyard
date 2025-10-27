import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const MenuItem = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="menu-item">
            <img src={item.imageUrl} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
                <h3 className="menu-item-name">{item.name}</h3>
                <p className="menu-item-description">{item.description}</p>
                <div className="menu-item-footer">
                    <span className="menu-item-price"><i className='fa fa-inr'></i>{item.price.toFixed(2)}</span>
                    <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;