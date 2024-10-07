import React from 'react';
import logo from '../assets/logo/logo-01.svg';
import '../App.css';

{/* navbar with cart popup */}
const NavBar = ({ cartToggle, popupVisible, popupContent }) => {
    return (
        <nav>
            {/* navbar */}
            <div className="site-logo">
            <img src={logo} alt="Bun Bake Shop Logo" />
            </div>
            <ul className="nav-links">
                <li className="nav-item current">
                    <a href="index.jsx">PRODUCTS</a>
                </li>
                <li className="nav-item">
                    <a onClick={cartToggle}>CART</a>
    
                    {/* cart popup when item is added */}
                    {popupVisible && (
                        <div className="cart-popup">
                            <p>Added to cart:</p>
                            <br />
                            <p><strong>{popupContent.name}</strong></p>
                            <p>{popupContent.glazing} glazing</p>
                            <p>Pack of {popupContent.packSize}</p>
                            <p className="price">Price: ${popupContent.price}</p>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;