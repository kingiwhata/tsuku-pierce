'use client';
import { useFormState } from 'react-dom';
import { registerUser } from '../../utils/accounts';

export default function Page() {
    return (
        <div className=" h-screen w-full py-24 px-60">
            <div className="flex flex-col bg-gray-500 h-full w-full">
                <form className="flex flex-col p-8" action={registerUser}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                    <label htmlFor="user">Password</label>
                    <input type="password" id="password" name="password" />
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" />
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}
