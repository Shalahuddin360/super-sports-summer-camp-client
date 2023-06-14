import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const AllManageClasses = () => {
    const { data: allClasses = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes');
        return res.json()
    })
    console.log(allClasses.status);

    const handleStatusApprove = (allClass) => {
        fetch(`http://localhost:5000/classes/approve/${allClass?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${allClass?.classType} is an approve Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleStatusDeny = (allClass) => {
        fetch(`http://localhost:5000/classes/deny/${allClass?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${allClass?.classType} is an deny Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title> Sport || Manage Classes</title>

            </Helmet>
            <h2 className="text-3xl my-4">All Mange Classes: {allClasses.length}</h2>
            <div className="overflow-x-auto w-full h-[500px] overflow-y-scroll scroll-smooth">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class Picture</th>
                            <th>Instructor Info</th>
                            <th>Available Seats</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allClasses.map((allClass, index) => <tr
                            key={allClass._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={allClass.picture} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold ">{allClass.classType}</div>
                                        <div className="text-sm opacity-50"> <span className="text-yellow-600">${allClass.price}</span> </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {allClass.name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{allClass.email}</span>
                            </td>
                            <td className="text-start">{allClass.availableSeats}</td>
                            <td className="text-start">

                                {
                                    allClass?.status === 'approve' ? ('approve') : (allClass?.status === "deny" ? <>deny</> : <>pending</>)

                                }

                            </td>

                            <td>
                                <button onClick={() => handleStatusApprove(allClass)} className="btn btn-primary btn-xs">Approved</button>
                            </td>
                            <td>
                                <button onClick={() => handleStatusDeny(allClass)} className="btn btn-primary btn-xs">Deny</button>
                            </td>
                            <td>
                                <button className="btn btn-secondary btn-xs">Feedback</button>
                            </td>
                        </tr>)}




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllManageClasses;