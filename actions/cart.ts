'use server' 

import { db } from "@/db"
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

const getUserId = async() => {
    const session = await auth();
    const sessionEmail = session?.user?.email;

    const email = sessionEmail as string;
    let user: any = await db.user.findUnique({
        where: {
            email,
        },
        select:{
            id: true
        }
    });         

    return user?.id;
}

export const addToCart = async(rawItemId: any, formData: FormData) =>{
    const ownerId = await getUserId();
    const itemId = rawItemId as string;
    const quantity = formData.get('quantity') as string;

    const addedToCart = await db.cart.create({
        data: {
            ownerId: ownerId,
            itemId: itemId,
            quantity: quantity,      
        }
    });

    revalidatePath(`/${itemId}`);
}

export const getCartItems = async() => {
    const userId = await getUserId();
    const cartItems = await db.cart.findMany({
        where: {
            ownerId: userId,
        },
        orderBy: [{
            updatedAt: "desc",
        }],
        include:{
            items: {
                select: {
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

    return cartItems;
}
