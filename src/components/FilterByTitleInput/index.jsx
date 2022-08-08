import React from "react";
import "./style.scss"
import "../../styles/variable.scss"

export const FilterByTitleInput = ({darkMode}) => {
  return (
    <input 
      className={`filter-by-title-input ${darkMode ? "dark dark-mode-input-color" : "light"}`}
      type="text" 
      placeholder="Filter by title,companies,expertise..."

    />
  );
};
