import {React, useState} from "react";
import { Header, Main, Footer } from "../components";

export const Home = ({
  data,
  darkMode,
  setDarkMode,
  jobCardNum,
  setJobCardNum,
  setClassNamed,
  classNamed,
  setFullTime,
  fullTime
}) => {
  const [filterTitle, setFilterTitle] = useState("")
  const [loc , setLoc] = useState("")
  classNamed = true
  return (
    <>
      <Header darkMode={darkMode} setFilterTitle = {setFilterTitle} setTime = {setFullTime} setLoc = {setLoc} setDarkMode={setDarkMode} setClassNamed = {setClassNamed} classNamed = {classNamed} />
      <Main data={data} darkMode={darkMode} num={jobCardNum} setClassNamed = {setClassNamed} fullTime={fullTime} filterTitle ={filterTitle} loc = {loc}/>
      <Footer
        setJobCardNum={setJobCardNum}
        num={jobCardNum}
        data={data.length}
      />
    </>
  );
};
