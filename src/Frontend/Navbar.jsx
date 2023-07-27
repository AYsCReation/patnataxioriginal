import React from 'react'
import "../Frontend/Style/Navbar.css"
import logo from "../Frontend/Assets/logo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
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
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
  <Link to="/"><a href="#" target="">Home</a></Link>
   <Link to="/AboutUsPage"><a href="#" target="">About Us</a></Link> 
   <Link to="/ContactUs"><a href="#" target="">Contact Us</a></Link> 
   <Link to="/OurServicesPage"><a href="#" target="">Our Services</a></Link> 
   <Link to="/Blog"><a href="#" target="">Blogs</a></Link> 
    
  </div>
</div>
    </>
  )
}

export default Navbar