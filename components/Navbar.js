import Image from "next/image";
import Link from "next/link";
import LogoLWS from "@/public/logo.png";
import NavUserLink from "./NavUserLink";

export default function Navbar() {
    return (
        <nav>
            <div className="container flex justify-between py-6">
                <Link href="/">
                    <Image
                        src={LogoLWS}
                        alt="logo"
                        priority={true}
                        className="object-cover h-[40px] w-auto"
                    />
                </Link>

                <ul className="flex gap-4 text-sm text-gray-500">
                    <li className="py-2 active">
                        <Link href="/">Home</Link>
                    </li>

                    <li className="py-2">
                        <Link href="#">Recipe</Link>
                    </li>

                    <li className="py-2">
                        <Link href="#">About us</Link>
                    </li>

                    <NavUserLink />
                </ul>
            </div>
        </nav>
    );
}
