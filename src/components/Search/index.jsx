import React from 'react'
import { FilterByLoc } from '../FilterByLoc'
import { FilterByTitle } from '../FilterByTitle'
import { SearchRight } from '../SearchRight'
import "./style.scss"

export const Search = () => {
  return (
    <div className="search">
      <FilterByTitle/>
      <FilterByLoc/>
      <SearchRight/>
    </div>
  )
}
