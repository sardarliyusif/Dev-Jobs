import React from 'react'
import "./style.scss"
import "../../styles/variable.scss"

export const JobPosition = ({element , darkMode}) => {
  return (
    <div className={`job-position ${darkMode ? "dark-color" : "light-color"}`}>{element?.position}</div>
  )
}

