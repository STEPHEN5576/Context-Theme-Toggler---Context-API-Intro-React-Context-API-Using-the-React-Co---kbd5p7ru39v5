import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const { theme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(theme);

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  function changeLocalTheme() {
    if (localTheme === "light") {
      setLocalTheme("dark");
    } else {
      setLocalTheme("light");
    }
  }

  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-themed-box"
      className={`bg-${localTheme}`}
    >
      <p id="local-themed-text-container" className={`txt-${localTheme}`}>
        Hey We did it!!
      </p>
      <button
        id="local-theme-toggler"
        onClick={changeLocalTheme}
        className={`btn-${localTheme}`}
      >{`Toggle local theme to ${
        localTheme == "light" ? "dark" : "light"
      }`}</button>
    </div>
  );
};

export { LocalThemedBox };
