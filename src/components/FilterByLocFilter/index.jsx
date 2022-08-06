import React from 'react'
import "./style.scss"
export const FilterByLocFilter = () => {
  
  return (
    <select className='filter-by-loc-filter' name="filter" id="filter">
      <option value="FilterBy">Filter By Location..</option>
      <option value="Germany">Germany</option>
      <option value="Japan">Japan</option>
      <option value="New Zealand">New Zealand</option>
      <option value="Russia">Russia</option>
      <option value="Singapore">Singapore</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="United States">United States</option>
    </select>
  )
}

