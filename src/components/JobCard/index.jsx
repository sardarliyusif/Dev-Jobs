import React from "react";
import { Link } from "react-router-dom";
import { JobCardLogo } from "../JobCardLogo";
import { JobCardPosition } from "../JobCardPosition";
import { JobCardCompany } from "../JobCardCompany";
import { JobCardLocation } from "../JobCardLocation";
import "../../styles/variable.scss";
import "./style.scss";
import { JobCardConPost } from "../JobCardCon&Post";

export const JobCard = ({
  data,
  darkMode,
  logo,
  logoBackground,
  postedAt,
  contract,
  position,
  company,
  setClassNamed,
  location,
}) => {
  const handleSetName = () => {
    setClassNamed(false)
    
  }
  return (
    <Link onClick={handleSetName} key = {data.id} to={`/${data.id}`} className={`job-card ${darkMode ? "dark" : "light"}`}>
      <JobCardLogo logo={logo} logoBackground={logoBackground} />
      <JobCardConPost postedAt={postedAt} contract={contract} />
      <JobCardPosition darkMode={darkMode} position={position} />
      <JobCardCompany company={company} />
      <JobCardLocation location={location} />
    </Link>
  );
};
