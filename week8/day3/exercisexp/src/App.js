import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import CharacterCounter from "./CharacterCounter";

function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
        <CharacterCounter />
      </div>
    </ThemeProvider>
  );
}

export default App;