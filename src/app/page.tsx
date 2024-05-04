'use client';
import { useEffect, useState } from 'react';
import { rockSalt, bebasNeue } from './fonts';
import { Products } from './components/front-shop';
import Link from 'next/link';

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
        const aboutElement = document.querySelector('#about-div');
        const shopElement = document.querySelector('#shop-div');
        //@ts-expect-error f u bish
        observer.observe(shopElement);
        //@ts-expect-error f u bish
        observer.observe(aboutElement);
    });
    return (
        <>
            <section
                id="hero-section"
                className="flex h-screen overflow-x-hidden"
            >
                <div className="flex overflow-x-hidden">
                    <div className="w-1/2 z-10 h-full font-bold">
                        <div className="flex flex-col h-screen justify-center items-start gap-8 pl-24">
                            <div className="text-black text-[3.5rem] font-bebas">
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
                        <p className="font-bebas">Scroll</p>
                        <div className="h-16 border-2 border-solid border-black w-0"></div>
                    </div>
                </div>
            </section>

            <section id="about-section">
                <div className="who-we">
                    <p>WHO WE ARE</p>
                </div>
                <div className="py-24 px-60">
                    <div
                        id="about-div"
                        className="flex flex-col items-center h-full justify-center gap-8"
                    >
                        <div id="about-text">
                            <div className="text-[3rem]  mb-4 w-full">
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
            <section id="shop-section" className="bg-[#00FFE1]">
                <div className="who-we text-[31rem]">
                    <p>SHOP WITH US</p>
                </div>
                <div id="shop-div" className="py-24 px-60 flex flex-col gap-8">
                    <div className="z-50 ">
                        <div className="text-[3rem] w-full">
                            <h2 className="font-bebas text-black">
                                Our Products
                            </h2>
                        </div>
                        <p className="text-[2rem] font-bebas text-black">
                            New Arrivals
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center h-64">
                        <Products limit={5} />
                        <div className="flex justify-center items-center gap-16 flex-wrap"></div>
                    </div>
                    <p className="text-[2rem] font-bebas text-black mb-3">
                        <Link href="/shop">
                            <button className="border-black bg-white py-1 px-3 rounded">
                                See More
                            </button>
                        </Link>
                    </p>
                    <div className="z-50 ">
                        <p className="text-[2rem] font-bebas text-black">
                            Best Sellers
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center h-64">
                        <Products limit={5} />
                        <div className="flex justify-center items-center gap-16 flex-wrap"></div>
                    </div>
                    <p className="text-[2rem] font-bebas text-black mb-3">
                        <Link href="/shop">
                            <button className="border-black bg-white py-1 px-3 rounded">
                                See More
                            </button>
                        </Link>
                    </p>
                </div>
            </section>
            <section id="insta-section">
                <div className="who-we">
                    <p>FOLLOW US</p>
                </div>
                <div className="py-24 px-60">
                    <div className="z-50 ">
                        <div className="text-[3rem] w-full">
                            <h2 className="font-bebas text-black">
                                Our Socials
                            </h2>
                        </div>
                        <p className="text-[2rem] font-bebas text-black mb-3">
                            Keep Up To Date
                        </p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="h-[30rem] bg-black w-[30rem]">
                            <img
                                className="h-[30rem] w-[30rem]"
                                src="https://images.unsplash.com/photo-1605740179653-9cc6fd743e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBpZXJjaW5nfGVufDB8fDB8fHww"
                            />
                        </div>
                        <div className="h-[30rem] w-[30rem] flex flex-row gap-2 flex-wrap">
                            <div className="w-56 bg-black"></div>
                            <div className="w-56 bg-black"></div>
                            <div className="w-56 bg-black"></div>
                            <div className="w-56 bg-black"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
