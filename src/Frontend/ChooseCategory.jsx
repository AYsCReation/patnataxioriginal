import React from 'react';
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

const ChooseCategory = ({setCarType}) => {
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

  const sliderRef = React.useRef(null);

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div   className='categoryMain' >
      <h2 className='carCategoryText'>Choose Your Car Category</h2>
      <Slider ref={sliderRef} {...sliderSettings}>
        {/* Replace the divs below with your slider content */}
        <div className="slider-item-phone">
        <h2 className='slider-item-phone-p'>Chhoti Sawari (Mini Car)</h2>
          <img src={car1} alt="" />
          <button className="BookNow-btn-phone" onClick={()=> {setCarType("Mini")} }>Book Now</button>
        </div>
        <div className="slider-item-phone">
        <h2 className='slider-item-phone-p'>Badi Sawari (Sedan Car) </h2>
        <img src={car2} alt="" />
        <button className="BookNow-btn-phone" onClick={()=> {setCarType("Mini")} }>Book Now</button>
        </div>
        <div className="slider-item-phone">
        <h2 className='slider-item-phone-p'>Family Sawari (SUV Car) </h2>
        <img src={car3} alt="" />
        <button className="BookNow-btn-phone" onClick={()=> {setCarType("Mini")} }>Book Now</button>
        </div>
        
        {/* Add more slider items as needed */}
      </Slider>
    </div>
  );
};

// Custom previous arrow component
const CustomPrevArrow = (props) => (
  <div
    className={props.className}
    style={{ ...props.style, left: '1rem', zIndex: 1 }}
    onClick={props.onClick}
  >
     <FontAwesomeIcon icon="chevron-left" /> {/* Font Awesome left arrow */}
  </div>
);

// Custom next arrow component
const CustomNextArrow = (props) => (
  <div
    className={props.className}
    style={{ ...props.style, right: '1rem', zIndex: 1 }}
    onClick={props.onClick}
  >
 <FontAwesomeIcon icon="chevron-right"></FontAwesomeIcon> {/* Font Awesome right arrow */}
  </div>
);
export default ChooseCategory;