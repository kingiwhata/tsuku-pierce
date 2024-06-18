'use client';
import {
    AddressElement,
    PaymentElement,
    PaymentRequestButtonElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js';
import { completeCart, updateCart } from '../../../utils/cart';

export default function PaymentForm({ clientSecret, cartId }) {
    const stripe = useStripe();
    const elements = useElements();

    async function handlePayment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!stripe) return;

        const { error: submitError } = await elements!.submit();
        if (submitError) return;

        console.log('SENMD EDSCDAS');
        let addy = elements?.getElement('address');
        const x = await addy!.getValue();
        if (x.complete) {
            await updateCart(x.value);
            console.log(x.value);
        }
        await completeCart();
        const res = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
        });

        if (!res) return;
        await completeCart();
    }

    return (
        <form onSubmit={handlePayment}>
            <PaymentElement />
            <AddressElement options={{ mode: 'shipping' }} />
            <button type="submit" disabled={!stripe}>
                Submit Payment
            </button>
        </form>
    );
}
