import "./style.scss"

import React from 'react'
import { FilterByLocFilter } from "../FilterByLocFilter"
import { FilterByLocIcon } from "../FilterByLocIcon"

export const FilterByLoc = () => {
  return (
    <div className="filter-by-loc">
        <FilterByLocIcon/>
        <FilterByLocFilter/>
    </div>
  )
}