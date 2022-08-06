import React from 'react'
import { JobCardContract } from '../JobCardContract'
import { JobCardLogo } from '../JobCardLogo'
import { JobCardPostedAt } from '../JobCardPostedAt'
import { JobCardPosition } from '../JobCardPosition'
import { JobCardCompany } from '../JobCardCompany'
import { JobCardLocation } from '../JobCardLocation'
import "./style.scss"


export const JobCard = ({ darkMode , logo , postedAt , contract , position , company , location}) => {
  return (
    <a href='#' className={darkMode ? "dark" : "light"} >
        <JobCardLogo logo = {logo} />
        <div style={{display : "flex"}}>
        <JobCardPostedAt postedAt = {postedAt} />
        <JobCardContract contract = {contract} />
        </div>
        <JobCardPosition position = {position} />
        <JobCardCompany company = {company} />
        <JobCardLocation location = {location} />
    </a>
  )
}