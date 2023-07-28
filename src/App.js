// import {createContext, useState} from "react"
import {useColorScheme} from "react-native"
import {ThemeProvider} from 'styled-components';
import {themes} from "./styles";

import Header from "./components/header"
import Homepage from "./pages/homepage";

import "./App.css"

// const ModeContext = createContext();


function App() {

  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? themes["dark"] : themes["light"]}>
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
     </ThemeProvider>
  );
}

export default App;
