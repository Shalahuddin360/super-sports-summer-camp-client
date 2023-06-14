import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import loginImage from "../../assets/banner/login.png"


const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const locatoin = useLocation();
    const navigate = useNavigate();
    const from = locatoin.state?.from?.pathname || "/"
    // onsubmit or handleLogin
    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'user Login Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <>
            <Helmet>
                <title> Sport || Login</title>

            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">

                        <img src={loginImage} alt="" />
                    </div>

                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <p className="lg:text-2xl font-bold">Please Login!</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Enter Your Email:" className="input input-bordered" name="email" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"} {...register("password", { required: true })} name='password' placeholder="Enter Your Password :" className="input input-bordered" required />
                                <p className='text-right cursor-pointer' onClick={() => setShow(!show)}><small>
                                    {
                                        show ? <span>Hide Password</span> : <span> Show Password</span>
                                    }
                                </small></p>

                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New To Visit Super Sport ? Please <Link className='text-orange-600 font-bold' to="/register">Register</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;