import React from 'react';
import logo from '../assets/logo/logo-01.svg';
import '../App.css';

const NavBar = ({ cartItems, totalCartPrice }) => {
    return (
        <nav>
            <div className="site-logo">
            <img src={logo} alt="Bun Bake Shop Logo" />
            </div>
            <ul className="nav-links">
            <li className="nav-item current">
                <a href="index.jsx">PRODUCTS</a>
            </li>
            <li className="nav-item">
                <a href="#cart">
                    CART
                </a>
                <span className="cart-info">
                    {cartItems.length} item(s), Total: ${parseFloat(totalCartPrice).toFixed(2)}
                </span>
            </li>
            </ul>
        </nav>
    );
}

export default NavBar;