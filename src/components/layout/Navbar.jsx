import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
    const {user, logOut} = useAuth()
    console.log(user)
    return (
        <div className="w-10/12 mx-auto">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </div>
            <div className="mx-2 flex-1 px-2">Navbar Title</div>
            <div className="hidden flex-none lg:block">
                <div className="flex gap-3 ">
                    {/* Navbar menu content here */}
                    <NavLink to="/" className={({ isActive }) => isActive ? "btn btn-success btn-sm" : "btn btn-ghost btn-sm"} >Home</NavLink>
                    <NavLink to="contact" className={({ isActive }) => isActive ? "btn btn-success btn-sm" : "btn btn-ghost btn-sm"} >Contact</NavLink>
                    <NavLink to="about" className={({ isActive }) => isActive ? "btn btn-success btn-sm" : "btn btn-ghost btn-sm"} >About</NavLink>
                    <NavLink to="register" className={({ isActive }) => isActive ? "btn btn-success btn-sm" : "btn btn-ghost btn-sm"} >Register</NavLink>
                   {
                    user?.email ? <button onClick={logOut} className="btn btn-ghost btn-sm">LogOut</button> :
                    <NavLink to="login" className={({ isActive }) => isActive ? "btn btn-success btn-sm" : "btn btn-ghost btn-sm"} >Login</NavLink>
                   }
                   

                </div>
            </div>
        </div>
    );
};

export default Navbar;