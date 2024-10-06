import React, { useState, useEffect } from 'react';
import '../App.css';

const glazingOptions = [
    { name: "Keep original", price: 0 },
    { name: "Sugar milk", price: 0 },
    { name: "Vanilla milk", price: 0.5 },
    { name: "Double chocolate", price: 1.5 }
];

const packSizeOptions = [
    { size: 1, multiplier: 1 },
    { size: 3, multiplier: 3 },
    { size: 6, multiplier: 5 },
    { size: 12, multiplier: 10 }
];

const Item = ({ image, name, title, price, addToCart }) => {
    const [selectedGlazing, setGlazing] = useState(glazingOptions[0]);
    const [selectedPackSize, setPackSize] = useState(packSizeOptions[0]);
    const [totalPrice, setTotalPrice] = useState(price);

    useEffect(() => {
        setTotalPrice(price);
    }, [price]);
    
    // calculate total price
    const calculatePrice = (glazingPrice, packMultiplier) => {
        const basePrice = parseFloat(price);
        const calculatedTotal = (basePrice + glazingPrice) * packMultiplier;
        return calculatedTotal;
    }

    // handle glazing dropdown choice
    const handleGlazing = (e) => {
        const selectedGlazingOption = glazingOptions.find(option => option.price === parseFloat(e.target.value));
        setGlazing(selectedGlazingOption);

        setTotalPrice(calculatePrice(selectedGlazingOption.price, selectedPackSize.multiplier));
    };

    // handle pack size choice
    const handlePackSize = (option) => {
        setPackSize(option);
        setTotalPrice(calculatePrice(selectedGlazing.price, option.multiplier));
    };

    // handle adding to cart
    const handleCart = () => {
        const item = {
            name,
            glazing: selectedGlazing.name, 
            packSize: selectedPackSize.size,
            price: totalPrice.toFixed(2)
        };

        console.log('Adding to cart:', item); 
        addToCart(item);
    };

    return (
        <div className="product-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>

            <div className="product-content">
                <div className="left-column">
                    <div className="glazing">
                        <label htmlFor={`${title}-glazing`}>Glazing:</label>
                    </div>
                    <p>Pack size:</p>
                    <div className="price">
                        <p>${totalPrice.toFixed(2)}</p>
                    </div>
                </div>

                <div className="right-column">
                    <div className="glazing-dropdown">
                        <select id={`${title}-glazing`} name={`${title}-glazing`} onChange={handleGlazing}>
                            {glazingOptions.map((option, index) => (
                                <option key={index} value={option.price}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="pack-size">
                        {packSizeOptions.map((option, index) => (
                            <label
                                key={index}
                                htmlFor={`${title}-size${option.size}`}
                                onClick={() => handlePackSize(option)}
                                style={{
                                    backgroundColor: selectedPackSize.size === option.size ? '#c5c5c5' : 'white',
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '2px solid #000000',
                                    marginLeft: '10px'
                                }}>
                                {option.size}
                            </label>
                        ))}
                    </div>

                    <div className="cart-button">
                        <button type="button" onClick={handleCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;