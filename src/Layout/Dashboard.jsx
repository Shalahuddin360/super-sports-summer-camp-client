import { NavLink, Outlet } from "react-router-dom";
import { FaBookReader, FaHome,  FaUsers, FaWallet } from 'react-icons/fa';
import useSelect from "../hooks/useSelect";

const Dashboard = () => {
    const [selectClass] = useSelect();
    //TODO : load data from the server to have dynamic isAdmin based on data
    const isAdmin = true;
    const isInstructor = false;
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
                                {/* <li><NavLink to="/dashboard/mySelectedClass"><FaUserAlt></FaUserAlt>  Manage All Users
                                    <span className="badge badge-secondary inline">+{selectClass?.length || 0}</span> </NavLink>
                                </li> */}
                                <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>  Manage All Users
                                   </NavLink>
                                </li>


                                <li><NavLink to="/dashboard/history"><FaBookReader></FaBookReader> Manage Class</NavLink> </li>
                            </>

                        ) : (
                            isInstructor ? (

                                <>
                                    <li>Instructor dashboard</li>
                                    <li><NavLink to="/dashboard/home" > <FaHome></FaHome>  Instructor Home</NavLink></li>
                                    <li><NavLink to="/dashboard/mySelectedClass"> <FaBookReader></FaBookReader> Add A Class
                                     
                                     </NavLink>
                                    </li>
                                    <li><NavLink to="/dashboard/history"> <FaWallet></FaWallet> My Classes</NavLink> </li>
                                    <li><NavLink to="/dashboard/history"> <FaWallet></FaWallet>Feedback</NavLink> </li>


                                </>) : (

                                <>

                                    <li><NavLink to="/dashboard/home" > <FaHome></FaHome>  Student Home</NavLink></li>
                                    <li><NavLink to="/dashboard/mySelectedClass"> <FaBookReader></FaBookReader> My Selected Class
                                        <span className="badge badge-secondary inline">+{selectClass?.length || 0}</span> </NavLink>
                                    </li>
                                    <li><NavLink to="/dashboard/history"> <FaWallet></FaWallet> Payment History</NavLink> </li>

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