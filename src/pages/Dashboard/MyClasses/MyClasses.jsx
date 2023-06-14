import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";


const MyClasses = () => {
    const { user } = useContext(AuthContext)
    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes');
        return res.json()
    })
    console.log('classes', classes);
    //  const football = classes.filter(course=>course.classType === "Football");
    const instructorAddClass = classes.filter(addClass => addClass.email === user.email)
    return (
        <div className="w-full ml-5">
            <Helmet>
                <title> Sport || My Classes</title>

            </Helmet>
            <h2 className="text-3xl mb-4">Total My Classes:{instructorAddClass.length}</h2>
            <div className="overflow-x-auto w-full h-[500px] overflow-y-scroll scroll-smooth">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                             #
                            </th>
                            <th>Picture</th>
                            <th>Class Name</th>
                            <th>Status</th>
                            <th>Update Class</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorAddClass.map((classAdd,index)=> <tr
                             key={classAdd._id}
                            >
                                <td>{index+1}</td>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classAdd.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                  
                                    </div>
                                </td>
                                <td>{classAdd.classType} </td>
                                <td>{classAdd.status} </td>
                                <td>
                                    <button className="btn btn-primary">update</button>
                               </td>
                                <td>
                                    <input type="text" name="" id="" />
                                </td>
                            </tr>)
                        }
                    
               
                
               
                    </tbody>
            

                </table>
            </div>
        </div>
    );
};

export default MyClasses;