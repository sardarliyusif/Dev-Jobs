import React from "react";
import "./style.scss";
import "../JobDescription/style.scss";

export const JobRole = ({ element, darkMode }) => {
  return (
    <div>
      <div
        className={`${
          darkMode ? "job-title-color-dark" : "job-title-color-light"
        }`}
      >
        What You Will Do
      </div>
      <span className={`${darkMode ? "job-color-dark" : "job-color-light"}`}>
        {element?.role.content}
      </span>
      <ol
        className={`${darkMode ? "job-color-dark" : "job-color-light"}`}
        style={{ paddingLeft: "1rem", marginTop: "24px"  }}
      >
        {element?.role.items.map((item) => (
          <li key={item} style={{ listStyleType : "i" , paddingLeft: "1rem" }}>{item}</li>
        ))}
      </ol>
    </div>
  );
};
