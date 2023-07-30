import './App.css';
import Navbar from './Frontend/Navbar';
import Home from './Frontend/Home';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Footer from './Frontend/Footer';
import AboutUsPage from './Frontend/AboutUsPage';
import ContactUs from './Frontend/ContactUs';
import OurServicesPage from './Frontend/OurServicesPage';
import ScrollToTop from './Frontend/ScrollToTop';
import { useState } from "react"
import Blog from './Frontend/Blog'
import Login from './Frontend/Login';

import AdminDashboard from './Frontend/AdminDashboard'; // Replace with the correct path to your component




// All useStates Variables












function App() {
  const [message, setMessage] = useState('');
  return (
    <>
    <BrowserRouter>
    <Routes>
    
     <Route path="/Navbar" element = {<Navbar/>}/>
     <Route  path="/" element = {<Home message={message} setMessage={setMessage}/>}/>
     <Route  path="/AboutUsPage" element = {<AboutUsPage/>}/>
     <Route  path="/Footer" element = {<Footer/>}/>
     <Route path='/ContactUs' element={<ContactUs message={message} setMessage={setMessage}/> }/>
     <Route path='/AdminDashboard' element={<AdminDashboard/> }/>
     <Route path='/OurServicesPage' element={ <OurServicesPage/> }/>
     <Route path='/Blog' element={ <Blog/> }/>
     <Route path='/Login' element={ <Login/> }/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
