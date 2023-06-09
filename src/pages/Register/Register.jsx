import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    // console.log(watch("example"));
    return (
        <div>
              <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100 mt-24">
                        <form  onSubmit={handleSubmit(onSubmit)}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input  type="text" defaultValue="test" {...register("name",{ required: true })} placeholder="Enter Your Name:" className="input input-bordered" name="name"  />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Photo URL</span>
                                </label>
                                <input type="text" {...register("picture",{ required: true })}  placeholder="Enter Your Photo URl:" className="input input-bordered" name="picture" />
                                {errors.picture && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email",{ required: true })}  placeholder="Enter Your Email:" className="input input-bordered" name="email" required />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",{ required: true })}  name='password' placeholder="Enter Your Password :" className="input input-bordered" required />
                                {errors.password && <span className="text-red-600">Password is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("password",{ required: true })} name='password' placeholder="Enter Your Confirm Password :" className="input input-bordered" required />
                                {errors.password && <span className="text-red-600">Confirm  Password is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have An Account ? Please <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;