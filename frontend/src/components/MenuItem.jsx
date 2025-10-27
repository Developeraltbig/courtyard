import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const MenuItem = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                <img src={item.imageUrl} className="card-img-top" alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-muted flex-grow-1">{item.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                        <span className="fw-bold fs-5 text-danger">${item.price.toFixed(2)}</span>
                        <button className="btn btn-danger" onClick={() => addToCart(item)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;