import Logo from "./logo"
import NavBar from "./navBar"
import { ToggleTheme } from "./themeToggle"

import "./styles/header.css"

function Header() {
    return (
        <div className="header-container">
            <div className="logo">
                <Logo/>
            </div>
            <div className="navBar">
                <NavBar/>     
            </div>
            <div className="themeToggleButton">
                <ToggleTheme/>     
            </div>
        </div>
    )
}

export default Header;