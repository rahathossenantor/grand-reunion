import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user } = useContext(AuthContext);

    const links = <>
        <NavLink to="/"><li className="hover:bg-transparent hover:text-[#FF444A] px-2">Home</li></NavLink>
        {user && <NavLink to="/profile"><li className="hover:bg-transparent hover:text-[#FF444A] px-2">Profile</li></NavLink>}
        <NavLink to="/cart"><li className="hover:bg-transparent hover:text-[#FF444A] px-2">Cart</li></NavLink>
        {user ? "" : <NavLink to="/login"><li className="hover:bg-transparent hover:text-[#FF444A] px-2">Login</li></NavLink>}
        {user ? "" : <NavLink to="/register"><li className="hover:bg-transparent hover:text-[#FF444A] px-2">Register</li></NavLink>}
    </>

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="navbar bg-base-100 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden navbar-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="text-3xl font-semibold cursor-pointer">Grand Reunion</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;