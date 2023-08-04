import {Education} from "../info"

import "./styles/about.css"

function AboutCard({ title, subtitle, description }) {
    return (
        <div className="aboutCard">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
            <p className="description">{description}</p>
        </div>
    )
}

function Aboutpage() {
    return (
        <div className="about-containter">
            <AboutCard title={Education.title} subtitle={Education.subtitle} description={Education.description}/>
        </div>

    )
}

export default Aboutpage;