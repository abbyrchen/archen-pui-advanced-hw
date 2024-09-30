import React, { useState } from 'react';
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
    const [selectedGlazing, setGlazing] = useState(glazingOptions[0].price);
    const [selectedPackSize, setPackSize] = useState(packSizeOptions[0].multiplier);
    const [totalPrice, setTotalPrice] = useState(parseFloat(price));
    
    // calculate total price
    const calculatePrice = (glazingPrice, packMultiplier) => {
        const basePrice = parseFloat(price);
        const calculatedTotal = (basePrice + glazingPrice) * packMultiplier;
        return calculatedTotal;
    }

    // handle glazing dropdown choice
    const handleGlazing = (e) => {
        const glazingPrice = parseFloat(e.target.value);
        setGlazing(glazingPrice);

        setTotalPrice(calculatePrice(glazingPrice, selectedPackSize))
    };

    // handle pack size choice
    const handlePackSize = (e) => {
        const selectedSize = parseInt(e.target.value);
        const selectedPack = packSizeOptions.find(option => option.size === selectedSize);
    
        setPackSize(selectedPack.multiplier); 
    
        setTotalPrice(calculatePrice(selectedGlazing, selectedPack.multiplier)); 
    };

    // handle adding to cart
    const handleCart = () => {
        const item = {
            name,
            glazing: glazingOptions.find(option => option.price === selectedGlazing).name,
            packSize: selectedPackSize,
            price: totalPrice.toFixed(2)
        };
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
                            <React.Fragment key={index}>
                                <input
                                    type="radio"
                                    id={`${title}-size${option.size}`}
                                    name={`${title}-pack-size`}
                                    value={option.size}
                                    onChange={handlePackSize}
                                />
                                <label htmlFor={`${title}-size${option.size}`}>{option.size}</label>
                                <br />
                            </React.Fragment>
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
