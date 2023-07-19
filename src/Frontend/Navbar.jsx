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
    <a href="#" target="">Github</a>
    <a href="#" target="">Stackoverflow</a>
    <a href="#" target="">LinkedIn</a>
    <a href="#" target="">Codepen</a>
    <a href="#" target="">JsFiddle</a>
  </div>
</div>
    </>
  )
}

export default Navbar