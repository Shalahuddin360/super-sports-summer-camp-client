import { NavLink, Outlet } from "react-router-dom";
import { FaBookReader, FaHome, FaWallet } from 'react-icons/fa';
import useSelect from "../hooks/useSelect";

const Dashboard = () => {
    const [selectClass] = useSelect();
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

                    <li><NavLink to="/dashboard/home" > <FaHome></FaHome>  Student Home</NavLink></li>
                    <li><NavLink to="/dashboard/mySelectedClass"> <FaBookReader></FaBookReader> My Selected Class
                        <span className="badge badge-secondary inline">+{selectClass?.length || 0}</span>

                    </NavLink>
                    </li>
                    <li> <NavLink to="/dashboard/history"> <FaWallet></FaWallet> Payment History</NavLink> </li>
                    <div className="divider"></div>
                    <li><NavLink to="/" > <FaHome></FaHome> Home </NavLink> </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;