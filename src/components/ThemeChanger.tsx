import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const ThemeChanger = () => {
  const { darkmode, handleThemeActive } = useDarkMode();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <div className="theme_change">
        <i
          onClick={handleThemeActive}
          className={`fas fa-toggle-${darkmode ? "on" : "off"} theme_btn`}
        ></i>

        {darkmode ? (
          <img src="https://bordados.vercel.app/sun.svg" alt="" />
        ) : (
          <img src="https://bordados.vercel.app/moon.svg" alt="" />
        )}
      </div>
    </div>
  );
};

export default ThemeChanger;
