import React from 'react';

function SearchBar({ setSearchQuery }) {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Rechercher un livre par titre..."
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;
