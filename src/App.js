import { useState } from "react";
import { Header } from "./components";
import panah from './data/data.json'
import "./app.scss";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  console.log(panah);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <ul>
      {panah.map(x => <li key={x.id}>{x.company}</li>)}
      </ul>
    </div>
  );
}

export default App;
