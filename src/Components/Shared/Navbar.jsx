import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const navLink = (
    <>
      <div className="flex lg:flex-row flex-col lg:py-0 gap-6 text-lg font-bold list-none ">
        <Link className="hover:text-gray-500" to='/'>Home</Link>
        <Link className="hover:text-gray-500" to='/login'>Log in</Link>
        <Link className="hover:text-gray-500" to='/dashboard'>Dashboard</Link>
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <i className="fa-solid fa-bars text-2xl"></i>
            </div>
            <ul
              tabIndex={0}
              className="menu items-center menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><Logo></Logo></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLink}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
