'use server';

import { ProductType } from '@medusajs/medusa';

interface Products {
    title: string;
}

export async function getAllProducts() {
    const url = process.env.MEDUSA_BASE_URL;
    try {
        const res = await fetch(`${url}/store/products`);
        if (res.ok) {
            const { products } = await res.json();
            return products;
        }
    } catch (error) {
        console.error(`${error}: Failed to fetch products`);
    }
}
