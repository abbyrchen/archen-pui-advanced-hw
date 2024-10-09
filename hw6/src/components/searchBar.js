import React, {useState} from 'react';

{/* search bar */}
const SearchBar = ({onSearch}) => {
    const [searchInput, setSearchInput] = useState("");

    // handle changes in search bar input
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }
    
    // handle clicking search
    const handleSearch = () => {
        onSearch(searchInput);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchInput}
                onChange={handleChange}
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                Search
            </button>
        </div>
    );
}

export default SearchBar;