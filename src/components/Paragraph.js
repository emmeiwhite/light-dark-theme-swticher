import { useTheme } from "../ThemeContext";

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
