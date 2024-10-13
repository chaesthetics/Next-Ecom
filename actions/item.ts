'use server'

import { db } from "@/db";
import { redirect } from "next/navigation";
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

    if(image == '' || name == '' || category == '' || description == '' || price == '' || quantity == '' ){
        return "Please fill up all fields";
    }

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

export const getNewItems = async() => {
    const newProducts = await db.item.findMany({
        select:{
            id: true,
            name: true,
            image: true,
            description: true,
            category: true,
            price: true,
        },
        orderBy: [{
            updatedAt: 'desc'
        }],
        take: 4,
    });

    return newProducts;
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

export const getItem = async(id: any) => {
    const item = await db.item.findUnique({
        where: {
            id : id,
        },
        include:{
            owner: true,
        }
    });

    return item;
}