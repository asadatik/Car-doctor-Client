import { useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/logo.svg'  
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
    const {user,logOut} =useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{})
        .catch( error => console.log(error))
    }

    const navItems = <>
        <li className="text-white  lg:text-2xl " ><Link to="/">Home</Link> </li>
        <li className="text-white  lg:text-2xl "   > <Link to="/">About</Link> </li>
        
        { user?.email ?  <>
            <li className="text-white  lg:text-2xl "   ></li>
            <li className="text-white  lg:text-2xl "   ><button onClick={handleLogOut}>Log out</button></li>
        </> 
        : <li className="text-white  lg:text-2xl "    > <Link to="/LOGIN">Login</Link> </li>
       }
    </>

    return (
                 <div className="mb-40 md:mb-10 lg:mb-10 "  style={{backgroundImage: 'url(https://i.ibb.co/kS3PMFx/pexels-pixabay-355288.jpg)'}}       >
 <div className="navbar  bg-opacity-10 bg-gradient-to-r from-neutral-950 ...]  h-28 mb-4"   >
                    
 <div className="navbar-start">
                <div className="dropdown  ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
                    <div className="navbar-center  hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end     ">
                    <button className="btn btn-outline btn-warning">Appointment</button>
                    </div>

                    
                </div>
                 </div>
               
            );
        };
        


export default Navbar;