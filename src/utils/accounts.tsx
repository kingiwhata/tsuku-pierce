'use server';
export async function registerUser(state: any, formData: FormData) {
    console.log(state, formData.get('user'), formData.get('password'));
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
                    email: 'nkwblak@gmail.com',
                    password: '123',
                    first_name: 'nev',
                    last_name: 'bob',
                }),
                //                body: JSON.stringify({
                //                    email: formData.get('user'),
                //                    password: formData.get('password'),
                //                    first_name: 'nev',
                //                    last_name: 'bob',
                //                }),
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
