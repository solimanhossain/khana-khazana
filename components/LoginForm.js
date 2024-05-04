import FormButton from "./FormButton";
import { loginUser } from "@/actions/user";

export default function LoginForm() {
    return (
        <form className="login-form" action={loginUser}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" required />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
            </div>

            <FormButton>Login</FormButton>
        </form>
    );
}
