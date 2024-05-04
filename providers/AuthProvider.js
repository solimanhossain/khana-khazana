"use client";

import { AuthContext } from "@/contexts";
import { useEffect, useState } from "react";

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        setAuth(JSON.parse(localStorage.getItem("khana-khazana-user")));

        return () => {};
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}
