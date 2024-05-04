'use client';
import { useMeCustomer } from 'medusa-react';
import React from 'react';
import { logoutUser } from '../../utils/accounts';

export default function Page() {
    const { customer, isLoading } = useMeCustomer();
    return (
        <div className="text-black border-black border-2 h-screen">
            <div className="py-24 px-62 h-72">
                {customer?.first_name} {customer?.last_name}
            </div>
            <div>{customer?.email}</div>
            <div>
                <button onClick={() => logoutUser()}>Log Out</button>
            </div>
        </div>
    );
}
