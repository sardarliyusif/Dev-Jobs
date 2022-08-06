import { useState } from "react";
import { Header } from "./components";
import "./app.scss";
import { Main } from "./components/Main";


function App() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main darkMode={darkMode} setDarkMode={setDarkMode} />
      
    </div>
  );
}

export default App;
