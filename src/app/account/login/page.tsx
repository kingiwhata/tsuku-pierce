'use client';
import { useMedusa } from 'medusa-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
    const router = useRouter();
    const [loginData, setLoginData] = useState({
        email: 'nkwblak@gmail.com',
        password: '12345',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };
    const { client } = useMedusa();
    const onSub = (e: React.FormEvent) => {
        const email = loginData.email;
        const password = loginData.password;
        e.preventDefault();
        client.auth
            .authenticate({
                email,
                password,
            })
            .then(() => {
                router.push('/account');
            });
    };
    return (
        <div className=" h-screen w-full py-24 px-60">
            <div className="flex flex-col bg-gray-500 h-full w-full">
                <form className="flex flex-col p-8" onSubmit={onSub}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={loginData.email}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        required
                        value={loginData.password}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
