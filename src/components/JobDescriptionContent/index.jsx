import React from 'react'
import "./style.scss"
import "../JobDescription/style.scss"

export const JobDescriptionContent = ({element , darkMode}) => {
  return (
    <div className={`${darkMode ? "job-color-dark" : "job-color-light"}`}>{element?.description}</div>
  )
}

