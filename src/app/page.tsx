'use client'
import { useEffect, useState } from "react";

import { rockSalt } from "./fonts";
import Link from "next/link";

import fetchProducts from "../../src/components/front-shop";

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
        <>
            <div className="p-4">
                <section id="hero-section" className="flex h-screen overflow-x-hidden">
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
                                vectorEffect="non-scaling-stroke"
                                stroke="white"
                                strokeWidth={"35rem"}
                            />
                        </svg>
                    </div>
                    <nav className="header px-24 py-5">
                        <ul>
                            <li>
                                <Link href="/checkout">
                                    <img className="h-8 w-8" src="/pierce-cart.svg" />
                                </Link>
                            </li>
                            <li>
                                <img className="h-8 w-8" src="/pierce-search.svg" />
                            </li>
                            <li className="justify-start ml-auto">
                                <p id="logo-temp">Proud to Pierce</p>
                            </li>
                        </ul>
                    </nav>
                    <div className="w-1/2 z-10 h-full font-bold">
                        <div 
                            className="flex flex-col h-screen justify-center items-start gap-8 pl-24">
                            <div className="text-black text-[2.5rem]">
                                Wearing{" "}
                                piercings{" "}
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
                    <div className="z-50 h-full w-1/2 overflow-hidden">
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
                            <div id="about-header" className="text-[3rem]  mb-4 w-full">
                                <h2>
                                    Body piercings that give voice to how you
                                    feel
                                </h2>
                            </div>
                            <p className="text-[2rem]">
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
                        {fetchProducts()}
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
                    <div id="insta-inner">

                    </div>
                </div>
            </section>
            <footer className="bg-[darkgray] h-56 w-full">
                <div className="h-full w-full">
                    <div className="bg-[#222222] h-full py-12 px-60 flex flex-row">
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="w-100 text-left"> <h2>About</h2>
                            </div>
                            <div className="w-full text-left text-xs">
                                <p>Privacy Policy</p>
                                <p>Hamburger</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="w-100 text-left">
                                <h2>Information</h2>
                            </div>
                            <div className="w-full text-left text-xs">
                                <p>Privacy Policy</p>
                                <p>Hamburger</p>
                                <p>Smoothie</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="w-100 text-left">
                                <h2>Subscribe</h2>
                            </div>
                            <div className="flex flex-row gap-2">
                                <input type="text" className="h-8 w-full" />
                                <button className="p-2">Subscribe</button>
                            </div>
                            <div className="flex w-full gap-4 justify-start">
                                <img className="w-8" src="/pierce-insta.svg" />
                                <img className="w-8" src="/pierce-facebook.svg" />
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
        </>
    );
}

export default App;
