import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export function generateMetadata() {
    return {
        title: "Khana khazana | Login",
    };
}

export default function LoginPage() {
    return (
        <main>
            <section className="h-screen grid place-items-center">
                <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                    <h4 className="font-bold text-2xl">Sign in</h4>

                    <LoginForm>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                            />
                        </div>
                    </LoginForm>

                    <p className="text-center text-xs text-gray-600">Or</p>

                    <Link
                        href="/register"
                        className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
                    >
                        Create New Account
                    </Link>
                </div>
            </section>
        </main>
    );
}
