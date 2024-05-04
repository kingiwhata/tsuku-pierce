import { getCustomer, logoutUser } from '../../utils/accounts';
import React from 'react';

export default async function Page() {
    const customer = await getCustomer();
    console.log();
    return (
        <div className="text-black border-black border-2 h-screen">
            <div className="py-24 px-62 h-72">
                {customer?.first_name} {customer?.last_name}
            </div>
            <div>{customer?.email}</div>
            <form action={logoutUser}>
                <button type="submit">Log Out</button>
            </form>
        </div>
    );
}
