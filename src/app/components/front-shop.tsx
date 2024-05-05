'use client';
import { useEffect, useState } from 'react';
import { getProductsLimit } from '../../utils/products';
import React from 'react';
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

export function Products({ limit }: { limit: number }) {
    const [products, setProducts] = useState<Product[] | undefined>(undefined);
    const getProducts = async () => {
        const products: Product[] = await getProductsLimit(limit);
        setProducts(products);
    };
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
            {products?.map((product: any, i: any) => (
                <div
                    key={i}
                    className="shop-card z-50 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
                >
                    <div className="card-pic h-full w-full">
                        <Link
                            href={{
                                pathname: `shop/${product
                                    .title!.split(' ')
                                    .join('-')
                                    .toLowerCase()}`,
                            }}
                        >
                            <img
                                className="h-full w-full"
                                src={product.thumbnail}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="font-bold absolute">{product.title}</div>
                    <div className="text-sm"></div>
                </div>
            ))}
        </>
    );
}
