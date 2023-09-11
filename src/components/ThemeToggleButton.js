import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      id="global-theme-toggler"
      className={`btn-${theme} txt-${theme}`}
      onClick={toggleTheme}
    >{`Swicth to ${theme == "light" ? "dark" : "light"} theme`}</button>
  );
};
export { ThemeToggleButton };
