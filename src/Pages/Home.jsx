import {React} from "react";
import { Header, Main, Footer } from "../components";

export const Home = ({
  data,
  darkMode,
  setDarkMode,
  jobCardNum,
  setJobCardNum,
  setClassNamed,
  classNamed
}) => {
  
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} setClassNamed = {setClassNamed} classNamed = {classNamed} />
      <Main data={data} darkMode={darkMode} num={jobCardNum} setClassNamed = {setClassNamed}/>
      <Footer
        setJobCardNum={setJobCardNum}
        num={jobCardNum}
        data={data.length}
      />
    </>
  );
};
