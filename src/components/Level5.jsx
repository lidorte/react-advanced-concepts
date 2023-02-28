import { useContext } from "react";
import { ThemeModeCotext } from "../context/ThemeModeContext";

export function Level5(props) {
  const { themeMode, setThemeMode } = useContext(ThemeModeCotext);
  function toggleThemeMode() {
    setThemeMode(themeMode === "light" ? "dark" : "light")
  }

  return (
    <>
      <div>I am level 5</div>
      <button onClick={toggleThemeMode}>Toggle Theme Mode</button>
    </>
  );


  // old way to do the same:
  // return (
  //   <ThemeModeCotext.Consumer>
  //     {
  //       (value) => {
  //         console.log(value)
  //         return (
  //           <>
  //             <div>I am level 5</div>
  //             <button onClick={toggleThemeMode}>Toggle Theme Mode</button>
  //           </>
  //         );
  //       }
  //     }
  //   </ThemeModeCotext.Consumer>
  // );
}
