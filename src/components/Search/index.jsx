import React from "react";
import { FilterByLoc } from "../FilterByLoc";
import { FilterByTitle } from "../FilterByTitle";
import { SearchRight } from "../SearchRight";
import "./style.scss";

export const Search = ({ darkMode, setTime , setFilterTitle , setLoc}) => {
  return (
    <div className={`search ${darkMode ? "dark" : "light"}`}>
      <FilterByTitle darkMode={darkMode} setFilterTitle={setFilterTitle} />
      <FilterByLoc darkMode={darkMode} setLoc={setLoc}/>
      <SearchRight darkMode={darkMode} setTime={setTime} />
    </div>
  );
};
