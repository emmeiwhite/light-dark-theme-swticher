import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  console.log("In the Switch Component");
  console.log(theme);
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
