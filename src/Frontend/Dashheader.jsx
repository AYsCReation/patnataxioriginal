import React from 'react'
import '../Frontend/Style/dashHeader.css';
const Dashheader = () => {
  return (
    <header className="main-header">
      <a href="#" className="logo">
        <span className="logo-mini">ALT</span>
        <span className="logo-lg">AdminLTE</span>
      </a>
      <nav className="navbar">
        <a href="#" className="sidebar-toggle" role="button">
          <span className="sr-only">Toggle navigation</span>
          &#9776;
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" >
                <i className="fa fa-envelope-o"></i>
                <span className="label label-success">4</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 4 messages</li>
                <li className="menu-item">
                  <a href="#">
                    <img src="img/user2-160x160.jpg" alt="User Image" />
                    <div>
                      <h4>Support Team</h4>
                      <small><i className="fa fa-clock-o"></i> 5 mins</small>
                      <p>Why not buy a new awesome theme?</p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Dashheader