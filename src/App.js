import './App.css';
import Navbar from './Frontend/Navbar';
import Home from './Frontend/Home';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Footer from './Frontend/Footer';
import AboutUsPage from './Frontend/AboutUsPage';
import ContactUs from './Frontend/ContactUs';
import OurServicesPage from './Frontend/OurServicesPage';



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
     <Route path='/OurServicesPage' element={ <OurServicesPage/> }/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
