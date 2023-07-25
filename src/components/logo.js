import logoImg from "../assets/logo.png"
import "./styles/logo.css"

function Logo() {
    return (
        <div className="logo-container">
            <div className="logo">
                <img className="logoImg" src={logoImg} alt="logoImg"/>
            </div>
        </div>
    )
}

export default Logo;
