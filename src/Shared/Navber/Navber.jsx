import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navber = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleSignout = () => {
    logOut().then().catch();
  }

    return (
        <div className="mx-10">
            <div className="navbar flex justify-between bg-base-100">
  <div className="">
    <Link to="/"><a className="btn btn-ghost text-warning text-xl font-bold">Elite Escape</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
        <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
        </ul>
  </div>
  <div className="flex-none gap-5">
    <div className="dropdown dropdown-end">
      {
        user? (
          <button onClick={handleSignout} className="btn btn-warning">Sign Out</button>
        ) :
        <Link to="/login"><button className="btn btn-warning">Login</button></Link>
      }
    </div>

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navber;