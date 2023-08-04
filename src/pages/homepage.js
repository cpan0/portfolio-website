import {Greeting} from "../info"
import friendsImg from "../assets/images/friends.png"

import "./styles/homepage.css"

function Homepage() {
    return (
        <div className="homepage-container">
            <div className="textbox">
                <h1 className="title">{Greeting.title}</h1>
                <p className="text">{Greeting.description}</p>
            </div>
            <div className="imgbox">
                <img className="image" alt="klarwithfriends" src={friendsImg}/>
            </div>
        </div>
    )
}

export default Homepage;