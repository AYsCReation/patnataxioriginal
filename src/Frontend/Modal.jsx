// Modal.js
import React from 'react';
import "../Frontend/Style/Modal.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Frontend/Style/Choose-category.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import car1 from '../Frontend/Assets/car1.png';
import car2 from '../Frontend/Assets/car2.png';
import car3 from '../Frontend/Assets/car3.png';
const Modal = ({ setShowModal,  children, setCarType, carType, showSummary, setShowSummary }) => {
    const sliderSettings = {
        dots: false, // Remove the dots
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show only one slide at a time
        slidesToScroll: 1,
        centerMode: true, // Enable center mode
        centerPadding: '0', // Set padding to 0 for center mode
        prevArrow: <CustomPrevArrow />, // Custom previous arrow component
        nextArrow: <CustomNextArrow />, // Custom next arrow component
      };
      const closeModal =()=>{
        setShowModal(false);
      }
      const sliderRef = React.useRef(null);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button className="close-btn" onClick={closeModal}>
          X
        </button>
      <Slider ref={sliderRef} {...sliderSettings}>
        {/* Replace the divs below with your slider content */}
      
        <div className="slider-item">
        <h1 className='slider-item-p'>Chhoti Sawari (Mini Car)</h1>
          <img src={car1} alt="" />
          <button className="BookNow-btn" onClick={()=> {setCarType("Mini"); setShowModal(false); setShowSummary(true)} }>Book Now</button>
        </div>
        <div className="slider-item">
        <h1 className='slider-item-p'>Badi Sawari (Sedan Car) </h1>
        <img src={car2} alt="" />
        <button className="BookNow-btn" onClick={()=> {setCarType("Sedan"); setShowModal(false);setShowSummary(true)} }>Book Now</button>
        </div>
        <div className="slider-item">
        <h1 className='slider-item-p'>Family Sawari (SUV Car) </h1>
        <img src={car3} alt="" />
        <button className="BookNow-btn" onClick={()=> {setCarType("SUV"); setShowModal(false);setShowSummary(true)} }>Book Now</button>
        </div>
       
        {/* Add more slider items as needed */}
      </Slider>
        
      </div>
    </div>
  );
};
const CustomPrevArrow = (props) => (
    <div
      className={props.className}
      style={{ ...props.style, left: '5rem', zIndex: 1 }}
      onClick={props.onClick}
    >
       <FontAwesomeIcon icon="chevron-left" /> {/* Font Awesome left arrow */}
    </div>
  );
  
  // Custom next arrow component
  const CustomNextArrow = (props) => (
    <div
      className={props.className}
      style={{ ...props.style, right: '5rem', zIndex: 1 }}
      onClick={props.onClick}
    >
   <FontAwesomeIcon icon="chevron-right"></FontAwesomeIcon> {/* Font Awesome right arrow */}
    </div>
  );
export default Modal;
