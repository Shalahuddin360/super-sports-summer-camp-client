import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
// const img_hosting_token=import.meta.env.VITE_Image_Upload_token;
const AddClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } , reset } = useForm();
    // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  
    const onSubmit = data => {
    //     const formData = new FormData();
    //     formData.append('picture', data.picture[0]);
    //     // console.log('formData',formData)
    //     fetch(img_hosting_url,{
    //         method :'POST',
    //         body:formData
    //     })
    //    .then(res=>res.json())
    //    .then(picResponse=>{
    //     console.log('picResponse',picResponse);
    //     if(picResponse.success){
    //         const imgURL =picResponse.data.display_url
    //         const {name,email,price,classType,availableSeats} = data;
    //         const newClass = {name,email,price,classType,availableSeats,picture:imgURL}
    //         console.log(newClass)
    //     }
    //    })
       
        console.log(data)
        const {classType,picture,name,email,availableSeats,price} = data;
        const newClass = {classType,picture,name,email,price:parseFloat(price),availableSeats:parseFloat(availableSeats)}
        console.log(newClass);
        axiosSecure.post('/classes',newClass)
        .then(res=>{
            console.log('after posting new class ',res.data);
            if(res.data.insertedId){
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'New Class added successfully ',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    // console.log(img_hosting_token);
    // console.log(errors);
    return (
        <div className="w-full px-9 my-4">
            <Helmet>
                <title> Sport ||Add A Class</title>
                
            </Helmet>
            <SectionTitle subHeading={"What's New"} heading={"Add A Class"}> </SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-control w-full mb-4 ">
                    <label className="label">
                        <span className="label-text">Class Name</span>

                    </label>
                    <select defaultValue="Football" className="select select-bordered" {...register("classType", {required: true})}>
                        <option disabled>Class Name</option>
                        <option>Football</option>
                        <option>Basketball</option>
                        <option>Cricket</option>
                        <option>Badminton</option>
                        <option>Hockey</option>
                        <option>athletics</option>
                    </select>

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Class Image</span>

                    </label>
                    {/* <input type="file" {...register("picture", { required: true })}  className="file-input file-input-bordered w-full " /> */}
                    <input type="text" {...register("picture", { required: true })} placeholder="Enter Your Photo URl:" className="input input-bordered" name="picture" />
                    {errors.picture && <span className="text-red-600">Class image is required</span>}
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label font-semibold">
                            <span className="label-text">Instructor Name:*</span>

                        </label>
                        <input type="text" {...register("name", {required: true})} placeholder="Enter Your Instructor Name :" value={user?.displayName}  className="input input-bordered w-full " />

                    </div>
                    <div className="form-control w-full ml-4 ">
                        <label className="label font-semibold">
                            <span className="label-text">Instructor Email:*</span>

                        </label>
                        <input type="email"  {...register("email", { required: true })} placeholder="Enter Your Instructor Email :" value={user?.email} className="input input-bordered w-full " />

                    </div>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label font-semibold">
                        <span className="label-text">Available Seats:*</span>

                    </label>
                    <input type="number" {...register("availableSeats", { required: true })} placeholder="Enter Your Available Seats :" className="input input-bordered w-full " />
                    {errors.availableSeats && <span className="text-red-600">AvailableSeats is required</span>}
                </div>
                <div className="form-control w-full ">
                    <label className="label font-semibold">
                        <span className="label-text">Price:*</span>

                    </label>
                    <input type="number" {...register("price", { required: true })}  placeholder="Enter Your Price :" className="input input-bordered w-full " />
                    {errors.price && <span className="text-red-600">Price is required</span>}
                </div>
                  <input className="btn btn-primary btn-sm mt-4" type="submit" value="Add Class" />

            </form>
        </div>
    );
};

export default AddClass;