// create react component for homepage

import React, { useState, useEffect } from 'react';
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
import SortDropdown from '../../components/sortDropdown';
import Cart from '../../components/cart';

const Homepage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);
    const [totalCartPrice, setTotalCartPrice] = useState(0);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState({
        name: '',
        glazing: '',
        packSize: '',
        price: ''
    });
    const items = [
        { name: 'Original Cinnamon Roll', price: 2.49},
        { name: 'Apple Cinnamon Roll', price: 3.49},
        { name: 'Raisin Cinnamon Roll', price: 2.99},
        { name: 'Walnut Cinnamon Roll', price: 3.49},
        { name: 'Double Chocolate Cinnamon Roll', price: 3.49},
        { name: 'Strawberry Cinnamon Roll', price: 3.99}
    ];
    const [filteredItems, setFilteredItems] = useState([]);
    const [sortSelection, setSortSelection] = useState("");
    const [searchOccurred, setSearchOccurred] = useState(false);

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

    // add to cart function
    const addToCart = (item) => {
        const cartItem = {
            name: item.name,
            glazing: item.glazing,
            packSize: item.packSize,
            price: item.price,
            image: findImage(item.name)
        };

        // add items to cartItems
        setCartItems([...cartItems, cartItem]);

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

    // if user clicks on cart
    const cartToggle = () => {
        setCartVisible(!cartVisible);
    };    

    // sorting dropdown logic
    useEffect(() => {
        const applySorting = (list) => {
            if (sortSelection !== '') {
                const sortedItems = [...list].sort((a, b) => {
                    if (sortSelection === 'name') {
                        return a.name.localeCompare(b.name);
                    } else if (sortSelection === 'price') {
                        return parseFloat(a.price) - parseFloat(b.price);
                    }
                    return 0;
                });
                return sortedItems;
            }
            return list;
        };

        // apply sorting to filtered items (if searching occurred) or full list of items
        if (searchOccurred) {
            setFilteredItems(applySorting(filteredItems));
        } else {
            setFilteredItems(applySorting(items));
        }
    }, [sortSelection, searchOccurred, filteredItems, items]);

    return (
        <div>
            {/* navbar */}
            <NavBar 
                cartToggle={cartToggle}
                popupVisible={popupVisible} 
                popupContent={popupContent} 
            />
            <header>
                <h1>Our hand-made cinnamon rolls</h1>
            </header>

            {cartVisible && (
                <Cart 
                    cartItems={cartItems} 
                    totalCartPrice={totalCartPrice} 
                />
            )}

            <div>
                {/* search bar and sort dropdown */}
                <div className="search-and-sort">
                    <SearchBar onSearch={handleSearch} />
                    <SortDropdown setSortDir={setSortSelection} />
                </div>
                
                {/* view products */}
                {searchOccurred && filteredItems.length === 0 ? (
                    <p id="no-match">No match!</p>
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
