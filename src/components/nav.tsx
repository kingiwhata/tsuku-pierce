import Link from 'next/link';

export function Nav() {
    return (
        <nav className="w-full absolute z-50 header px-24 py-5">
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
                    <Link href="/">
                        <p id="logo-temp">Proud to Pierce</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
