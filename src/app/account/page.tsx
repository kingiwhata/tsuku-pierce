'use client';
import { useFormState } from 'react-dom';
import { registerUser } from '../../utils/accounts';

export default function Page() {
    const [state, formAction] = useFormState(registerUser, { message: '' });
    return (
        <div className=" h-screen w-full py-24 px-60">
            <div className="flex flex-col bg-gray-500 h-full w-full">
                <form action={formAction}>
                    <label htmlFor="user">Username</label>
                    <input type="text" id="user" name="user" />
                    <label htmlFor="user">Password</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}
