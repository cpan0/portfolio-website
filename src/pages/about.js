import {Education} from "../info"

import "./styles/about.css"

function AboutCard({ title, subtitle, description }) {
    return (
        <div className="aboutCard">
            <h1 className="about-title">{title}</h1>
            <h3 className="about-subtitle">{subtitle}</h3>
            <p className="about-description">{description}</p>
        </div>
    )
}

function Aboutpage() {
    return (
        <div className="aboutpage-container" id="About">
            <h1 className="page-title">About</h1> 
            <AboutCard title={Education.title} subtitle={Education.subtitle} description={Education.description}/>
        </div>

    )
}

export default Aboutpage;