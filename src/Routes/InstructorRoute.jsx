import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import useInstructor from "../hooks/useInstructor";



const InstructorRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isInstructor , isInstructorLoading] = useInstructor()
    const location = useLocation();
    if(loading || isInstructorLoading){
        return <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    }
    if(user && isInstructor) {
        return children;
    }
 
    return <Navigate to="/login" state={{from:location}} replace ></Navigate>
};

export default InstructorRoute;