"use server";

import connectMongo from "@/dbConnect/connectMongo";
import UserModel from "@/models/user-model";
import { redirect } from "next/navigation";

export async function createUser(formData) {
    const userData = Object.fromEntries(formData);
    await connectMongo();
    await UserModel.create(userData);
    return redirect("/login");
}

export async function loginUser(formData) {
    try {
        const userData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        await connectMongo();
        const user = await UserModel.findOne(userData).lean();
        if (!user) return null;
        return JSON.parse(JSON.stringify(user));
    } catch (err) {
        console.log(err);
    }
}

export async function addFavourite(email, password, id) {
    try {
        const userData = {
            email,
            password,
        };

        await connectMongo();
        const user = await UserModel.findOne(userData);
        user.favourites.push(id);
        await user.save();
    } catch (err) {
        console.log(err);
    }
}
