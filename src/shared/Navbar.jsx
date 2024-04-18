
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { LinearGradient } from 'react-text-gradients'
import { AuthContext } from "../AuthProvider/AuthProvider";

import { Tooltip as ReactTooltip } from 'react-tooltip'



const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);
    console.log(user, logOutUser)

    //handle sign out



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



    const handlelogout = () => {

        console.log('sign out')

        logOutUser()
            .then(result => {
                console.log(result)

            })
            .catch(error => {
                console.log(error)

            })


    }
    return (
        <div className="navbar bg-red-200 mx-auto  ">
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
                    <LinearGradient className="text-3xl font-bold font-serif" gradient={['to right', 'red, blue']}>Luminary Luxe</LinearGradient>
                </div>            </div>
            <div className="navbar-center font-serif hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}


                </ul>
            </div>

            <div className="navbar-end ">




                {
                    user ?
                        <div className="flex gap-4">
                            <img id="image-id" className="w-14 rounded-full "
                                src={user?.photoURL || "https://i.ibb.co/dJKZzrg/default-pic.png"} />

                            <ReactTooltip
                            anchorId="image-id"
                            place="left"
                            content={user?.displayName}
                            
                            
                            />

                            <button onClick={handlelogout} className="btn bg-red-200">sign out</button>
                        </div>

                        :
                        <Link to={'/login'}><button className="btn bg-red-200 ml-4 font-serif">sign in</button></Link>
                }




            </div>
        </div>
    );
};

export default Navbar;