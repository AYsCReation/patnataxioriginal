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
{/* <button className="BookNow-btn" onClick={()=> {setCarType("Sedan"); setShowModal(false); setShowSummary(true)} }>Book Now</button> */ }
const Modal = ({ setShowModal, children, setCarType, carType, showSummary, setShowSummary }) => {


  const closeModal = () => {
    setShowModal(false);
  }


  return (
    <div className="modal-overlay">
       {/* <button className="close-btn" onClick={closeModal}>
          X
        </button> */}
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
        <h1 className='catheading-modal'>Choose Your Car Category</h1>
            {/* <p className='catpara-modal' >Choose from our wide range of fleets that will suit your travel needs. <br /> Your Everyday travel partner - AC Cabs for point to point </p> */}
            <div className="categoryCardContainer">


                <div className="categoryCard">
                    <div className="content">
                        <p className="heading">Choti Sawari <br /> (Mini Car)
                        </p>
                        <p className="facilities">
                            <span className='hidden-text'>4 seater, 4 bags, AC</span>
                        </p>
                        <div className="para">
                            <img src={car2} alt="" />
                        </div>
                        <button className="BookNow-btn" onClick={()=> {setCarType("Mini Car"); setShowModal(false); setShowSummary(true)} }>Book Now</button>


                    </div>


                </div>
                <div className="categoryCard">
                    <div className="content">
                        <p className="heading">Badi Sawari <br /> (Sedan Car)
                        </p>
                        <p className="facilities">
                            <span className='hidden-text'>4 seater, 4 bags, AC</span>
                        </p>
                        <div className="para">
                            <img src={car1} alt="" />
                        </div>
                        <button className="BookNow-btn" onClick={()=> {setCarType("Sedan"); setShowModal(false); setShowSummary(true)} }>Book Now</button>


                    </div>


                </div>
                <div className="categoryCard">
                    <div className="content">
                        <p className="heading">Family Sawari <br />(SUV)
                        </p>
                        <p className="facilities">
                            <span className="hidden-text">4 seater, 4 bags, AC</span>
                        </p>
                        <div className="para">
                            <img src={car3} alt="" />
                        </div>
                        <button className="BookNow-btn" onClick={()=> {setCarType("SUV"); setShowModal(false); setShowSummary(true)} }>Book Now</button>  
                    </div>


                </div>
            </div>






      </div>
    </div>
  );
};
export default Modal;
