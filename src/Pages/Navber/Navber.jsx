import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {

    const navLinks=<>

    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/Event"}>Event</NavLink></li>
    <li><NavLink to={"/about"}>About Us</NavLink></li>
    <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
    
</>
    return (
        <div class="navbar bg-base-100 px-10">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div class="navbar-end">
        <div>
       <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/g9hCq1W/event1.jpg" />
        </div>
      </label>
      <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><Link to={'/login'}><a>Logout</a></Link></li>
      </ul>
    </div>
    {/* <button onClick={handleLogout} className='btn btn-primary'><NavLink to={'/login'}>Log Out</NavLink></button> */}
    </div>
          <Link to={'/login'}><a class="btn">LOgIn</a></Link>
        </div>
      </div>
    );
};

export default Navber;