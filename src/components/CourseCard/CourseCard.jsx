import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelect from "../../hooks/useSelect";



const CourseCard = ({course}) => {
    const {picture,name,classType,availableSeats,price,_id} = course;
    const {user} = useContext(AuthContext);
    const [,refetch] = useSelect()
    const navigate = useNavigate();
    const location = useLocation();
   
    
    const handleSelectToClass =(course)=>{
        console.log(course);

        if(user && user?.email){
        const selectClass = {selectClassId : _id,name,picture,price,email:user.email,classType}

            fetch('http://localhost:5000/select',{
                method : 'POST',
                headers :{
                    "content-type" : "application/json"
                },
                body:JSON.stringify(selectClass)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    refetch(); 
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added on  My Selected Classes saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login to select the class?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',{state: {from:location}})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-2xl mx-auto  ">
            <figure><img src={picture} alt="picture" className="h-96 object-cover rounded-lg w-full p-4" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class: {classType}</h2>
                <p className="font-semibold">Instructor Name :{name}</p>
                <p className="font-semibold">Available Seats: {availableSeats}</p>
                <p className="font-semibold">price: <span className="text-yellow-600">${price}</span></p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleSelectToClass(course)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-600 rounded-md text-slate-600">Select Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;