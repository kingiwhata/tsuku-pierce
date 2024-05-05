import React from 'react';
import { getCart } from '../../utils/cart';

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
            <div className="py-24 px-62 w-full h-full">
                <div className="flex flex-row flex-wrap gap-4 content-center items-center">
                    {cart?.items?.map((item) => (
                        <img className="h-64 w-64" src={item.thumbnail} />
                    ))}
                </div>
            </div>
        </section>
    );
}
