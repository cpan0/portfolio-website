import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";

import lightOnImg from "./assets/images/lightswitch-on.png"
import lightOffImg from "./assets/images/lightswitch-off.png"

import "./themeToggle.css"

const ThemeContext = createContext();

function ThemeWrapper({ children }) {
    const initColorScheme = useColorScheme() === "light" ? "light" : "dark";
    const [colorScheme, setColorScheme] = useState(initColorScheme);

    const applyColorScheme = (newColorScheme) => { 
    document.getElementById('theme-wrapper').className = newColorScheme+"Theme";
    setColorScheme(newColorScheme);
  };
  
    return (
      <ThemeContext.Provider value={{ colorScheme, applyColorScheme }}>
        {children}
      </ThemeContext.Provider>
    );
};

function ToggleTheme() {
    const { colorScheme, applyColorScheme } = useContext(ThemeContext);

    const altColorScheme = colorScheme === "light" ? "dark" : "light";
  
    const toggle = () => {
      applyColorScheme(altColorScheme);
        document.documentElement.style.setProperty("color-scheme", altColorScheme);
    };
  
    return (
        <div className="toggle-theme"> 
          <img className="toggleImg" src={colorScheme === "light" ? lightOnImg : lightOffImg} alt="light-switch-img" onClick={toggle} />
          {/* <button onClick={toggle}>Go {altColorScheme}</button>  */}
        </div>
    );
};

export {ThemeContext, ThemeWrapper, ToggleTheme};
