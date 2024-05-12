'use client';
import { useFormState } from 'react-dom';
import { loginUser } from '../../../utils/accounts';

export default function Page() {
    const [state, formAction] = useFormState(loginUser, { res: '' });
    return (
        <div className=" h-screen w-full py-24 px-60">
            <div className="flex flex-col bg-gray-500 h-full w-full">
                <form className="flex flex-col p-8" action={formAction}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        required
                        defaultValue="nkwblak@gmail.com"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        defaultValue="12345"
                    />
                    <p>{state?.res}</p>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
