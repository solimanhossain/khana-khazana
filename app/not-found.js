"use client";

import Link from "next/link";

export default function Error() {
    return (
        <main className="grid h-screen px-4 bg-white place-content-center">
            <section className="text-center">
                <h1 className="font-black text-gray-200 text-9xl">404</h1>
                <div>
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Not Found!
                    </p>

                    <p className="mt-4 text-gray-500">
                        Page is not found, Try with correct URL.
                    </p>
                </div>

                <Link
                    href="/"
                    type="button"
                    className="inline-block px-4 py-2 mt-6 text-sm font-medium border underline text-gray-500"
                >
                    ← Go Home
                </Link>
            </section>
        </main>
    );
}
