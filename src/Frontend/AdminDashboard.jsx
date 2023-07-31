import React, { useState, useEffect } from 'react';

import {AiOutlineMenu,AiFillDelete} from 'react-icons/ai';
import '../Frontend/Style/dashHeader.css';
import AllBlogs from './AllBlogs';
import Create from './Create';
import AddRoute from './AddRoute';
const AdminDashboard = ({loginStatus}) => {
  const [activeTab, setActiveTab] = useState('local');
  const [data, setData] = useState({ local: [], carpack: [], round: [], oneway: [] });
  const [sliderVisible, setSliderVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') === 'dark');
  const [sidebarClosed, setSidebarClosed] = useState(false);
  
  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = () => {
    fetch('http://localhost:4000/api/data', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDeleteField = (id) => {
    // Make a DELETE request to the server to delete the field
    fetch(`http://localhost:4000/formdata/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message); // Log the response message
        fetchFormData(); // Fetch the updated data after successful deletion
      })
      .catch((error) => {
        console.error('Error deleting field:', error);
      });
  };

  // Step 1: Create state variables for today's and previous leads
  const [todaysLeads, setTodaysLeads] = useState({ local: [], carpack: [], round: [], oneway: [] });
  const [previousLeads, setPreviousLeads] = useState({ local: [], carpack: [], round: [], oneway: [] });

  // Step 2: Filter the leads based on the current date
  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const formattedToday = formatDate(today); 
    console.log(formattedToday)
    const filteredLocalLeadsToday = data.local.filter((lead) => lead.currentdate === formattedToday);
    const filteredCarpackLeadsToday = data.carpack.filter((lead) => lead.currentdate === formattedToday);
    const filteredRoundLeadsToday = data.round.filter((lead) => lead.currentdate === formattedToday);
    const filteredOnewayLeadsToday = data.oneway.filter((lead) => lead.currentdate === formattedToday);

    setTodaysLeads({
      local: filteredLocalLeadsToday,
      carpack: filteredCarpackLeadsToday,
      round: filteredRoundLeadsToday,
      oneway: filteredOnewayLeadsToday,
    });
    
    // Step 3: Filter the leads based on the previous date (not equal to today)
    const filteredLocalLeadsPrevious = data.local.filter((lead) => lead.currentdate !== formattedToday);
    const filteredCarpackLeadsPrevious = data.carpack.filter((lead) => lead.currentdate !== formattedToday);
    const filteredRoundLeadsPrevious = data.round.filter((lead) => lead.currentdate !== formattedToday);
    const filteredOnewayLeadsPrevious = data.oneway.filter((lead) => lead.currentdate !== formattedToday);

    setPreviousLeads({
      local: filteredLocalLeadsPrevious,
      carpack: filteredCarpackLeadsPrevious,
      round: filteredRoundLeadsPrevious,
      oneway: filteredOnewayLeadsPrevious,
    });
  }, [data.local, data.carpack, data.round, data.oneway]);

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
  const formatDate = (dateString) => {
    const parts = dateString.split("/");
    const formattedDate = `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
    return formattedDate;
  };

console.log(previousLeads , todaysLeads)
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
                <li><a href="#">
                    <i class="uil uil-comments"></i>
                    <span class="link-name"onClick={() => handleTabClick('AllBlogs')}>All Blogs</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-comments"></i>
                    <span class="link-name"onClick={() => handleTabClick('CreateBlog')}>Add Blogs</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-comments"></i>
                    <span class="link-name"onClick={() => handleTabClick('CreateRoute')}>Add Routes</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-comments"></i>
                    <span class="link-name"onClick={() => handleTabClick('carpack')}>Add Cities</span>
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
       { (activeTab !== 'AllBlogs' && (activeTab !== 'CreateBlog' && activeTab !== 'CreateRoute' )) && <h2>Today's Leads</h2> }
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
            {todaysLeads.local.map((i, index) => (
              <tr key={index}>
                <td>{index+1}<AiFillDelete className='delete-opt' onClick={() => handleDeleteField(i._id)}/></td>
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
            {todaysLeads.carpack.map((i, index) => (
              <tr key={index}>
                <td>{index+1}<AiFillDelete className='delete-opt' onClick={() => handleDeleteField(i._id)}/></td>
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
            {todaysLeads.round.map((i, index) => (
              <tr key={index}>
                 <td>{index+1}<AiFillDelete className='delete-opt' onClick={() => handleDeleteField(i._id)}/></td>
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
            {todaysLeads.oneway.map((i, index) => (
              <tr key={index}>
                 <td>{index+1}<AiFillDelete className='delete-opt' onClick={() => handleDeleteField(i._id)}/></td>
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
        { (activeTab !== 'AllBlogs' && (activeTab !== 'CreateBlog' && activeTab !== 'CreateRoute' ))  && <h2>Previous Day's Leads</h2>}
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
            {previousLeads.local.map((i, index) => (
              <tr key={index}>
                <td>{index+1}<AiFillDelete className='delete-opt' onClick={() => handleDeleteField(i._id)}/></td>
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
            {previousLeads.carpack.map((i, index) => (
              <tr key={index}>
                <td>{index+1}<AiFillDelete className='delete-opt' onClick={() => handleDeleteField(i._id)}/></td>
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
            {previousLeads.round.map((i, index) => (
              <tr key={index}>
                 <td>{index+1}<AiFillDelete className='delete-opt' onClick={() => handleDeleteField(i._id)}/></td>
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
            {previousLeads.oneway.map((i, index) => (
              <tr key={index}>
                 <td>{index+1}<AiFillDelete className='delete-opt' onClick={() => handleDeleteField(i._id)}/></td>
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

        {activeTab === 'AllBlogs' && <AllBlogs loginStatus={loginStatus} />} 
              {activeTab === 'CreateBlog' && <Create />}
              {activeTab === 'CreateRoute' && <AddRoute />}


    </div> 
                
            </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;