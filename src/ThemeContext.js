import { createContext, useContext, useMemo, useState } from "react";

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

  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom Hook --- shortens few lines of code
export const useTheme = () => useContext(ThemeContext);
