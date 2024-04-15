import { NavLink } from "react-router-dom";

const Navbar = () => {

    const NavLinks = <

    >
       <NavLink> <li><a>Home</a></li></NavLink>
        <li><a>Rooms & suites</a></li>
        <li><a>Restaurant</a></li>
        <li><a>Location</a></li>
        <li><a>Support</a></li>
       


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm font-serif dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        { NavLinks}
                        
                    </ul>
                </div>
                <a className="font bold font-serif text-3xl">Luxury</a>
            </div>
            <div className="navbar-center font-serif hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    { NavLinks}
                    
                    
                </ul>
            </div>
            
            <div className="navbar-end">
              
                <div className="navbar-center  lg:flex">
                <ul className="menu menu-horizontal px-1">
                   
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                   
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navbar;