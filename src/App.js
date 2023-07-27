import './App.css';
import Navbar from './Frontend/Navbar';
import Home from './Frontend/Home';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Footer from './Frontend/Footer';
import AboutUsPage from './Frontend/AboutUsPage';
import ContactUs from './Frontend/ContactUs';
import OurServicesPage from './Frontend/OurServicesPage';
import ScrollToTop from './Frontend/ScrollToTop';
import AdminDashboard from './Frontend/AdminDashboard'; // Replace with the correct path to your component



// All useStates Variables












function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    
     <Route path="/Navbar" element = {<Navbar/>}/>
     <Route  path="/" element = {<Home/>}/>
     <Route  path="/AboutUsPage" element = {<AboutUsPage/>}/>
     <Route  path="/Footer" element = {<Footer/>}/>
     <Route path='/ContactUs' element={<ContactUs/> }/>
     <Route path='/AdminDashboard' element={<AdminDashboard/> }/>
     <Route path='/OurServicesPage' element={ <OurServicesPage/> }/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
