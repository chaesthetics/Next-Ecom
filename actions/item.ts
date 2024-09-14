'use server'

import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";



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

export const createItem = async(formdata: FormData, base64: string) => {
    const image = formdata.get("image");
    const name = formdata.get("name") as string;
    const category = formdata.get("category") as string;
    const description = formdata.get("description") as string;
    const price = formdata.get("price") as string;
    const quantity = formdata.get("quantity") as string;

    const userId =  await getUserId();
    console.log(userId);

    await db.item.create({
        data: {
            ownerId: userId,
            name: name,
            description: description,
            image: base64,
            category: category,
            price: price,
            quantity: quantity,
        }
    })

    redirect('/admin/products');
}

export const getAllItemOfOwner = async() => {
    const userId = await getUserId();
    const allItemOfOwner = await db.item.findMany({
        where: {
            ownerId: userId,
        },
        select: {
            image: true,
            name: true,
            category: true,
            quantity: true,
            price: true,
            updatedAt: true
        },
        orderBy:[
            {
                updatedAt: 'desc',
            },
        ]
    });

    return allItemOfOwner;
}
