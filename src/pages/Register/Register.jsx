// import { data } from "autoprefixer";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { register, handleSubmit, formState: { errors },watch} = useForm();
    const {createUser} = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    // console.log(watch("example"));
    return (
        <> 
            <Helmet>
                <title> Sport || Register</title>
                
            </Helmet>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100 mt-24">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue="test" {...register("name", { required: true })} placeholder="Enter Your Name:" className="input input-bordered" name="name" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Photo URL</span>
                                </label>
                                <input type="text" {...register("picture", { required: true })} placeholder="Enter Your Photo URl:" className="input input-bordered" name="picture" />
                                {errors.picture && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email:" className="input input-bordered" name="email" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} name='password' placeholder="Enter Your Password :" className="input input-bordered" />

                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}

                                {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}

                                {errors.password?.type === 'pattern' && <span className="text-red-600" >password must have one uppercase ,  and one special characters  required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("cPassword", {validate:data=>{
                                    if(watch('password')!==data){
                                        return 'Password Does Not Match'
                                    }
                                } })} name='cPassword' placeholder="Enter Your Confirm Password :" className="input input-bordered" />
                                {/* {errors.password && <span className="text-red-600">Confirm  Password is required</span>} */}
                                <p className="text-red-600">{errors.cPassword?.message}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have An Account ? Please <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;