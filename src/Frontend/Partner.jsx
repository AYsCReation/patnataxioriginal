import React from 'react'
import '../Frontend/Style/Partner.css'
import car from '../Frontend/Assets/partnercar.png'
const Partner = () => {
  return (
    <div className='mainpartner'>

    <div className="content-partner">
        <p className="driver">
        FOR DRIVERS (PARTNERS)
        </p>
        <p className="heading-partner">
        DO YOU WISH TO EARN & GROW WITH US?
        </p>
        <p className="content-partner-p">
        We understand the value of our partners. For others, you are the driver of your cab, but for us you are the driver of our business. Join hands with us and convert the cost into investment. You have all the skills and expertise to manage your vehicle. Just use this platform to ensure regular earning with less investment. It’s the right place for you to find decent & professional customers with less efforts.
        </p>
        <div className="partner-button">
                            <button type="submit" >Lets Handshake</button>
                        </div>
    </div>
    <div className='img-partner'>
    <img src={car} alt="" />
    </div>
    </div>
  )
}

export default Partner