import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {

        const res = await fetch('http://localhost:5000/users');
        return res.json();
    })
    const handleMakeAdmin = user => {
      
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
               
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instructor Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title> Sport || All Users</title>

            </Helmet>
            {
                <h2 className="text-3xl font-semibold my-4"> Total Users : {users?.length}</h2>
            }
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>role</th>
                            <th>Action</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >

                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>

                                    {
                                        user.role === 'admin' ? ('admin') : (user.role === "instructor" ? <>instructor</> : <>student</>)

                                    }
                                </td>
                                <td>

                                    <button onClick={() => handleMakeAdmin(user)} disabled ={user.role === 'admin'} className="btn btn-ghost btn-md bg-green-500 text-white">Make Admin</button></td>
                                <td>  <button onClick={() => handleMakeInstructor(user)} disabled ={user.role === 'instructor'} className="btn btn-ghost btn-md bg-green-500 text-white">Make Instructor</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;