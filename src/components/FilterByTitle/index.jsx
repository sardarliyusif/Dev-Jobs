import "./style.scss"

import React from 'react'

export const FilterByTitle = () => {
  return (
    <div>
        <img
            className="filter-search-icon" 
            src="./assets/desktop/icon-search.svg" 
            alt="search-icon" 
        />
        <input 
            type="text"
            placeholder="Filter by title,companies,expertise..." 
        />
    </div>
  )
}

