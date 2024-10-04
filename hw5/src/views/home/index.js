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
import SearchBar from '../../components/searchBar';

const Homepage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalCartPrice, setTotalCartPrice] = useState(0);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState({
        name: '',
        glazing: '',
        packSize: '',
        price: ''
    });
    const [filteredItems, setFilteredItems] = useState([])
    const items = [
        { name: 'Original Cinnamon Roll', price: '2.49'},
        { name: 'Apple Cinnamon Roll', price: '3.49'},
        { name: 'Raisin Cinnamon Roll', price: '2.99'},
        { name: 'Walnut Cinnamon Roll', price: '3.49'},
        { name: 'Double Chocolate Cinnamon Roll', price: '3.49'},
        { name: 'Strawberry Cinnamon Roll', price: '3.99'}
    ]
    const [searchOccurred, setSearchOccurred] = useState(false)

    // handle searching of items and filtered results
    const handleSearch = (term) => {
        setSearchOccurred(true);
        const filteredResults = items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
        setFilteredItems(filteredResults);
    }

    // find image connected to roll name
    const findImage = (name) => {
        switch (name) {
            case 'Original Cinnamon Roll':
              return originalCinnamonRoll;
            case 'Apple Cinnamon Roll':
              return appleCinnamonRoll;
            case 'Raisin Cinnamon Roll':
              return raisinCinnamonRoll;
            case 'Walnut Cinnamon Roll':
                return walnutCinnamonRoll;
            case 'Double Chocolate Cinnamon Roll':
              return chocolateCinnamonRoll;
            case 'Strawberry Cinnamon Roll':
              return strawberryCinnamonRoll;
            default:
              return originalCinnamonRoll;
          }
    }

    const addToCart = (item) => {
        // add items to cartItems
        setCartItems([...cartItems, item]);

        // add new item price to total
        const newTotal = parseFloat(totalCartPrice) + parseFloat(item.price);
        setTotalCartPrice(newTotal);

        // set cart popup
        setPopupContent({
            name: item.name,
            glazing: item.glazing,
            packSize: item.packSize,
            price: item.price
        });
        setPopupVisible(true);

        setTimeout(() => {
            setPopupVisible(false);
        }, 3000);
    };

    return (
        <div>
            <NavBar 
                cartItems={cartItems} 
                totalCartPrice={totalCartPrice} 
                popupVisible={popupVisible} 
                popupContent={popupContent} 
            />
            <header>
                <h1>Our hand-made cinnamon rolls</h1>
            </header>

            <div>
                <SearchBar onSearch={handleSearch} />
                
                {searchOccurred && filteredItems.length === 0 ? (
                    <p>No match!</p>
                ) : (
                    <div id="products">
                        {(filteredItems.length > 0 ? filteredItems : items).map((item, index) => (
                            <Item
                                key={index}
                                image={findImage(item.name)}
                                name={item.name}
                                title={item.name.toLowerCase()}
                                price={parseFloat(item.price)}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Homepage;
