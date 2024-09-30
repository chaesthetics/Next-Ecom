import { db } from "@/db";
import { notFound } from "next/navigation";
import Stripe from "stripe";
import { CheckoutForm } from "./_components/CheckoutForm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export default async function Checkout({
    params: { id },
    }:{ 
    params: { id: string },
}){

    const item = await db.item.findUnique({  
        where: {
            id,
        }
    })

    if(item == null){
        return notFound();
    }

    const paymentIntent = await stripe.paymentIntents.create({
        amount: parseInt(item.price!),
        currency: "PHP",
        metadata: { productId: item.id },
    });
    
    if(paymentIntent.client_secret == null){
        throw Error("Stripe failed to create payment intent")
    }

    return(
        <CheckoutForm item={item} clientSecret={paymentIntent.client_secret} />
    )
}