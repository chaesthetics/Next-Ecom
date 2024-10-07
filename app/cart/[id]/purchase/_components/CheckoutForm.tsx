'use client'

import { userOrderExists } from "@/actions/cart";
import { Elements, LinkAuthenticationElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Image from "next/image";
import { FormEvent, useState } from "react";

type CheckoutFormProps = { 
    item: {
        price: string,
        name: string,
        description: string,
        image: string,
    },
    clientSecret: string,
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

export function CheckoutForm({ item, clientSecret } : CheckoutFormProps){
    const { items }: any = item; 
    const orderId = item?.id;
    const { quantity }: any = item;

    return (
        <div className="py-8 max-w-5xl mx-auto w-full px-4 space-y-4">
            <div className="flex space-x-4 w-full text-white items-center bg-gradient-to-r from-black to-yellow-200 rounded-lg">
                <Image src={items?.image} alt="product" width={160} height={160} className="shadow-md rounded-sm"/>
                <div className="flex flex-col">
                    <span className="font-semibold">{`$ ${items.price}.00 x ${quantity}`}</span>
                    <span className="font-bold text-lg">{items.name}</span>
                    <span className="text-xs font-light">{items.description}</span>
                </div>
            </div>
            <Elements options={{ clientSecret }} stripe={stripePromise}>
                <Form price={(items?.price * quantity)*100}  itemId={orderId}/>
            </Elements>
        </div>
    )
}

function Form({ price, itemId }: { price: number, itemId: string }){
    const stripe = useStripe()
    const elements = useElements()

    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [email, setEmail] = useState<string>()

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();

        if(stripe==null || elements == null || email == null) return

        setIsLoading(true);

        // Check for existing order
        const orderExist = await userOrderExists(email, itemId);

        if(orderExist){
            setErrorMessage("You have already purchased this product. Try downloading it from the My Orders page")
            setIsLoading(false);
            return
        }

        stripe.confirmPayment({ elements, confirmParams: {
                return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-success`,
            },
        }).then(({error}) => {
            if(error.type === "card_error" || error.type === "validation_error"){
                setErrorMessage(error.message!);
            }else{
                setErrorMessage("An unknown error occured");
            }
        }).finally(()=> setIsLoading(false));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-6 space-y-6 border-[1px] rounded-lg">
                <span className="text-xl font-bold">Checkout</span>
                {errorMessage &&
                    <span className="text-sm text-red-500">{errorMessage}</span>
                }
                <PaymentElement />
                <LinkAuthenticationElement onChange={(e)=>setEmail(e.value.email)}/>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
                    <input type="text" name="addressLine1" id="addressLine1" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
                    <input type="text" name="addressLine2" id="addressLine2" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <input type="text" name="city" id="city" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
                    <input type="text" name="postalCode" id="postalCode" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>

                <button className={`bg-black text-white rounded-lg text-sm py-3 flex items-center font-semibold text-center justify-center `+ `${isLoading ? 'opacity-50': ''}`}
                    disabled={stripe == null || elements == null || isLoading}
                    type="submit"
                >
                    { isLoading ? "Purchasing..." : `Purchase - $${price/100}.00 `}
                </button>
            </div>
        </form>
    )
}