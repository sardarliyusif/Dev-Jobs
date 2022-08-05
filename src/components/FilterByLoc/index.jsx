import "./style.scss"

import React from 'react'

export const FilterByLoc = () => {
  return (
    <div>
        <img
            className="filter-search-icon" 
            src="./assets/desktop/icon-location.svg" 
            alt="search-icon" 
        />
        <input 
            type="text"
            placeholder="Filter by title,companies,expertise..." 
        />
    </div>
  )
}