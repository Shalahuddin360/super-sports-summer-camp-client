import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
    }
    const navOptions = <>
        <li> <Link activeClassName='is-active' to="/">Home</Link> </li>
        <li> <Link to="/class">Enroll Class</Link></li>
        <li> <Link to="/enroll/football">Classes</Link></li>
        <li> <Link to="/instructors">Instructors</Link></li>


        {
            user ? <>

                <li> <Link to="/dashboard/">Dashboard</Link></li>
                <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
            </> : <>
                <li> <Link to="/login">Login</Link></li>

            </>
        }

        <li> <Link to="/register">Register</Link></li>

    </>
    return (
        <div className="fixed mt-0 z-10 bg-black bg-opacity-40 max-w-screen-xl text-white navbar mb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"> <img src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <><div className="avatar">
                    <div className="rounded w-12 h-12">
                        <img src={user.photoURL} title={user?.displayName} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div></> : <><FaUserCircle style={{ width: '80px' }}></FaUserCircle></>}
            </div>
        </div>
    );
};

export default Navbar;