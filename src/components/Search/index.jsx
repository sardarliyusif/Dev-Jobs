import React from 'react'
import { FilterByLoc } from '../FilterByLoc'
import { FilterByTitle } from '../FilterByTitle'
import { SearchRight } from '../SearchRight'
import "./style.scss"

export const Search = ({darkMode}) => {
  return (
    <div className={`search ${darkMode ? "dark" : "light"}`}>
      <FilterByTitle/>
      <FilterByLoc/>
      <SearchRight/>
    </div>
  )
}
