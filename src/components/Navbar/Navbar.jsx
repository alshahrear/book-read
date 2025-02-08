import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-5 max-w-[1250px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink>Home</NavLink>
                            <NavLink>Listed Books</NavLink>
                            <NavLink>Pages to Read</NavLink>
                        </ul>
                    </div>
                    <a className="text-3xl font-extrabold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center text-xl font-medium space-x-8">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-[#23BE0A] border border-[#23BE0A] p-3 font-bold rounded-xl" : "text-black"}>Home</NavLink>
                        <NavLink to="/listed-books" className={({ isActive }) => isActive ? "text-[#23BE0A] border border-[#23BE0A] p-3 font-bold rounded-xl" : "text-black"}>Listed Books</NavLink>
                        <NavLink to="/pages-to-read" className={({ isActive }) => isActive ? "text-[#23BE0A] border border-[#23BE0A] p-3 font-bold rounded-xl" : "text-black"}>Pages to Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end  space-x-4">
                    <a className="  text-lg pl-5 pr-5 pt-3 pb-3 text-white rounded-lg bg-[#23BE0A]">Sign In</a>
                    <a className=" text-lg pt-3 pb-3 pl-5 pr-5 text-white rounded-lg bg-[#59C6D2]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;