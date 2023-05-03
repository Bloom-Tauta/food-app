import React from 'react';
import '../css/navbar.css';
// import Search from './Search';
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <div className="nav">
      {/* <Search/> */}
      <p>Recipe Share</p>
       <div className="nav_links">
        <li><NavLink to="/" exact="/path">Home</NavLink></li>
        <li><NavLink to="/login" >Login</NavLink></li>
        <li><NavLink to="/signup">SignUp</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
       </div>
    </div>
  )
};

export default Navbar;