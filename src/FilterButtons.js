import React from 'react';

function FilterButtons({ filters, setFilters }) {
  const toggleFavoritesFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      favorites: !prevFilters.favorites,
    }));
  };

  const toggleWishedFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      wished: !prevFilters.wished,
    }));
  };

  return (
    <div>
      <button
        onClick={toggleFavoritesFilter}
        className={filters.favorites ? 'active' : ''}
      >
        {filters.favorites ? 'Retirer filtre favori' : 'Filtrer selon mes favoris'}
      </button>
      <button
        onClick={toggleWishedFilter}
        className={filters.wished ? 'active' : ''}
      >
        {filters.wished ? 'Retirer filtre souhait' : 'Filtrer selon mes souhaits'}
      </button>
    </div>
  );
}

export default FilterButtons;
