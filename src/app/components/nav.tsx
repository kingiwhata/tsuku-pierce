import Image from 'next/image';
import Link from 'next/link';

export function Nav() {
    return (
        <nav className="w-full absolute z-50 header px-24 py-5">
            <ul>
                <li>
                    <Link href="/account">
                        <Image
                            height={32}
                            width={32}
                            src="/pierce-acc.svg"
                            alt="Image of an account icon"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/cart">
                        <Image
                            height={32}
                            width={32}
                            src="/pierce-cart.svg"
                            alt="Image of a cart icon"
                        />
                    </Link>
                </li>
                <li>
                    <Image
                        height={32}
                        width={32}
                        src="/pierce-search.svg"
                        alt="Image of a search icon"
                    />
                </li>
                <li className="ml-auto">
                    <Link href="/">
                        <p id="logo-temp">Proud to Pierce</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
