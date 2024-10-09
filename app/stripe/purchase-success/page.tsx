import TryAgain from "@/components/TryAgain";
import { db } from "@/db";
import { useStripe } from "@stripe/react-stripe-js";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)


export default async function SuccessPage({
    searchParams 
}: { searchParams: { payment_intent: string }
}){
    
    const paymentIntent = await stripe.paymentIntents.retrieve(searchParams.payment_intent)
    if(paymentIntent.metadata.productId == null ) return notFound()
    
    const item = await db.item.findUnique({
        where: {
            id: paymentIntent.metadata.productId,
        },
    })

    const isSuccess = paymentIntent.status = "succeeded"

    

    return (
        <div className="py-12 max-w-5xl mx-auto w-full px-4 space-y-12">
            {
                isSuccess ? 
                <div className="flex flex-col items-center w-full justify-center space-y-4">
                    <img src="https://cdn.pixabay.com/photo/2022/07/04/01/58/hook-7300191_640.png" alt="success"
                        className="md:h-48 md:w-48 h-32 w-32"
                    />
                    <span className="text-2xl md:text-4xl font-semibold">Your payment was successful!</span>
                    <span>Horray!! You have completed your payment</span>
                </div>
                :
                <TryAgain />
            }
            
            <div className={`flex space-x-4 text-white items-center rounded-lg bg-gradient-to-r from-black ` +  ((isSuccess) ? 'to-green-300' : 'to-red-300') }>
                <Image src={item?.image} alt="product" width={160} height={160} className="shadow-md rounded-sm"/>
                <div className="flex flex-col">
                    <span className="font-semibold">{`Total: $${paymentIntent.amount/100}.00`}</span>
                    <span className="font-bold text-lg">{item?.name}</span>
                    <span className="text-xs font-light">{item?.description}</span>
                </div>
            </div>
        </div>
    )
}