import ThemeContext from "./ThemeContext";
import { useState } from "react";

import unoTheme3 from "../assets/uno_theme_3.png";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(unoTheme3);

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
