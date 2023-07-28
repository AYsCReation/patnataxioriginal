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
          <span className="logo_name">Dashboard</span>
        </div>
        <div class="menu-items">
            <ul class="nav-links">
                
                <li><a href="#">
                    <i class="uil uil-files-landscapes"></i>
                    <span class="link-name" onClick={() => handleTabClick('round')}>Round Trip</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-chart"></i>
                    <span class="link-name"  onClick={() => handleTabClick('oneway')}>Oneway Trip</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-thumbs-up"></i>
                    <span class="link-name" onClick={() => handleTabClick('local')}>Local</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-comments"></i>
                    <span class="link-name"onClick={() => handleTabClick('carpack')}>Car Package</span>
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
            <div class="box-wrap">
        <div class="table-wrap">
        <table className={`data-table ${activeTab !== 'local' ? 'hidden' : ''}`}>
          <thead>
            <tr>
              <th>SrNo.</th>
              <th>date</th>
              <th>phone</th>
              <th>city</th>
              <th>tourPackage</th>
              <th>carType</th>
            </tr>
          </thead>
          <tbody>
            {data.local.map((i, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{i.date}</td>
                <td>{i.phone}</td>
                <td>{i.city}</td>
                <td>{i.tourPackage}</td>
                <td>{i.carType}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className={`data-table ${activeTab !== 'carpack' ? 'hidden' : ''}`}>
          <thead>
            <tr>
            <th>SrNo.</th>
              <th>date</th>
              <th>phone</th>
              <th>city</th>
              <th>returnDate</th>
              <th>days</th>
              <th>carType</th>
            </tr>
          </thead>
          <tbody>
            {data.carpack.map((i, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{i.date}</td>
                <td>{i.phone}</td>
                <td>{i.city}</td>
                <td>{i.returnDate}</td>
                <td>{i.days}</td>
                <td>{i.carType}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className={`data-table ${activeTab !== 'round' ? 'hidden' : ''}`}>
          <thead>
            <tr>
            <th>SrNo.</th>
              <th>fromLocation</th>
              <th>toLocation</th>
              <th>date</th>
              <th>time</th>
              <th>phone</th>
              <th>returnDate</th>
              <th>carType</th>
            </tr>
          </thead>
          <tbody>
            {data.round.map((i, index) => (
              <tr key={index}>
                 <td>{index+1}</td>
                <td>{i.fromLocation}</td>
                <td>{i.toLocation}</td>
                <td>{i.date}</td>
                <td>{i.time}</td>
                <td>{i.phone}</td>
                <td>{i.returnDate}</td>
                <td>{i.carType}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className={`data-table ${activeTab !== 'oneway' ? 'hidden' : ''}`}>
          <thead>
            <tr>
            <th>SrNo.</th>
              <th>fromLocation</th>
              <th>toLocation</th>
              <th>date</th>
              <th>time</th>
              <th>phone</th>
              <th>carType</th>
            </tr>
          </thead>
          <tbody>
            {data.oneway.map((i, index) => (
              <tr key={index}>
                 <td>{index+1}</td>
                <td>{i.fromLocation}</td>
                <td>{i.toLocation}</td>
                <td>{i.date}</td>
                <td>{i.time}</td>
                <td>{i.phone}</td>
                <td>{i.carType}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

      
    </div> 
                
            </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;