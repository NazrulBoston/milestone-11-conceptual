import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if(loading){
        return <div className="progress-w-full"></div>
    }
    if (user) {

        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;