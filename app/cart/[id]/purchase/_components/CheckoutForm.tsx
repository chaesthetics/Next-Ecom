'use client'

import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

type CheckoutFormProps = { 
    item: {},
    clientSecret: string,
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

export function CheckoutForm({ item, clientSecret } : CheckoutFormProps){
    return (
        <div className="py-8 mx-auto w-5/6">
            <Elements options={{ clientSecret }} stripe={stripePromise}>
                <Form />
            </Elements>
        </div>
    )
}

function Form(){
    const stripe = useStripe()
    const elements = useElements()
    return (
        <PaymentElement />
    )
}