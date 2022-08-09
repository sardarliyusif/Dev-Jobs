import React from "react";

import "./style.scss";
import { JobCard } from "../JobCard";

export const Main = ({ darkMode , data , num , setClassNamed}) => {
  
  return (
    <main className="main">
      {data.filter((_,i) => i<num ).map((element) => {
        return (
          <JobCard
            data = {element}
            darkMode={darkMode}
            key={element.id}
            logo={element.logo}
            logoBackground={element.logoBackground}
            postedAt={element.postedAt}
            contract={element.contract}
            position={element.position}
            company={element.company}
            setClassNamed = {setClassNamed}
            location={element.location}
          />
        );
      })}
    </main>
  );
};
