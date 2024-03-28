import { useEffect, useState } from "react";
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
    function triggerMove() {
        const randomIndex = Math.floor(Math.random() * whyArr.length);
        const iCheck = whyArr.indexOf(moveText);
        if (randomIndex == iCheck) {
            setText(whyArr[randomIndex + 1] || whyArr[randomIndex - 1]);
            return;
        }
        setText(whyArr[randomIndex]);
    }
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-up");
                    }
                });
            },
            { threshold: 0.01 }
        );
        const element = document.querySelector("#img-text-about-div");
        observer.observe(element);
    });
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
                            <span style={{ color: "black" }}>piercings </span>
                            makes me
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
                <div id="about-div">
                    <div id="about-header">
                        <h2>About Us</h2>
                    </div>
                    <div id="img-text-about-div">
                        <div id="about-img-div">
                            <img
                                id="about-img"
                                src="https://images.unsplash.com/photo-1620891203092-971780cc3703?q=80&w=1059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>
                        <div id="about-text">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="shop-section"></section>
            <section id="insta-section"></section>
            <footer></footer>
        </div>
    );
}

export default App;
