import React from "react";
import "./style.scss"
import "../../styles/variable.scss"

export const FilterByTitleInput = ({darkMode , setFilterTitle}) => {
  const handleFilter = (param) => {
    setFilterTitle(param.toUpperCase())
  }
  return (
    <input 
      className={`filter-by-title-input ${darkMode ? "dark dark-mode-input-color" : "light"}`}
      type="text" 
      placeholder="Filter by title,companies..."
      onChange={(e) => {handleFilter(e.target.value)}}

    />
  );
};
