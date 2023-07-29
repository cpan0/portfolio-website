import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext();

function ThemeWrapper({ children }) {
    const initTheme = useColorScheme() === "light" ? "lightTheme" : "darkTheme";
    const [theme, setTheme] = useState(initTheme);

    const applyTheme = (newTheme) => { 
    document.getElementById('theme-wrapper').className = newTheme;
    setTheme(newTheme);
  };
  
    return (
      <ThemeContext.Provider value={{ theme, applyTheme }}>
        {children}
      </ThemeContext.Provider>
    );
};

function ToggleTheme() {
    const { theme, applyTheme } = useContext(ThemeContext);
  
    const altTheme = theme === "lightTheme" ? "darkTheme" : "lightTheme";
  
    const toggle = () => {
        applyTheme(altTheme);
    };
  
    return (
        <div className="toggle-theme"> 
            <button onClick={toggle}>Go {altTheme}</button> 
        </div>
    );
};

export {ThemeContext, ThemeWrapper, ToggleTheme};
