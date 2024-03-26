import "./App.css";

function App() {
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
                <div id="text-div">{/* <h1>Be Proud <br /> Be You</h1> */}</div>
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
