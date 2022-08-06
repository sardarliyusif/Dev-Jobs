import "./style.scss"

import React from 'react'
import { FilterByTitleIcon } from "../FilterByTitleIcon"
import { FilterByTitleInput } from "../FilterByTitleInput"

export const FilterByTitle = () => {
  return (
    <div className="filter-by-title">
        <FilterByTitleIcon/>
        <FilterByTitleInput/>
    </div>
  )
}

