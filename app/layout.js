import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";

export const metadata = {
    title: "Khana Khazana",
    description: "Assignment 8 - Khana Khazana (LWS)",
};

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} font-sans`}>
                <AuthProvider>
                    <Navbar />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
