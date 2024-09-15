import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Registers from "../pages/Registers";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <PrivateRoute> <Contact></Contact></PrivateRoute>
            }
        ]

    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Registers></Registers>
    }
]);
