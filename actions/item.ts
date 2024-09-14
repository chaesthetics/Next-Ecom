'use server'


export const createItem = async(formdata: FormData) => {
    const image = formdata.get("image");
    const name = formdata.get("name") as string;
    const category = formdata.get("category") as string;
    const description = formdata.get("description") as string;
    const price = formdata.get("price");
    const quantity = formdata.get("quantity");


    const rawData = {
        image: ,
        name: name,
        category: category,
        description: description,
        price: price,
        quantity: quantity,
    };

    console.log(rawData);
}


