import { useEffect, useState } from "react";
import "./App.css";
import { rockSalt } from "./app/fonts"

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
        //@ts-expect-error f u bish
        observer.observe(element);
    });
    return (
        <div>
            <div id="hero-wrapper">
                <section id="hero-section">
                    <div id="my-div">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <line
                                x1="80"
                                y1="-50"
                                x2="20"
                                y2="150"
                                vector-effect="non-scaling-stroke"
                                stroke="white"
                                strokeWidth={"35rem"}
                            />
                        </svg>
                    </div>
                    <nav className="header">
                        <ul>
                            {/* <li>About</li> */}
                            {/* <li>Products</li> */}
                            <li>
                                <img className="nav-icons" src="/pierce-cart.svg" />
                            </li>
                            <li>
                                <img className="nav-icons" src="/pierce-search.svg" />
                            </li>
                            <li id="logo-div">
                                <p id="logo-temp">Proud to Pierce</p>
                            </li>
                        </ul>
                    </nav>
                    <div id="text-div">
                        <div id="inner-text-div">
                            <div id="first-text">
                                Wearing{" "}
                                <span style={{ color: "black" }}>
                                    piercings{" "}
                                </span>
                                makes me
                            </div>
                            <div id="moving-text">
                                <p
                                    className={rockSalt.className}
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
                            src="/placeholder-removebg.png"
                        />
                    </div>
                    <div id="scroll-indicator">
                        <p>Scroll</p>
                        <div id="scroll-line"></div>
                    </div>
                </section>
            </div>

            <section id="about-section">
                <div id="who-we">WHO WE ARE</div>
                <div id="about-div">
                    <div id="img-text-about-div">
                        <div id="about-text">
                            <div id="about-header">
                                <h2>
                                    Body piercings that give voice to how you
                                    feel
                                </h2>
                            </div>
                            <p>
                                Offering a wide range of affordable products
                                <br></br>
                                Proud to Pierce is here for you!
                            </p>
                        </div>
                        <div id="about-img-div">
                            <img
                                id="about-img"
                                src="https://images.unsplash.com/photo-1605740179653-9cc6fd743e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBpZXJjaW5nfGVufDB8fDB8fHww"
                            />
                            <img
                                id="about-img"
                                src="https://images.unsplash.com/photo-1603323226047-df6de54ddc13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGllcmNpbmd8ZW58MHx8MHx8fDI%3D"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="shop-section">
                <div id="who-we">SHOP NOW</div>
                <div id="shop-div">
                    <div id="shop-inner">
                        <div id="cards-div">
                            <div
                                className="shop-card"
                                style={{ background: "rgba(0, 255, 30, 0.5)" }}
                            >
                                <div className="card-pic"></div>
                                <div className="card-text-div">
                                    Sort By Gauge
                                </div>
                            </div>
                            <div
                                className="shop-card"
                                style={{ background: "rgba(200, 0, 255, 0.5)" }}
                            >
                                <div className="card-pic"></div>
                                <div className="card-text-div">
                                    Sort By Gauge
                                </div>
                            </div>
                            <div
                                className="shop-card"
                                style={{ background: "rgb(0, 115, 197, 0.5)" }}
                            >
                                <div className="card-pic"></div>
                                <div className="card-text-div">
                                    Sort By Gauge
                                </div>
                            </div>
                            <div
                                className="shop-card"
                                style={{ background: "rgb(0, 115, 197, 0.5)" }}
                            >
                                <div className="card-pic"></div>
                                <div className="card-text-div">
                                    Sort By Gauge
                                </div>
                            </div>
                            <div
                                className="shop-card"
                                style={{ background: "rgba(0, 255, 30, 0.5)" }}
                            >
                                <div className="card-pic"></div>

                                <div className="card-text-div">
                                    Sort By Gauge
                                </div>
                            </div>
                            <div
                                className="shop-card"
                                style={{ background: "rgba(200, 0, 255, 0.5)" }}
                            >
                                <div className="card-pic"></div>
                                <div className="card-text-div">
                                    Sort By Gauge
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="insta-section">
                <div id="insta-div">
                    <div id="insta-inner"></div>
                </div>
            </section>
            <footer>
                <div id="footer-div">
                    <div id="footer-inner">
                        <div className="footers">
                            <div className="sub-header">
                                <h2>About</h2>
                            </div>
                            <div className="footer-divs">
                                <p>Privacy Policy</p>
                                <p>Hamburger</p>
                            </div>
                        </div>
                        <div className="footers">
                            <div className="sub-header">
                                <h2>Information</h2>
                            </div>
                            <div className="footer-divs">
                                <p>Privacy Policy</p>
                                <p>Hamburger</p>
                                <p>Smoothie</p>
                            </div>
                        </div>
                        <div className="footers">
                            <div className="sub-header">
                                <h2>Subscribe</h2>
                            </div>
                            <div id="sub-div">
                                <input type="text" id="sub-input" />
                                <button>Subscribe</button>
                            </div>
                            <div id="footer-socials">
                                <img src="/pierce-insta.svg" />
                                <img src="/pierce-facebook.svg" />
                            </div>
                        </div>
                    </div>
                    <div id="copyright-div">
                        <div id="copyright-inner">
                            <p>© All rights reserved. Proud to Pierce</p>
                            <div id="pay-div"></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
