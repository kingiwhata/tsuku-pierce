'use server';

import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function registerUser(prevState: any, formData: FormData) {
    try {
        const res = await fetch(
            `${process.env.MEDUSA_BASE_URL}/store/customers`,
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
        if (!res.ok) {
            throw Error();
        }
    } catch (error) {
        return {
            res: 'Account could not be created.',
        };
    }
    redirect('/account/login');
}

export async function loginUser(prevState: any, formData: FormData) {
    try {
        console.log(formData);
        const res = await fetch(`${process.env.MEDUSA_BASE_URL}/store/auth`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
            }),
            cache: 'no-cache',
        });

        if (!res.ok) {
            throw Error();
        }
        console.log(await res.json());
    } catch (error) {
        console.error(`${error}: Couldn't login to account.`);
        return {
            res: "Couldn't login",
        };
    }
}

export async function logoutUser() {
    try {
        const res = await fetch(`${process.env.MEDUSA_BASE_URL}/store/auth`, {
            method: 'DELETE',
            credentials: 'include',
        });

        if (!res.ok) {
            throw Error();
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
            return NextResponse.redirect('/account');
        }
    } catch (error) {}
}

export async function navigateAccount() {
    redirect('/account');
}
