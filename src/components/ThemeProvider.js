import React, { useState } from "react";

const ThemeContext = React.createContext();
const ThemeProvider = (props) => {
  // context state
  const [theme, setTheme] = useState("light");
  // function to change that state
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const initialState = {
    theme,
    toggleTheme,
  };

  return (
    <React.Fragment>
      <ThemeContext.Provider value={initialState}>
        {props.children}
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export { ThemeProvider, ThemeContext };
