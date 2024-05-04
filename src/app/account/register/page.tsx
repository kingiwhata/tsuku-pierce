'use client';
import { useFormState } from 'react-dom';
import { registerUser } from '../../../utils/accounts';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const [state, formAction] = useFormState(registerUser, { res: '' });
    return (
        <div className=" h-screen w-full py-24 px-60">
            <div className="flex flex-col bg-gray-500 h-full w-full">
                <form className="flex flex-col p-8" action={formAction}>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        required
                        defaultValue="Nevada"
                    />
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        required
                        defaultValue="Kingi-Whata"
                    />
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
                    <button type="submit">Register</button>
                </form>
                <div className="flex flex-col">
                    Already have an account?
                    <button onClick={() => router.push(`/account/login`)}>
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
}
