import Logo from "./logo"
import NavBar from "./navBar"

import "./styles/header.css"

function Header() {
    return (
        <div className="header-container">
            <div className="logo">
                <Logo/>
            </div>
            <div className="navBar">                    <NavBar/>     
            </div>
        </div>
    )
}

export default Header;