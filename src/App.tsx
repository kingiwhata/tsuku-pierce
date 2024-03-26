import { useEffect, useState } from "react";
import "./App.css";

// function setMove() {
//     const timeout = setTimeout(() => )
// }

// function getRandWord(current: number) {
//     const randIndex = Math.floor(Math.random() * 5);
//     if (randIndex == current) {
//         return
//     }
// }

function App() {
    const whyArr = ["PROUD", "STRONG", "COOL", "MYSELF", "COMFY"];
    const [moveText, setText] = useState("PROUD");
    function triggerMove() {
        const randomIndex = Math.floor(Math.random() * whyArr.length);
        setText(whyArr[randomIndex]);
    }
    return (
        <div>
            <nav className="header">
                <ul>
                    <li id="logo-div">
                        <h2 id="logo-temp">Proud to Pierce</h2>
                    </li>
                    <li>About</li>
                    <li>Products</li>
                    <li>
                        <img src="https://d2w53g1q050m78.cloudfront.net/koredakecojp/uploads/images/icon-user.svg" />
                    </li>
                    <li>
                        <img src="https://d2w53g1q050m78.cloudfront.net/koredakecojp/uploads/images/icon-cart.svg" />
                    </li>
                </ul>
            </nav>
            <section id="hero-section">
                <div id="text-div">
                    <div id="first-text">I wear piercings to be</div>
                    <div id="moving-text">
                        <p
                            id="moving-p"
                            onAnimationIteration={() => triggerMove()}
                        >
                            {moveText}
                        </p>
                    </div>
                </div>
                <div id="img-div">
                    <img
                        id="hero-img"
                        src="src/assets/placeholder-removebg.png"
                    />
                </div>
            </section>
            <section id="about-section"></section>
            <section id="shop-section"></section>
            <section id="insta-section"></section>
            <footer></footer>
        </div>
    );
}

export default App;
