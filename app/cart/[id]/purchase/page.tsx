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
    const item = await db.cart.findUnique({  
        where: {
            id,
        },
        select: {
            id: true,
            quantity: true,
            items: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                    description: true,
                    price: true,
                    quantity: true,
                    owner: {
                        select: {
                            name: true,
                        }
                    }
                },
            },
        }
    })

    if(item == null){
        return notFound();
    }

    const paymentIntent = await stripe.paymentIntents.create({
        amount: (parseInt(item?.items?.price!)*item?.quantity)*100,
        currency: "USD",
        metadata: { productId: item?.items?.id!, },
    });
    
    if(paymentIntent.client_secret == null){
        throw Error("Stripe failed to create payment intent")
    }

    return(
        <CheckoutForm item={item} clientSecret={paymentIntent.client_secret} />
    )
}