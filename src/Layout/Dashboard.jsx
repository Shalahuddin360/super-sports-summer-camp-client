import { NavLink, Outlet } from "react-router-dom";
import { FaBookReader, FaHome, FaUsers, FaWallet } from 'react-icons/fa';
import useSelect from "../hooks/useSelect";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";



const Dashboard = () => {
    const [selectClass] = useSelect();
    //TODO : load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    // const isInstructor = false;
    const [isInstructor] = useInstructor();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex  flex-col items-center justify-center">

                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>

            <div className="drawer-side  text-black bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full ">
                    {
                        isAdmin ? (
                            <>
                                <p>Admin dashboard</p>
                                <li><NavLink to="/dashboard/home" > <FaHome></FaHome> Admin Home</NavLink></li>
                    
                                <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>  Manage All Users
                                </NavLink>
                                </li>


                                <li><NavLink to="/dashboard/allClasses"><FaBookReader></FaBookReader> Manage Class</NavLink> </li>
                            </>

                        ) : (
                            isInstructor ? (

                                <>
                                    <li>Instructor dashboard</li>
                                    <li><NavLink to="/dashboard/home" > <FaHome></FaHome>  Instructor Home</NavLink></li>
                                    <li><NavLink to="/dashboard/addClass"> <FaBookReader></FaBookReader> Add A Class

                                    </NavLink>
                                    </li>
                                    <li><NavLink to="/dashboard/myClasses"> <FaWallet></FaWallet> My Classes</NavLink> </li>



                                </>) : (

                                <>

                                    <li><NavLink to="/dashboard/home" > <FaHome></FaHome>  Student Home</NavLink></li>
                                    <li><NavLink to="/dashboard/mySelectedClass"> <FaBookReader></FaBookReader> My Selected Class
                                        <span className="badge badge-secondary inline">+{selectClass?.length || 0}</span> </NavLink>
                                    </li>
                                    <li><NavLink to="/dashboard/paymentHistory"> <FaWallet></FaWallet> Payment History</NavLink> </li>

                                    {/* <li><NavLink to="/dashboard/myEnrollClass"> <FaWallet></FaWallet> My Enroll Classes</NavLink> </li> */}

                                </>)


                        )}


                    <div className="divider border-b-2"></div>
                    <li><NavLink to="/" > <FaHome></FaHome> Home </NavLink> </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;