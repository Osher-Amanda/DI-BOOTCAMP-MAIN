import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "20px",
    minHeight: "200px",
  };

  return (
    <div style={styles}>
      <h1>{theme} mode</h1>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;