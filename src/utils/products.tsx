'use server';
export async function getAllProducts() {
    const url = process.env.MEDUSA_BASE_URL;
    try {
        const res = await fetch(`${url}/store/products`, { cache: 'no-store' });
        if (res.ok) {
            const { products } = await res.json();
            return products;
        }
    } catch (error) {
        console.error(`${error}: Failed to fetch products`);
    }
}
