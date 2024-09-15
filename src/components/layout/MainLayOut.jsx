import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayOut = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                   <Navbar></Navbar>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                   <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default MainLayOut;