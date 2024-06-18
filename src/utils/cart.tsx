'use server';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function createCart() {
    try {
        const res = await fetch(`${process.env.MEDUSA_BASE_URL}/store/carts`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                Cookie: `connect.sid=${cookies().get('medusa.sid')?.value}`,
            },
        });
        if (!res.ok) {
            throw Error();
        }
        const { cart } = await res.json();
        return cart;
    } catch (error) {
        return {
            res: `Account could not be created.`,
        };
    }
}

export async function addToCart(variant_id: string, quantity: number) {
    try {
        if (!cookies().has('cart-id')) {
            const createdCart = await createCart();
            cookies().set('cart-id', createdCart.id);
        }

        const res = await fetch(
            `${process.env.MEDUSA_BASE_URL}/store/carts/${cookies().get('cart-id')?.value}/line-items`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: `connect.sid=${cookies().get('medusa.sid')?.value}`,
                },
                body: JSON.stringify({
                    variant_id,
                    quantity,
                }),
            },
        );
        if (!res.ok) {
            throw Error();
        }
        const { cart } = await res.json();

        revalidatePath('/cart');
        return cart;
    } catch (error) {
        return {
            res: `Couldn't add to cart`,
        };
    }
}

export async function getCart() {
    try {
        const res = await fetch(
            `${process.env.MEDUSA_BASE_URL}/store/carts/${cookies().get('cart-id')?.value}`,
            {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: `connect.sid=${cookies().get('medusa.sid')?.value}`,
                },
                cache: 'no-store',
            },
        );
        if (!res.ok) {
            throw Error();
        }
        const { cart } = await res.json();
        revalidatePath('/cart');
        return cart;
    } catch (error) {
        return {
            res: `Account could not be created.`,
        };
    }
}

export async function updateCart(addyObj: any) {
    try {
        const res = await fetch(
            `${process.env.MEDUSA_BASE_URL}/store/carts/${cookies().get('cart-id')?.value}`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: `connect.sid=${cookies().get('medusa.sid')?.value}`,
                },
                cache: 'no-store',
                body: JSON.stringify({
                    shipping_address: {
                        address_1: addyObj.line1,
                        city: addyObj.city,
                        postal_code: addyObj.postal_code,
                    },
                }),
            },
        );
        if (!res.ok) {
            console.error(res);
            throw Error();
        }
        const { cart } = await res.json();
        revalidatePath('/cart');
        return cart;
    } catch (error) {
        return {
            res: `Account could not be created.`,
        };
    }
}

export async function completeCart() {
    try {
        const res = await fetch(
            `${process.env.MEDUSA_BASE_URL}/store/carts/${cookies().get('cart-id')?.value}/complete`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: `connect.sid=${cookies().get('medusa.sid')?.value}`,
                },
                cache: 'no-store',
            },
        );
        if (!res.ok) {
            console.error(res);
            throw Error();
        }
        const { cart } = await res.json();
        revalidatePath('/cart');
        return cart;
    } catch (error) {
        return {
            res: `Account could not be created.`,
        };
    }
}
