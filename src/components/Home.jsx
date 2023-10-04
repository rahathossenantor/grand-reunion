import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const { user, logOutUser } = useContext(AuthContext);

    // handle logOut user
    const handleLogOut = () => {
        logOutUser()
            .then(() => console.log("User logged out successfully!"))
            .catch(err => console.error(err.message));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <p className="text-2xl font-bold my-5">Hello {user && (user.displayName || user.email)}</p>
                    <button className="btn btn-primary normal-case" onClick={handleLogOut}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Home;