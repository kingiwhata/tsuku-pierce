import { useState } from "react";
import "./App.css";
import cart from "./assets/pierce-cart.svg";
import search from "./assets/pierce-search.svg";

function App() {
    const whyArr = [
        "PROUD",
        "STRONG",
        "COOL",
        "MYSELF",
        "ACCEPTED",
        "FREE",
        "UNIQUE",
        "HAPPY",
        "BOLD",
        "BRAVE",
        "CONFIDENT",
        "SEXY",
        "FEARLESS",
        "EXCITED",
        "JOYFUL",
    ];
    const [moveText, setText] = useState("PROUD");
    const nextText = "JOYFUL";
    function triggerMove() {
        const randomIndex = Math.floor(Math.random() * whyArr.length);
        const iCheck = whyArr.indexOf(moveText);
        if (randomIndex == iCheck) {
            setText(whyArr[randomIndex + 1] || whyArr[randomIndex - 1]);
            return;
        }
        setText(whyArr[randomIndex]);
    }
    return (
        <div>
            <section id="hero-section">
                <nav className="header">
                    <ul>
                        <li id="logo-div">
                            <p id="logo-temp">Proud to Pierce</p>
                        </li>
                        {/* <li>About</li> */}
                        {/* <li>Products</li> */}
                        <li>
                            <img className="nav-icons" src={cart} />
                        </li>
                        <li>
                            <img className="nav-icons" src={search} />
                        </li>
                    </ul>
                </nav>
                <div id="text-div">
                    <div id="inner-text-div">
                    <div id="first-text">
                        Wearing{" "}
                        <span style={{ color: "black" }}>piercings </span>makes
                        me
                    </div>
                    <div id="moving-text">
                        <p
                            id="moving-p"
                            onAnimationIteration={() => triggerMove()}
                        >
                            {moveText}
                        </p>
                    </div>
                
                    </div>
                </div>
                <div id="img-div">
                    <img
                        id="hero-img"
                        src="src/assets/placeholder-removebg.png"
                    />
                </div>
                <div id="scroll-indicator">
                    <p>Scroll</p>
                    <div id="scroll-line"></div>
                </div>
            </section>
            <section id="about-section">
                <div id="about-header">
                    About Us
                </div>
            </section>
            <section id="shop-section"></section>
            <section id="insta-section"></section>
            <footer></footer>
        </div>
    );
}

export default App;
