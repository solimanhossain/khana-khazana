"use server";

import connectMongo from "@/dbConnect/connectMongo";
import UserModel from "@/models/user-model";
import { redirect } from "next/navigation";

export async function addUser(formData) {
    const userData = Object.fromEntries(formData);
    await connectMongo();
    await UserModel.create(userData);
    return redirect("/login");
}

export async function loginUser(formData) {
    try {
        const userData = {};
        userData.email = formData.get("email");
        userData.password = formData.get("password");
        await connectMongo();
        const user = await UserModel.findOne(userData).lean();
        if (user) {
            return JSON.stringify(user);
        } else {
            return "User not found";
        }
    } catch (err) {
        console.log(err);
    }
}
