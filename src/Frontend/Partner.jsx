import React from 'react'
import { useState } from "react"
import '../Frontend/Style/Partner.css'
import car from '../Frontend/Assets/partnercar.png'
import { Link } from 'react-router-dom'
const Partner = ({message,setMessage}) => {
  
  console.log(message)
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
                           <Link to="/ContactUs" > <button type="submit" onClick={()=>{setMessage("I'm a skilled and experienced driver interested in working with your company. Ready to hit the road and provide top-notch service to your clients!")}} >Lets Handshake</button></Link>
                        </div>
    </div>
    <div className='img-partner'>
    <img src={car} alt="" />
    </div>
    </div>
  )
}

export default Partner