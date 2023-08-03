import "./styles/navBar.css"

function NavBar() {
    return (
        <div className="nav-container">                
            <ul className="nav-list">
                <NavItem name={"HOME"}/>
                <NavDivider/>
                <NavItem name={"ABOUT"}/>
                <NavDivider/>
                <NavItem name={"PROJECTS"}/>                    
                <NavDivider/>
                <NavItem name={"CONTACT"}/>
                </ul>
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