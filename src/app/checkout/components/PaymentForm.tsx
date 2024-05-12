'use client';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

export default function PaymentForm({ clientSecret, cartId }) {
    const stripe = useStripe();
    const elements = useElements();

    async function handlePayment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(clientSecret);
        const res = await stripe?.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements?.getElement(CardElement)!,
            },
        });
        console.log(res);
    }

    return (
        <form onSubmit={handlePayment}>
            <CardElement />
            <button type="submit"> Submit</button>
        </form>
    );
}
