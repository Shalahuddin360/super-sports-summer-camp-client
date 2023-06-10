import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const locatoin = useLocation();
    const navigate = useNavigate();

    const from = locatoin.state?.from?.pathname || "/";
    
    const  handleGooleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from,{replace:true});
        })
        .catch(error=>{
          console.log(error);
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGooleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;