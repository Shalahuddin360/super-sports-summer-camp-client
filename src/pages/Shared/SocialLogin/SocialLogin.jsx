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
    const saveUser = {name:loggedInUser.displayName,email: loggedInUser.email,picture:loggedInUser.photoURL}
            fetch('http://localhost:5000/users',{
                method : 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
            })
            .then(res=>res.json())
            .then(()=>{
                    navigate(from,{replace:true});
               
            })
           
            
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