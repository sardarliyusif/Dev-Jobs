import "./style.scss"


import React from 'react'
import { SearchButton } from "../SearchButton"
import { SearchFullTime } from "../SearchFullTime"

export const SearchRight = ({darkMode}) => {
  return (
    <div className="search-right">
        
        <SearchFullTime darkMode = {darkMode}/>
        <SearchButton/>
    </div>
  )
}