import { createContext } from "react";

export const ThemeModeCotext = createContext("light");

export const THEME = {
  light: {
    textColor: "#1E1F2C",
    backGroundColor: "white",
  },
  dark: {
    textColor: "white",
    backGroundColor: "#1E1F2C",
  },
};
