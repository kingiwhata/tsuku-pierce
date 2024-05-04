'use client';
import { getAllProducts } from '../../utils/products';

import { Filters } from './components/filterboxes';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
    title: string;
    description: string;
    thumbnail: string;
    images: Array<{
        url: string;
    }>;
    options: Array<{
        values: Array<{
            value: string;
        }>;
    }>;
}

export default function Page() {
    const [products, setProducts] = useState<Product[] | undefined>(undefined);
    const getProducts = async () => {
        const products: Product[] = await getAllProducts();
        setProducts(products);
    };
    useEffect(() => {
        getProducts();
    }, []);

    const [showGauge, setShowGauge] = useState(true);
    const [showColour, setShowColour] = useState(false);
    const [showStyle, setShowStyle] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [showMaterial, setShowMaterial] = useState(false);

    return (
        <section className="font-bebas flex w-screen">
            <div className="py-24 px-60 w-full h-full">
                <div className="h-full w-full flex flex-row gap-8">
                    <div className="text-black text-large w-1/5 h-full flex flex-col gap-4">
                        <div className="font-bold text-xl pt-4">Filter</div>
                        <div
                            className="pt-4 border-t-[1px] mx-6 text-left cursor-pointer"
                            onClick={() => setShowGauge(!showGauge)}
                        >
                            Gauge
                        </div>
                        {showGauge ? (
                            <Filters
                                items={[
                                    '16',
                                    '14',
                                    '0',
                                    '00',
                                    'Expander',
                                    'Needle',
                                ]}
                            />
                        ) : (
                            <></>
                        )}

                        <div
                            className="pt-4 border-t-[1px] mx-6 text-left cursor-pointer"
                            onClick={() => setShowPrice(!showPrice)}
                        >
                            Price
                        </div>

                        {showPrice ? (
                            <Filters
                                items={[
                                    '$0 - $10',
                                    '$10 - $20',
                                    '$20 - $30',
                                    'Over $30',
                                ]}
                            />
                        ) : (
                            <></>
                        )}
                        <div
                            className="pt-4 border-t-[1px] mx-6 text-left cursor-pointer"
                            onClick={() => setShowColour(!showColour)}
                        >
                            Colour
                        </div>

                        {showColour ? (
                            <Filters items={['Silver', 'Gold', 'Black']} />
                        ) : (
                            <></>
                        )}
                        <div
                            className="pt-4 border-t-[1px] mx-6 text-left cursor-pointer"
                            onClick={() => setShowStyle(!showStyle)}
                        >
                            Style
                        </div>

                        {showStyle ? (
                            <Filters
                                items={[
                                    'Straight Barbell',
                                    'Labret',
                                    'Curved Barbell',
                                    'Ring',
                                    'Captive Ring',
                                ]}
                            />
                        ) : (
                            <></>
                        )}
                        <div
                            className="pt-4 border-t-[1px] mx-6 text-left cursor-pointer"
                            onClick={() => setShowMaterial(!showMaterial)}
                        >
                            Material
                        </div>

                        {showMaterial ? (
                            <Filters
                                items={[
                                    'Titanium',
                                    'Surgical Steel',
                                    'Bioplast',
                                    'Sterling Steel',
                                ]}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="w-4/5 ">
                        <div className="text-black font-bold text-xl pt-4 mb-4">
                            Sort By
                        </div>
                        <div className="items-start flex flex-row flex-wrap gap-4 bg-white">
                            {products?.map((product, i) => (
                                <Link
                                    key={i}
                                    className="w-[calc(20%-0.8rem)]"
                                    href={{
                                        pathname: `shop/${product
                                            .title!.split(' ')
                                            .join('-')
                                            .toLowerCase()}`,
                                    }}
                                >
                                    <div className="w-full shop-card z-50 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer">
                                        <div className="card-pic h-full w-full">
                                            <img
                                                className="h-full w-full"
                                                src={product.thumbnail}
                                                alt=""
                                            />
                                        </div>
                                        <div className="font-bold absolute">
                                            {product.title}
                                        </div>
                                        <div className="text-sm"></div>
                                    </div>
                                </Link>
                            ))}
                            {products?.map((product, i) => (
                                <Link
                                    key={i}
                                    className="w-[calc(20%-0.8rem)]"
                                    href={
                                        `shop/` +
                                        product
                                            .title!.split(' ')
                                            .join('-')
                                            .toLowerCase()
                                    }
                                >
                                    <div className="w-full shop-card z-50 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer">
                                        <div className="card-pic h-full w-full">
                                            <img
                                                className="h-full w-full"
                                                src={product.thumbnail}
                                                alt=""
                                            />
                                        </div>
                                        <div className="font-bold absolute">
                                            {product.title}
                                        </div>
                                        <div className="text-sm"></div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
