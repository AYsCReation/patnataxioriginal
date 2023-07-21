import React from 'react'
import "../Frontend/Style/CarOptions.css"
import car1 from "../Frontend/Assets/car1.png"
import car2 from "../Frontend/Assets/car2.png"
import car3 from "../Frontend/Assets/car3.png"
const CarOptions = () => {
    return (
        <div className='caropion-main'>
            <h1 className='catheading'>Available Car Options</h1>
            <p className='catpara' >Choose from our wide range of fleets that will suit your travel needs. <br /> Your Everyday travel partner - AC Cabs for point to point </p>
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
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CarOptions
