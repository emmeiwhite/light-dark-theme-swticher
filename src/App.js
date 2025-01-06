import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";

import Header from "./components/Header";
import ExpenseTracker from "./pages/ExpenseTracker";
import Page from "./pages/Page";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />

      {/* --- Revisiting useReducer() Hook --- */}
      <ExpenseTracker />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
