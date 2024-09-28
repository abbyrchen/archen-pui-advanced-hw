import React from 'react';
import '../App.css';

const Item = ({ image, name, title, price, glazingOptions, packSizes }) => {
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
                        <p>{price}</p>
                    </div>
                </div>

                <div className="right-column">
                    <div className="glazing-dropdown">
                        <select id={`${title}-glazing`} name={`${title}-glazing`}>
                            {glazingOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="pack-size">
                        {packSizes.map((size, index) => (
                            <React.Fragment key={index}>
                                <input
                                    type="radio"
                                    id={`${title}-size${size}`}
                                    name={`${title}-pack-size`}
                                    value={size}
                                />
                                <label htmlFor={`${title}-size${size}`}>{size}</label>
                                <br />
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="cart-button">
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
