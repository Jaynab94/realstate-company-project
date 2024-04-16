
import { Link, NavLink } from "react-router-dom";
import { LinearGradient } from 'react-text-gradients'

const Navbar = () => {

    const NavLinks = <

        >
        <NavLink to={'/'} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold " : "",
                color: isActive ? "blue" : "",
                background: isActive ? "" : "",
                border: isActive ? "1px solid blue" : "",
                borderRadius: isActive ? "10px" : "",
                padding: isActive ? "2px" : "",
                margin: isActive ? "2px" : "",
                fontSize: isActive ? "15px" : "",



                cursor: isActive ? "pointer" : "pointer"




            }
        }}> <li><a>Home</a></li></NavLink>



        <NavLink to={'/roomandsuite'} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold " : "",
                color: isActive ? "blue" : "black",
                background: isActive ? "" : "",
                border: isActive ? "1px solid blue" : "",
                borderRadius: isActive ? "10px" : "",
                padding: isActive ? "2px" : "",
                margin: isActive ? "2px" : "",
                fontSize: isActive ? "15px" : "",


                cursor: isActive ? "pointer" : "pointer"




            }
        }}> <li><a>Rooms & suites</a></li></NavLink>


        <NavLink to={'/restaurant'} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold " : "",
                color: isActive ? "blue" : "black",
                background: isActive ? "" : "",
                border: isActive ? "1px solid blue" : "",
                borderRadius: isActive ? "10px" : "",
                padding: isActive ? "2px" : "",
                margin: isActive ? "2px" : "",
                fontSize: isActive ? "15px" : "",


                cursor: isActive ? "pointer" : "pointer"




            }
        }}> <li><a>Restaurant</a></li></NavLink>


        <NavLink to={'/location'} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold " : "",
                color: isActive ? "blue" : "black",
                background: isActive ? "" : "",
                border: isActive ? "1px solid blue" : "",
                borderRadius: isActive ? "10px" : "",
                padding: isActive ? "2px" : "",
                margin: isActive ? "2px" : "",
                fontSize: isActive ? "15px" : "",


                cursor: isActive ? "pointer" : "pointer"




            }
        }}> <li><a>Location</a></li></NavLink>


        <NavLink to={'/support'} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold " : "",
                color: isActive ? "blue" : "black",
                background: isActive ? "" : "",
                border: isActive ? "1px solid blue" : "",
                borderRadius: isActive ? "10px" : "",
                padding: isActive ? "2px" : "",
                margin: isActive ? "2px" : "",
                fontSize: isActive ? "15px" : "",


                cursor: isActive ? "pointer" : "pointer"




            }
        }}> <li><a>Support</a></li></NavLink>




    </>
    return (
        <div className="navbar  fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm font-serif dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}

                    </ul>
                </div>
                <div>
                    <LinearGradient className="text-4xl font-bold font-serif" gradient={['to right', 'red, blue']}>Luxury</LinearGradient>
                </div>            </div>
            <div className="navbar-center font-serif hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}


                </ul>
            </div>

            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Update profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;