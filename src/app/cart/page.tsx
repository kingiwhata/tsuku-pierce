import { getCart } from '../../utils/cart';
import Link from 'next/link';

interface CartType {
    items: Array<{
        title: string;
        thumbnail: string;
        quantity: number;
    }>;
}

export default async function Page() {
    const cart: CartType = await getCart();
    return (
        <section className="flex w-screen h-screen">
            <div className="py-24 px-60 w-full h-full flex content-center">
                <div className="flex flex-col flex-wrap gap-4 content-center items-center">
                    {cart?.items?.map((item, i: number) => (
                        <div key={i} className="w-full flex flex-row bg-red-50">
                            <img className="h-64 w-64" src={item.thumbnail} />
                            <div className="text-black">{item.title}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <Link href="/checkout">
                        <button className="text-black">Checkout</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
