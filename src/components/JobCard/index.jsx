import React from 'react'
import { JobCardLogo } from '../JobCardLogo'
import { JobCardPosition } from '../JobCardPosition'
import { JobCardCompany } from '../JobCardCompany'
import { JobCardLocation } from '../JobCardLocation'
import "../../styles/variable.scss"
import "./style.scss"
import { JobCardConPost } from '../JobCardCon&Post'


export const JobCard = ({ darkMode , logo , logoBackground , postedAt , contract , position , company , location}) => {
  return (
    <a 
      href='#' 
      className={`job-card ${darkMode ? "dark" : "light"}`} 
    >
        <JobCardLogo logo = {logo} logoBackground = {logoBackground}/>
        <JobCardConPost postedAt = {postedAt} contract = {contract}/>
        <JobCardPosition darkMode={darkMode} position = {position} />
        <JobCardCompany company = {company} />
        <JobCardLocation location = {location} />
    </a>
  )
}