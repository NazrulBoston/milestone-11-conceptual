import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="flex flex-col gap-3 ">
                        <NavLink to="register" className={({ isActive }) => isActive ? "btn btn-success " : "btn btn-ghost "} >Register</NavLink>
                        <NavLink to="login" className={({ isActive }) => isActive ? "btn btn-success " : "btn btn-ghost "} >Login</NavLink>
                        <NavLink to="contact" className={({ isActive }) => isActive ? "btn btn-success " : "btn btn-ghost "} >Contact</NavLink>
                        <NavLink to="about" className={({ isActive }) => isActive ? "btn btn-success " : "btn btn-ghost "} >About</NavLink>

                    </div>
    );
};

export default Sidebar;