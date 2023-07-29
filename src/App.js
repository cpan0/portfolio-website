// import {createContext, useState} from "react"
import {useColorScheme} from "react-native"

import Header from "./components/header"
import Homepage from "./pages/homepage";

import "./App.css"

// const ModeContext = createContext();
function App() {

  const colorScheme = useColorScheme();

  return (
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
  );
}

export default App;
