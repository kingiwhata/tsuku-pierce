import React from 'react';
export function Footer() {
    return (
        <footer className="bg-[darkgray] h-64 w-full">
            <div className="h-full w-full">
                <div className="bg-[#222222] h-full py-12 px-60 flex flex-row">
                    <div className="flex flex-col gap-2 w-1/3">
                        <div className="w-100 text-left">
                            <h2>About</h2>
                        </div>
                        <div className="w-full text-left text-xs">
                            <p>Privacy Policy</p>
                            <p>Hamburger</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-1/3">
                        <div className="flex flex-col gap-2 w-1/2">
                            <div className="w-100 text-left">
                                <h2>Sort By Gauge</h2>
                            </div>
                            <div className="w-full text-left text-xs">
                                <p>20G</p>
                                <p>18G</p>
                                <p>16G</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <div className="w-100 text-left">
                                <h2>Sort By Category</h2>
                            </div>
                            <div className="w-full text-left text-xs">
                                <p>Privacy Policy</p>
                                <p>Hamburger</p>
                                <p>Smoothie</p>
                            </div>
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
                <div className="text-xs w-full h-8 bg-[#818181]">
                    <div className="py-0 px-60 flex flex-row h-full items-center justify-between">
                        <p>© All rights reserved. Proud to Pierce</p>
                        <div className="flex flex-row gap-2"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
