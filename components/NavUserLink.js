"use client";
import { AuthContext } from "@/contexts";
import Link from "next/link";
import { useContext, useState } from "react";

export default function NavUserLink() {
    const { auth, setAuth } = useContext(AuthContext);

    return (
        <>
            {auth ? (
                <Link href="/login">
                    <li
                        onClick={() => {
                            setAuth(null);
                            localStorage.removeItem("khana-khazana-user");
                        }}
                        className="py-2 border border-[#eb4a36] text-[#eb4a36] px-4 rounded-md cursor-pointer content-center"
                    >
                        {auth?.firstName} - Logout
                    </li>
                </Link>
            ) : (
                <Link href="/login">
                    <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center cursor-pointer">
                        Login
                    </li>
                </Link>
            )}
        </>
    );
}
