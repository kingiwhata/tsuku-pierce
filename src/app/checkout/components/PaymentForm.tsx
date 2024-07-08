'use client';
import {
    AddressElement,
    PaymentElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js';
import { completeCart, updateCart } from '../../../utils/cart';

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    async function handlePayment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!stripe) return;

        const { error: submitError } = await elements!.submit();
        if (submitError) return;

        let addressElement = elements?.getElement('address');
        const address = await addressElement!.getValue();
        if (address.complete) {
            await updateCart(address.value);
        }
        if (!elements) return;
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
