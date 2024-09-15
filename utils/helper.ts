import bycrypt from "bcryptjs";

export function saltAndHashPassword(password: any){
    const saltRounds = 10 // Adjust the cost factor according to your security requirement
    const salt = bycrypt.genSaltSync(saltRounds); // Synchronously generate a salt
    const hash = bycrypt.hashSync(password, salt); // Synchornously hash the password

    return hash; // return the hash directly as a string
}
