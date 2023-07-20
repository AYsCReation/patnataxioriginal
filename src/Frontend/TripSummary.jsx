import React, {useState} from 'react'
import "../Frontend/Style/TripSummary.css"
import SuccessBooking from './SuccessBooking';
const TripSummary = ({ setIsSubmitted, isSubmitted , setShowSummary, showSummary, fromLocation, toLocation, date, returnDate, tourPackage, city, carType, activeMenu , phone, days, time}) => {
    
    const toggleModal = ()=>{
        setShowSummary(false);
    }
    const handleSubmitSummary=()=>{
        setIsSubmitted(true);
        setShowSummary(false);
       
    }
    
  return (
   <>
   <div className="modal-summary">
    
    {
        showSummary && (<div className='modal-overlay-summary'>
            
        <div className="modal-summary-content">
        <button onClick={toggleModal} className='button-close-summary' > X </button>
            <h2 className='modal-summary-heading' >Your Trip Summary</h2>
            {  activeMenu &&   <p> <strong>Tour Type:  </strong> {activeMenu === 'menu2' ? 'Local' : activeMenu === 'menu3' ? 'Car Package' : activeMenu === 'round' ? 'Round Trip' : activeMenu === 'oneway' ? 'One Way Trip' : ''}</p>  } 
            
            {  fromLocation &&   <p> <strong>From: </strong>  {fromLocation}</p>  } 
            {  toLocation &&   <p> <strong>To: </strong> {toLocation}</p>  } 

            {  date &&   <p> <strong>Pickup Date: </strong> {date}</p>  } 
            {  days>=1 &&   <p> <strong>Days: </strong> {days}</p>  } 
            {  carType &&   <p> <strong>Car Selected: </strong> {carType}</p>  }
           
            {  tourPackage &&   <p> <strong>Package Selected: </strong> {tourPackage}</p>  } 
            {  returnDate &&   <p> <strong>Return Date: </strong> {returnDate}</p>  }  
            {  city &&   <p> <strong>City: </strong> {city}</p>  } 
            {  phone &&   <p> <strong>To: </strong> {phone}</p>  }
            {  time &&   <p> <strong>Time:  </strong> {time}</p>  }
            <button onClick={handleSubmitSummary} className='button-submit-summary' > Confirm Booking </button> 
        </div>
        </div>)
    }
   </div>
   </>
  )
}

export default TripSummary
