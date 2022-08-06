import React from "react";
import { Search } from "../Search";
import { Switch } from "../Switch";
import "./style.scss";

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <section className="header__top">
        <img
          className="header__logo"
          src="assets/desktop/logo.svg"
          alt="logo"
        />
        <Switch isDark={darkMode} setIsDark={setDarkMode} />
      </section>
      <section className="header__search">
        < Search darkMode={darkMode} />
      </section>
    </header>
  );
};
