import React, { useState, useEffect } from 'react';

import {AiOutlineMenu} from 'react-icons/ai';
import '../Frontend/Style/dashHeader.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('local');
  const [data, setData] = useState({ local: [], carpack: [], round: [], oneway: [] });
  const [sliderVisible, setSliderVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') === 'dark');
  const [sidebarClosed, setSidebarClosed] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/api/data', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userdata');
        setData(data);
      });
  }, []);

  useEffect(() => {
    // Set the dark mode class on the body element
    document.body.classList.toggle('dark', darkMode);
    // Save the dark mode state to localStorage
    localStorage.setItem('mode', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleSlider = () => {
    setSliderVisible(!sliderVisible);
  };

  const handleModeToggle = () => {
    // Toggle the dark mode state
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSidebarToggle = () => {
    setSidebarClosed(prevStatus => !prevStatus);
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark' : ''}`}>
      <nav className={`${sidebarClosed ? 'close' : ''}`}>
        <div className="logo-name">
          <div className="logo-image">
            <img src="images/logo.png" alt="" />
          </div>
          <span className="logo_name">CodingLab</span>
        </div>
        <div class="menu-items">
            <ul class="nav-links">
                <li><a href="#">
                    <i class="uil uil-estate"></i>
                    <span class="link-name">Dashboard</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-files-landscapes"></i>
                    <span class="link-name">Round Trip</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-chart"></i>
                    <span class="link-name">Oneway Trip</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-thumbs-up"></i>
                    <span class="link-name">Local</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-comments"></i>
                    <span class="link-name">Car Package</span>
                </a></li>
              
            </ul>
            
            <ul class="logout-mode">
                <li><a href="#">
                    <i class="uil uil-signout"></i>
                    <span class="link-name">Logout</span>
                </a></li>
                <li class="mode">
                    <a href="#">
                        <i class="uil uil-moon"></i>
                    <span class="link-name">Dark Mode</span>
                </a>
                <div class="mode-toggle" onClick={handleModeToggle}>
                  <span class="switch"></span>
                </div>
            </li>
            </ul>
        </div>
      </nav>

      <section className="dashboard-content">
      <div className={`top ${sidebarClosed ? 'closed' : ''}`}>
  <AiOutlineMenu className="sidebar-toggle" onClick={handleSidebarToggle} />
 
  <img src="images/profile.jpg" alt="" />
</div>
        <div class="dash-content">
           
            <div class="activity">
                
                <div class="activity-data">
                    <div class="data names">
                        <span class="data-title">Name</span>
                        <span class="data-list">Prem Shahi</span>
                        <span class="data-list">Deepa Chand</span>
                        <span class="data-list">Manisha Chand</span>
                        <span class="data-list">Pratima Shahi</span>
                        <span class="data-list">Man Shahi</span>
                        <span class="data-list">Ganesh Chand</span>
                        <span class="data-list">Bikash Chand</span>
                    </div>
                    <div class="data email">
                        <span class="data-title">Email</span>
                        <span class="data-list">premshahi@gmail.com</span>
                        <span class="data-list">deepachand@gmail.com</span>
                        <span class="data-list">prakashhai@gmail.com</span>
                        <span class="data-list">manishachand@gmail.com</span>
                        <span class="data-list">pratimashhai@gmail.com</span>
                        <span class="data-list">manshahi@gmail.com</span>
                        <span class="data-list">ganeshchand@gmail.com</span>
                    </div>
                    <div class="data joined">
                        <span class="data-title">Joined</span>
                        <span class="data-list">2022-02-12</span>
                        <span class="data-list">2022-02-12</span>
                        <span class="data-list">2022-02-13</span>
                        <span class="data-list">2022-02-13</span>
                        <span class="data-list">2022-02-14</span>
                        <span class="data-list">2022-02-14</span>
                        <span class="data-list">2022-02-15</span>
                    </div>
                    <div class="data type">
                        <span class="data-title">Type</span>
                        <span class="data-list">New</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">New</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">New</span>
                        <span class="data-list">Member</span>
                    </div>
                    <div class="data status">
                        <span class="data-title">Status</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
