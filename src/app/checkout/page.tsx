'use client';
import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './components/PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { createPaymentSession, setPaymentSession } from '../../utils/checkout';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '');

export default function Page() {
    const [clientSecret, setClientSecret] = useState();
    const getSession = async () => {
        const cart = await createPaymentSession();
        const isStripe = cart.payment_sessions?.some(
            (session: any) => session.provider_id === 'stripe',
        );
        if (!isStripe) return;

        const setSesh = await setPaymentSession();
        if (!setSesh) return;
        setClientSecret(setSesh.payment_session.data.client_secret);
    };
    useEffect(() => {
        getSession();
    }, []);

    return (
        <section className="flex w-screen ">
            <div className="py-24 px-60 w-full ">
                {clientSecret && (
                    <Elements
                        stripe={stripePromise}
                        options={{
                            clientSecret,
                        }}
                    >
                        <PaymentForm clientSecret={clientSecret} cartId={''} />
                    </Elements>
                )}
            </div>
        </section>
    );
}
