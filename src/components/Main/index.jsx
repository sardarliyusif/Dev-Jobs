import React from "react";
import "./style.scss";
import data from "../../data/data.json";
import { JobCard } from "../JobCard";

export const Main = ({ darkMode}) => {
  return (
    <main className="main">
      {data.map((element) => {
        return <JobCard darkMode={darkMode}  key = {element.id} logo={element.logo} postedAt={element.postedAt} contract = {element.contract} position = {element.position} company = {element.company} location = {element.location} />;
      })}
    </main>
  );
};
