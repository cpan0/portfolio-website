import { useColorScheme } from "react-native";
import { ThemeWrapper } from "./components/themeToggle";

import Header from "./components/header"
import Homepage from "./pages/homepage";
import Aboutpage from "./pages/about";
import Projectspage from "./pages/projects";
import Footer from "./components/footer";

import "./App.css"

function App() {

  const colorScheme = useColorScheme() === "light" ? "light" : "dark";

  return (
    <ThemeWrapper>
      <div id="theme-wrapper" className={colorScheme+"Theme"}>
        <div className="App" id="Home">
          <div className="page-content">
            <Header/>
            <Homepage/>
            <Aboutpage/>
            <Projectspage/>
            <p>contact</p>
            <Footer/>
          </div>
        </div>
      </div>
      </ThemeWrapper>
  );
}

export default App;
