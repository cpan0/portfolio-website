import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeWrapper, ToggleTheme} from "./themeToggle";

import Header from "./components/header"
import Homepage from "./pages/homepage";

import "./App.css"

function App() {

  const colorScheme = useColorScheme();

  // // Theme wrapper
  // const initTheme = useColorScheme() === "light" ? "lightTheme" : "darkTheme";
  // const [theme, setTheme] = useState(initTheme);

  // const applyTheme = (newTheme) => { 
  //   document.getElementById('theme-wrapper').className = newTheme;
  //   setTheme(newTheme);
  // }

  return (
    <ThemeWrapper>
      <div id="theme-wrapper" className={colorScheme+"Theme"}>
        <div className="App">
          <div className="page-content">

            <Header/>
            <Homepage/>

            <p>{colorScheme}</p>
            <ToggleTheme/>
            <p>projects</p>
            <p>contact</p>
            <p>footer</p>
            
          </div>
        </div>
      </div>
      </ThemeWrapper>
  );
}

export default App;
