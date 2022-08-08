import React from 'react'
import "./style.scss"

export const JobCardPosition = ({darkMode , position}) => {
  return (
    <div className={`job-card-position ${darkMode ? "dark-color" : "white-color"}`}>{position}</div>
  )
}
