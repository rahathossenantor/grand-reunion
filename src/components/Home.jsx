import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const data = useContext(AuthContext);
    console.log(data);
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;