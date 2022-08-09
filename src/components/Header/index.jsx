import React from "react";
import {Link} from "react-router-dom"
import { Search } from "../Search";
import { Switch } from "../Switch";
import "./style.scss";

export const Header = ({ darkMode, setDarkMode , setClassNamed , classNamed}) => {
  function handleSetName () {
    setClassNamed(true)
  }
  return (
    <header className="header">
      <section className="header__top">
        <Link to={"/"}><img
          onClick={handleSetName}
          className="header__logo"
          src="assets/desktop/logo.svg"
          alt="logo"
        /></Link>
        <Switch isDark={darkMode} setIsDark={setDarkMode} />
      </section>
      <section className={classNamed ? "header__search" : "display-none"}>
        < Search darkMode={darkMode} />
      </section>
    </header>
  );
};
