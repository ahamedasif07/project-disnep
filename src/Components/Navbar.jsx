import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        
        <nav>

            <div>
             <NavLink  to='/login'>  <button className="absolute right-10 top-5 border-2 border-gray-400 px-3 py-2 rounded-sm bg-transparent text-gray-200">Login</button>
             </NavLink>
            </div>

        </nav>
    );
};

export default Navbar;