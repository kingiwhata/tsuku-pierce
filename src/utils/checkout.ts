'use server';

import { cookies } from 'next/headers';

export async function createPaymentSession() {
    try {
        const res = await fetch(
            `${process.env.MEDUSA_BASE_URL}/store/carts/${cookies().get('cart-id')!.value}/payment-sessions`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: `connect.sid=${cookies().get('medusa.sid')?.value}`,
                },
            },
        );
        if (!res.ok) {
            throw Error();
        }
        const { cart } = await res.json();
        console.log(cart.payment_sessions);

        return cart;
    } catch (error) {
        return {
            res: `Account could not be created.`,
        };
    }
}

export async function setPaymentSession() {
    try {
        const res = await fetch(
            `${process.env.MEDUSA_BASE_URL}/store/carts/${cookies().get('cart-id')!.value}/payment-session`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: `connect.sid=${cookies().get('medusa.sid')?.value}`,
                },
                body: JSON.stringify({ provider_id: 'stripe' }),
            },
        );
        if (!res.ok) {
            throw Error();
        }
        const { cart } = await res.json();
        console.log(cart);
        return cart;
    } catch (error) {
        return {
            res: `Account could not be created.`,
        };
    }
}
