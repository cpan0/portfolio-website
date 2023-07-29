import { createContext, useContext, useState} from "react";
import {useColorScheme} from "react-native";

import Header from "./components/header"
import Homepage from "./pages/homepage";

import "./App.css"

const ThemeContext = createContext();

function App() {

  const colorScheme = useColorScheme();

  // Theme wrapper
  const initTheme = useColorScheme() === "light" ? "lightTheme" : "darkTheme";
  const [theme, setTheme] = useState(initTheme);

  const applyTheme = (newTheme) => { 
    document.getElementById('theme-wrapper').className = newTheme;
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, applyTheme }}>
      <div id="theme-wrapper" className={colorScheme+"Theme"}>
        <div className="App">
          <div className="page-content">

            <Header/>
            <Homepage/>

            <p>{colorScheme}</p>
            <p>projects</p>
            <p>contact</p>
            <p>footer</p>
            
          </div>
        </div>
      </div>
      </ThemeContext.Provider>
  );
}


function ToggleTheme() {
  const { theme, applyTheme } = useContext(ThemeContext);

  const altTheme = theme === "lightTheme" ? "darkTheme" : "lightTheme";

  const toggle = () => {
    applyTheme(altTheme);
  }

  return (
    <div className="toggle-theme"> 
      <button onClick={toggle}>Go {altTheme}</button> 
    </div>
  )
}

export default App;
