// SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = React.useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="p-4 bg-gray-100 flex justify-center items-center">
            <input 
                type="text" 
                className="border rounded p-2 w-2/3"
                placeholder="Search by ingredient..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button 
                className="bg-blue-500 text-white p-2 rounded ml-2"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
