import React from 'react';
import '../Frontend/Style/Choose-category.css'; // Import the CSS file for styling


import car1 from '../Frontend/Assets/car1.png';
import car2 from '../Frontend/Assets/car2.png';
import car3 from '../Frontend/Assets/car3.png';


const ChooseCategory = ({ setCarType, setShowModal, showModal, setShowSummary }) => {
  const handleBookNow = (carType) => {
    setCarType(carType);
    setShowSummary(true);
  };


  return (
    <div className='categoryMain'>
      <h2 className='carCategoryText'>Step 2: Choose Your Car</h2>
      <div className='carOptionsContainer'>
        <div className='carOption'>
          <h2>Chhoti Sawari (Mini Car)</h2>
          <p className="facilities-category">
                            <span className='hidden-text-phone'>4 seater, 4 bags, AC</span>
                        </p>
          <img src={car1} alt='Mini Car' />
          <button onClick={() => handleBookNow('Mini')}>Book Now</button>
       
        </div>
        <div className='carOption'>
          <h2>Badi Sawari (Sedan Car)</h2>
          <p className="facilities-category">
                            <span className='hidden-text-phone'>5 seater, 4 bags, AC</span>
                        </p>
          <img src={car2} alt='Sedan Car' />
          <button onClick={() => handleBookNow('Sedan')}>Book Now</button>
        </div>
        <div className='carOption'>
          <h2>Family Sawari (SUV Car)</h2>
          <p className="facilities-category">
                            <span className="hidden-text-phone">6 seater, 4 bags, AC</span>
                        </p>
          <img src={car3} alt='SUV Car' />
          <button onClick={() => handleBookNow('SUV')}>Book Now</button>
        </div>
      </div>
    </div>
  );
};


export default ChooseCategory;