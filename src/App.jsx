import { useContext, useState } from "react";
import { Level1 } from "./components/Level1";
import { THEME, ThemeModeCotext } from "./context/ThemeModeContext";

export function App() {
  const initialThemeMode = useContext(ThemeModeCotext);
  const [themeMode, setThemeMode] = useState(initialThemeMode);

  return (
    <ThemeModeCotext.Provider value={{ themeMode, setThemeMode }}>
      <div style={{ color: THEME[themeMode].textColor, background: THEME[themeMode].backGroundColor, height: "100vh" }}>
        <Level1 />
      </div>
    </ThemeModeCotext.Provider>
  );
}
