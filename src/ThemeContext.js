import { createContext, useContext, useState } from "react";

// This is our Context
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  // Global State
  const [theme, setTheme] = useState("light");

  // Business Logic Handled Here!
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook --- shortens few lines of code
export const useTheme = () => useContext(ThemeContext);
