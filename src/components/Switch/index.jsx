import React from "react";
import "./style.scss";

export const Switch = ({ isDark, setIsDark }) => (
  <div
    className="switch"
    onClick={() => {
      setIsDark((prev) => !prev);
    }}
  >
    <img
      className="switch__sun"
      src="./assets/desktop/icon-sun.svg"
      alt="sun"
    />
    <div className={`switch__root ${isDark ? "switch__root--active" : ""}`}>
      <div className="switch__root__circle" />
    </div>
    <img
      className="switch__moon"
      src="./assets/desktop/icon-moon.svg"
      alt="moon"
    />
  </div>
);
