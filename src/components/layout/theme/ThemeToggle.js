import React from "react";
import { ThemeContext } from "./ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full ">
      {theme === "dark" ? (
        <LightModeIcon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-50 text-2xl cursor-pointer"
        ></LightModeIcon>
      ) : (
        <DarkModeIcon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        ></DarkModeIcon>
      )}
    </div>
  );
};

export default Toggle;
