import React from "react";
import { JobDescription } from "../JobDescription";
import { JobFooter } from "../JobFooter";
import { JobTitle } from "../JobTitle";
import "./style.scss";

export const JobSlide = ({ element, darkMode }) => {
  return (
    <div className="job-slide">
      <JobTitle element={element} darkMode={darkMode} />
      <JobDescription element={element} />
      <JobFooter element={element} />
    </div>
  );
};
