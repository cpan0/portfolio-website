import "./App.css"
import NavBar from "./components/navBar.js"
import Logo from "./components/logo.js"

function App() {
  return (
    <div className="App">
      <div className="page-content">
        <Logo />
        <NavBar />
        <p>homepage</p>
        <p>about</p>
        <p>projects</p>
        <p>contact</p>
        <p>footer</p>
        
      </div>
    </div>
  );
}

export default App;
