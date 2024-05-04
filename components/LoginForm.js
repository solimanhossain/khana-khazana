"use client";

import { useContext, useState } from "react";
import { redirect } from "next/navigation";
import { loginUser } from "@/actions/user";
import { AuthContext } from "@/contexts";

export default function LoginForm({ children }) {
    const [errors, setErrors] = useState("");
    const [pending, setPending] = useState(false);
    const { auth, setAuth } = useContext(AuthContext);
    if (auth) redirect("/");
    console.log(auth);

    async function handleUserLogin(event) {
        event.preventDefault();
        setPending(true);
        const formData = new FormData(event.target);
        const user = await loginUser(formData);
        if (!user) {
            setPending(false);
            setErrors("Invalid email or password!");
            return;
        }
        setAuth(user);
        localStorage.setItem("khana-khazana-user", JSON.stringify(user));
        setPending(true);
    }

    return (
        <form className="login-form relative" onSubmit={handleUserLogin}>
            {children}
            <button
                type="submit"
                disabled={pending}
                className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
            >
                {pending ? "Loading..." : "Login"}
            </button>
            <div className="text-red-500 text-center -top-8 right-0 absolute ">
                {errors}
            </div>
        </form>
    );
}
