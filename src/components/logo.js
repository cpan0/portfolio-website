import logoImg from "../assets/images/logo.png"
import "./styles/logo.css"

function Logo() {
    return (
        <div className="logo-container">
            <img className="logoImg" src={logoImg} alt="logoImg"/>
        </div>
    )
}

export default Logo;
