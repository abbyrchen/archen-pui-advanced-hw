// create react component for homepage

import React, { useState } from 'react';
import '../../App.css';
import originalCinnamonRoll from '../../assets/products/original-cinnamon-roll.jpg';
import appleCinnamonRoll from '../../assets/products/apple-cinnamon-roll.jpg';
import raisinCinnamonRoll from '../../assets/products/raisin-cinnamon-roll.jpg';
import walnutCinnamonRoll from '../../assets/products/walnut-cinnamon-roll.jpg';
import chocolateCinnamonRoll from '../../assets/products/double-chocolate-cinnamon-roll.jpg';
import strawberryCinnamonRoll from '../../assets/products/strawberry-cinnamon-roll.jpg';
import NavBar from '../../components/navbar';
import Item from '../../components/item';

const Homepage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState('');

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        setPopupContent(`${item.name} - Glazing: ${item.glazing}, Pack Size: ${item.packSize}, Price: $${item.price}`);
        setPopupVisible(true);

        // Hide popup after 3 seconds
        setTimeout(() => {
            setPopupVisible(false);
        }, 3000);
    };

    const totalCartPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

    return (
        <div>
            <NavBar cartItems={cartItems} totalCartPrice={totalCartPrice} />
            <header>
                <h1>Our hand-made cinnamon rolls</h1>
            </header>
            <main>
                {popupVisible && (
                    <div className="cart-popup">
                        <p>Added to cart: {popupContent}</p>
                    </div>
                )}

                <section id="products">
                <Item
                    image={originalCinnamonRoll}
                    name="Original cinnamon oll"
                    title="original"
                    price="2.49"
                    addToCart={addToCart}
                />
                <Item
                    image={appleCinnamonRoll}
                    name="Apple cinnamon roll"
                    title="apple"
                    price="3.49"
                    addToCart={addToCart}
                />
                <Item
                    image={raisinCinnamonRoll}
                    name="Raisin cinnamon roll"
                    title="raisin"
                    price="2.99"
                    addToCart={addToCart}
                />
                <Item
                    image={walnutCinnamonRoll}
                    name="Walnut cinnamon roll"
                    title="walnut"
                    price="3.49"
                    addToCart={addToCart}
                />
                <Item
                    image={chocolateCinnamonRoll}
                    name="Double chocolate cinnamon roll"
                    title="original"
                    price="2.49"
                    addToCart={addToCart}
                />
                <Item
                    image={strawberryCinnamonRoll}
                    name="Strawberry cinnamon roll"
                    title="strawberry"
                    price="3.99"
                    addToCart={addToCart}
                />
                </section>
            </main>
        </div>
    );
}

export default Homepage;