'use server';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function registerUser(formData: FormData) {
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

export async function loginUser(formData: FormData) {
    try {
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
        });
        if (!res.ok) {
            throw Error();
        }
        const setCookieHeader = res.headers.getSetCookie()[0];
        const cookieArr = setCookieHeader.split(';');
        const cookieValue = cookieArr[0].split('=').pop();
        const cookieExp = cookieArr[2].split('=').pop();
        cookies().set({
            name: 'medusa.sid',
            value: `${cookieValue}`,
            expires: Date.parse(cookieExp!),
            sameSite: 'strict',
            httpOnly: true,
        });
    } catch (error) {
        console.error(`${error}: Couldn't login to account.`);
        return {
            res: "Couldn't login",
        };
    }
    redirect('/account');
}

export async function getCustomer() {
    try {
        const res = await fetch(`${process.env.MEDUSA_BASE_URL}/store/auth`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                Cookie: `connect.sid=${cookies().get('medusa.sid')?.value}`,
            },
        });
        if (!res.ok) {
            throw Error();
        }
        const { customer } = await res.json();
        return customer;
    } catch (error) {
        console.error(`${error}: Couldn't login to account.`);
    }
}

export async function logoutUser() {
    try {
        const res = await fetch(`${process.env.MEDUSA_BASE_URL}/store/auth`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                Cookie: `connect.sid=${cookies().get('medusa.sid')?.value}`,
            },
        });
        if (!res.ok) {
            throw Error();
        }
        cookies().delete('medusa.sid');
    } catch (error) {
        console.error(`${error}: Couldn't create account.`);
    }
    redirect('/account/login');
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
