import React from 'react';

const SortDropdown = ({ setSortDir }) => {
    return (
        <div className="sort-dropdown-container">
            <label htmlFor="sort">Sort by: </label>
            <select id="sort" className="sort-dropdown-select" onChange={(e) => setSortDir(e.target.value)}>
                <option value="name">Name</option>
                <option value="price">Base Price</option>
            </select>
        </div>
    );
}

export default SortDropdown;