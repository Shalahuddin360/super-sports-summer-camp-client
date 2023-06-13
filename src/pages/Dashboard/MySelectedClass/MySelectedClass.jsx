import { Helmet } from "react-helmet-async";
import useSelect from "../../../hooks/useSelect";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MySelectedClass = () => {
    const [selectClass,refetch] = useSelect();
    console.log('set',selectClass)
    const total = selectClass.reduce((sum, course) => course.price + sum, 0)
    const handleDelete = (course) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/select/${course._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full ml-4 mt-0">
            <Helmet>
                <title> Sport || My Selected Class</title>

            </Helmet>
            <div className="uppercase  flex justify-between h-[60px] items-center mt-2">
                <h3 className="text-3xl">Total  Class : {selectClass.length}</h3>
                <h3 className="text-3xl">Total Price :$ {total}</h3>
                <button className="btn btn-warning btn-sm">Pay</button>

            </div>
            <div className="overflow-x-auto w-full h-[500px] overflow-y-scroll scroll-smooth">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Picture</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectClass.map((course, index) => <tr
                                key={course._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{course.name} </td>
                                <td> ${course.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(course)} className="btn btn-ghost btn-md bg-red-800 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td><Link to={`/dashboard/payment/${course.price}`}> <button className="btn btn-primary">PAY</button> </Link> </td>
                            </tr>)

                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;