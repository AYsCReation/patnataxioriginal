import './App.css';
import Navbar from './Frontend/Navbar';
import Home from './Frontend/Home';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Footer from './Frontend/Footer';
import AboutUs from './Frontend/AboutUs';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/Navbar" element = {<Navbar/>}/>
     <Route  path="/" element = {<Home/>}/>
     <Route  path="/AboutUs" element = {<AboutUs/>}/>
     <Route  path="/Footer" element = {<Footer/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
