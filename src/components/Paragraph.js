import { useTheme } from "../ThemeContext";

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div style={{ color: theme === "light" ? "black" : "white" }}>
      <p>{children}</p>

      <p style={{ fontSize: "2rem" }}>Current Theme is {theme}</p>
    </div>
  );
};

export default Paragraph;
