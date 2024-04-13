'use client';
import { useEffect, useState } from 'react';
import { rockSalt } from './fonts';
import { Products } from '../components/front-shop';

function App() {
    const whyArr = [
        'PROUD',
        'STRONG',
        'COOL',
        'MYSELF',
        'ACCEPTED',
        'FREE',
        'UNIQUE',
        'HAPPY',
        'BOLD',
        'BRAVE',
        'CONFIDENT',
        'SEXY',
        'FEARLESS',
        'EXCITED',
        'JOYFUL',
    ];
    const [moveText, setText] = useState('PROUD');
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
                        entry.target.classList.add('fade-up');
                    }
                });
            },
            { threshold: 0.01 },
        );
        const element = document.querySelector('#img-text-about-div');
        //@ts-expect-error f u bish
        observer.observe(element);
    });
    return (
        <>
            <section
                id="hero-section"
                className="flex h-screen overflow-x-hidden"
            >
                <div className="flex overflow-x-hidden">
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
                                strokeWidth={'35rem'}
                            />
                        </svg>
                    </div>
                    <div className="w-1/2 z-10 h-full font-bold">
                        <div className="flex flex-col h-screen justify-center items-start gap-8 pl-24">
                            <div className="text-black text-[2.5rem]">
                                Wearing piercings makes me
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
                        <img id="hero-img" src="/placeholder-removebg.png" />
                    </div>
                    <div id="scroll-indicator">
                        <p>Scroll</p>
                        <div className="h-16 border-2 border-solid border-black w-0"></div>
                    </div>
                </div>
            </section>

            <section id="about-section">
                <div id="who-we">
                    <p>WHO WE ARE</p>
                </div>
                <div id="about-div">
                    <div id="img-text-about-div">
                        <div id="about-text">
                            <div
                                id="about-header"
                                className="text-[3rem]  mb-4 w-full"
                            >
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
                                className="h-96 w-96"
                                src="https://images.unsplash.com/photo-1605740179653-9cc6fd743e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBpZXJjaW5nfGVufDB8fDB8fHww"
                            />
                            <img
                                className="h-96 w-96"
                                src="https://images.unsplash.com/photo-1603323226047-df6de54ddc13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGllcmNpbmd8ZW58MHx8MHx8fDI%3D"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="shop-section" className="bg-red-400">
                <div id="who-we">
                    <p>SHOP NOW</p>
                </div>
                <div className="py-24 px-60">
                    <div className="flex flex-wrap gap-16 justify-center">
                        <Products />
                        <div className="flex justify-center items-center gap-16 flex-wrap"></div>
                    </div>
                </div>
            </section>
            <section id="insta-section">
                <div className="h-1/2 w-screen bg-green-100">
                    <div className="py-0 px-60"></div>
                </div>
            </section>
        </>
    );
}

export default App;
