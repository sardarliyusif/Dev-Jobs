import React from 'react'
import { FilterByTitleIcon } from "../FilterByTitleIcon"
import { FilterByTitleInput } from "../FilterByTitleInput"
import "./style.scss"

export const FilterByTitle = ({darkMode , setFilterTitle}) => {
  return (
    <div className="filter-by-title">
        <FilterByTitleIcon/>
        <FilterByTitleInput darkMode = {darkMode} setFilterTitle= {setFilterTitle} />
    </div>
  )
}

