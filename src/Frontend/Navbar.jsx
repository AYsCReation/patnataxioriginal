import React from 'react'
import "../Frontend/Style/Navbar.css"
import logo from "../Frontend/Assets/logo.png"

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
  <a href="#" target="">Home</a>
    <a href="#" target="">About Us</a>
    <a href="#" target="">Contact Us</a>
    <a href="#" target="">Our Services</a>
    <a href="#" target="">Blogs</a>
    
  </div>
</div>
    </>
  )
}

export default Navbar