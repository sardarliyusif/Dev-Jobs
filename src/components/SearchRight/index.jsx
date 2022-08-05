import "./style.scss"

import React from 'react'
import { SearchButton } from "../SearchButton"

export const SearchRight = () => {
  return (
    <div>
        
        <input 
            id="full-time-only"
            type="checkbox"
        />
        <label htmlFor="full-time-only">
            Full Time Only
        </label>
        <SearchButton/>
    </div>
  )
}