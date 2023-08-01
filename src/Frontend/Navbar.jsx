import React from 'react';
import "../Frontend/Style/Navbar.css";
import logo from "../Frontend/Assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = ({ loginStatus }) => {
  console.log(loginStatus);

  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/AboutUsPage">About Us</Link>
          <Link to="/ContactUs">Contact Us</Link>
          <Link to="/OurServicesPage">Our Services</Link>
          <Link to="/AllBlogs">Blogs</Link>
          {loginStatus && <Link to="/AdminDashboard">Dashboard</Link>}
        </div>
      </div>
    </>
  );
};

export default Navbar;