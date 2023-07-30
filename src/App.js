import { useColorScheme } from "react-native";
import { ThemeWrapper } from "./themeToggle";

import Header from "./components/header"
import Homepage from "./pages/homepage";

import "./App.css"

function App() {

  const colorScheme = useColorScheme() === "light" ? "light" : "dark";

  return (
    <ThemeWrapper>
      <div id="theme-wrapper" className={colorScheme+"Theme"}>
        
        <div className="App">
          <div className="page-content">

            <Header/>
            <Homepage/>
            <p>projects</p>
            <p>{colorScheme}</p>
            <p>contact</p>
            <p>footer</p>
            
          </div>
        </div>
      </div>
      </ThemeWrapper>
  );
}

export default App;
