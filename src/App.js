import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./app.scss";
import data from "../src/data/data.json";
import { Home } from "./Pages/Home";
import { Job } from "./Pages/Job";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [jobCardNum, setJobCardNum] = useState(12);
  const [classNamed , setClassNamed] = useState(true);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Routes>
        <Route
          path="/"
          index
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              data={data}
              jobCardNum={jobCardNum}
              setJobCardNum={setJobCardNum}
              setClassNamed = {setClassNamed}
              classNamed = {classNamed}
            />
          }
        ></Route>
        <Route
          path="/:id"
          element={<Job darkMode={darkMode} setDarkMode={setDarkMode} setClassNamed = {setClassNamed} classNamed = {classNamed} data = {data} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
