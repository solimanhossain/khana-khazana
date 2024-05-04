import { createUser } from "@/actions/user";
import RegisterButton from "./FormButton";

export default function RegisterForm() {
    return (
        <form className="login-form" action={createUser}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" required />
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" required />
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" required />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
            </div>

            <RegisterButton>Create Account</RegisterButton>
        </form>
    );
}
