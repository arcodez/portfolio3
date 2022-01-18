import React, { useEffect, useState } from "react";

const useDarkMode = () => {
    const [darkmode, setDarkMode] = useState(false);

    useEffect(() => {
      handleThemeMode();
    }, [darkmode]);
  
    const handleThemeMode = () => {
      if (darkmode) return setColorToLight();
      if (!darkmode) return setColorToDark();
    };
  
    const handleThemeActive = () => {
      if (darkmode) setDarkMode(false);
      else setDarkMode(true);
    };
  
    const changesProperty = (property: string, value: string): void => {
      document.documentElement.style.setProperty(property, value);
    };
  
    //create a function to setColor to a varible off css
    const setColorToLight = () => {
      changesProperty("--color-text", "black");
      changesProperty("--btn-color-text", "white");
      changesProperty("--body-background", "white");
    };
  
    const setColorToDark = () => {
      changesProperty("--color-text", "#fff");
      changesProperty("--body-background", "black");
      changesProperty("--btn-color-text", "black");
    };
  return { darkmode, handleThemeActive };
};

export default useDarkMode;
