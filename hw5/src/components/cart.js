import React from 'react';

const Cart = ({ cartItems, totalCartPrice, removeItem }) => {
    return (
        <div className="cart-container">
            <div className="cart-head">
                <h2>Shopping Cart ({cartItems.length} items)</h2>
                <div className="cart-total">
                    <h3>Total: ${parseFloat(totalCartPrice).toFixed(2)}</h3>
                </div>
            </div>

            {cartItems.length === 0 ? (
                <p id="empty-cart">The cart is empty!</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <h3>{item.name}</h3>
                        <p>Glazing: {item.glazing}</p>
                        <p>Pack size: {item.packSize}</p>
                        <p>${item.price}</p>
                        <button onClick={() => removeItem(index)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;