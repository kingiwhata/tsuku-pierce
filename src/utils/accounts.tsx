'use server';

import { permanentRedirect, redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function registerUser(formData: FormData) {
    console.log(formData);
    try {
        const res = await fetch(
            `${process.env.MEDUSA_BASE_URL}/store/register`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                    first_name: formData.get('first-name'),
                    last_name: formData.get('last-name'),
                }),
            },
        );
        if (res.ok) {
            const { customer } = await res.json();
            return customer;
        }
    } catch (error) {
        console.error(`${error}: Couldn't create account.`);
    }
}

export async function loginUser() {
    try {
        const res = await fetch(`${process.env.MEDUSA_BASE_URL}/store/auth`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'nkwblak@gmail.com',
                password: 'test123',
            }),
        });

        if (res.ok) {
            const { customer } = await res.json();
            return customer;
        }
    } catch (error) {
        console.error(`${error}: Couldn't create account.`);
    }
}

export async function logoutUser() {
    try {
        const res = await fetch(`${process.env.MEDUSA_BASE_URL}/store/auth`, {
            method: 'DELETE',
            credentials: 'include',
        });

        if (res.ok) {
            const { customer } = await res.json();
            return customer;
        }
    } catch (error) {
        console.error(`${error}: Couldn't create account.`);
    }
}

export async function checkEmail(email: string) {
    try {
        const res = await fetch(
            `${process.env.MEDUSA_BASE_URL}/store/auth/${email}`,
            {
                credentials: 'include',
            },
        );
        if (res.ok) {
            const { exists } = await res.json();
            return exists;
        }
    } catch (error) {
        console.error(`${error}: Email already registered.`);
    }
}

export async function sendEmailToken(authToken: string) {
    console.log(authToken);
    try {
        const res = await fetch(`${process.env.MEDUSA_BASE_URL}/store/verify`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                auth: authToken,
            }),
        });
        if (res.ok) {
            console.log('WOOOOOOOOOOOOOOOOOOOORK BEEEEEEEEEETCH');
            return NextResponse.redirect('/account');
        }
    } catch (error) {}
}
