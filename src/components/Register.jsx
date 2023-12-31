import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { registerUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.password.value;
        // const terms = event.target.terms.checked;
        
        // create new user account
        registerUser(email, pass)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name
                });
                event.target.reset();
                navigate("/");
            })
            .catch(err => console.error(err.message));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <label className="label cursor-pointer">
                            Accept terms of use
                            <input type="checkbox" name="terms" className="toggle" />
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary normal-case">Register</button>
                        </div>
                        <p>Already have an acount? <Link to="/login" className="underline">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;