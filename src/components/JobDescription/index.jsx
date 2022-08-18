import React from "react";
import { JobApplyBtn } from "../JobApplyBtn";
import { JobConPost } from "../JobCon&Post";
import { JobDescriptionContent } from "../JobDescriptionContent";
import { JobLocation } from "../JobLocation";
import { JobPosition } from "../JobPosition";
import { JobRequirements } from "../JobRequirements";
import { JobRole } from "../JobRole";
import "./style.scss";

export const JobDescription = ({ element , darkMode }) => {
  return (
    <div className={`job-description ${darkMode ? "dark" : "light"}`}>
      <div className="nameless" style={{display : "flex" , justifyContent : "space-between" , alignItems : "center"}}>
        <div>
        <JobConPost element={element} />
        <JobPosition darkMode = {darkMode} element = {element}/>
        <JobLocation element = {element}/>
        </div>
        <JobApplyBtn element={element}/>
      </div>
      <JobDescriptionContent darkMode = {darkMode} element={element}/>
      <JobRequirements darkMode = {darkMode} element={element}/>
      <JobRole darkMode = {darkMode} element={element}/>
    </div>
  );
};
