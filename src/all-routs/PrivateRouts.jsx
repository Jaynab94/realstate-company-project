import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouts = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('location', location)

    if (loading) {
        return <span className="loading loading-bars loading-lg ml-[50%]"></span>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRouts;