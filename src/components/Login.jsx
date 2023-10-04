import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const { logInUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;

        // login user
        logInUser(email, pass)
            .then(res => {
                console.log(res.user);
                event.target.reset();
                navigate("/");
            })
            .catch(err => console.error(err.message));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary normal-case">Login</button>
                        </div>
                        <p>New here? <Link to="/register" className="underline">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;