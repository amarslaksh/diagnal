import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); // Trigger the search callback to update the parent state
    };

    return (
        <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
            className="search-input"
        />
    );
};

export default React.memo(SearchBar);