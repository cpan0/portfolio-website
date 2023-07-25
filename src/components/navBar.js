import "./styles/navBar.css"

function NavBar() {
    return (
        <div className="nav-container">
            <div className="nav-bar">
                <ul className="nav-list">
                    <NavItem name={"Home"}/>
                    <NavDivider/>
                    <NavItem name={"About"}/>
                    <NavDivider/>
                    <NavItem name={"Projects"}/>
                    <NavDivider/>
                    <NavItem name={"Contact"}/>
                </ul>
            </div>
        </div>
    );
}

function NavDivider() {
    return (
        <li className="nav-divider">|</li>
    );
}

function NavItem({name}) {
    return (
        <li className="nav-item">
            <a href={"#"+name}>
                {name}
            </a>
        </li>
    );
}


export default NavBar