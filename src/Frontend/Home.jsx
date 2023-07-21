import hero from "../Frontend/Assets/hero.png"
import React from 'react'
import { useState } from "react"
import "../Frontend/Style/Home.css"
import MapComponent from './MapComponent';
import Autocomplete from 'react-google-autocomplete';
import 'react-phone-number-input/style.css'
import PhoneMap from "./PhoneMap";
import ChooseCategory from "./ChooseCategory";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";

import TripSummary from "./TripSummary";
import SuccessBooking from "./SuccessBooking";

import AboutUs from "./AboutUs";
import { Banner } from "./Banner";
import Ourservices from "./Ourservices";
import Cta from "./Cta";
import Majorcity from "./Majorcity";
import Partner from "./Partner";
import CarOptions from "./CarOptions";


const Home = () => {
    const [activeMenu, setActiveMenu] = useState('menu1');
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [tourPackage, setPackage] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [days, setDays] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [carType, setCarType] = useState('');
    const [showSummary, setShowSummary] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

// Form Validation

const formValidation = ()=>{
    if(activeMenu == 'menu2'){
        if(city == ""){
            alert("City is required!");
        }
        else if(tourPackage == ""){
            alert("Package is required!");
        }
        else if(date == ""){
            alert("date is required!");
        }
        else if(phone == "" || phone.length < 10 ){
            alert("A valid Phone Number is required!");
        }
        else {
            handleBookTaxi();
        }
    }
    else if(activeMenu == 'round'){
        if(fromLocation == ""){
            alert("Source Location is required!");
        }
        else if(toLocation == ""){
            alert("Destination is required!");
        }
        else if(date == ""){
            alert("date is required!");
        }
        else if(time == ""){
            alert("Time is required!");
        }
        else if(returnDate == ""){
            alert("Return Date is required!");
        }
        else if(phone == "" || phone.length < 10 ){
            alert("A valid Phone Number is required!");
        }
        else {
            handleBookTaxi();
        }

    }
    else if(activeMenu == 'oneway'){
        if(fromLocation == ""){
            alert("Source Location is required!");
        }
        else if(toLocation == ""){
            alert("Destination is required!");
        }
        else if(date == ""){
            alert("date is required!");
        }
        else if(time == ""){
            alert("Time is required!");
        }
        else if(phone == "" || phone.length < 10 ){
            alert("A valid Phone Number is required!");
        }
        else {
            handleBookTaxi();
        }
    }
    else if(activeMenu == 'menu3') {
        if(city == ""){
            alert("City is required!");
        }
        else if(days == ""){
            alert("Days is required!");
        }
        else if(date == ""){
            alert("date is required!");
        }
        else if(phone == "" || phone.length < 10 ){
            alert("A valid Phone Number is required!");
        }
        else {
            handleBookTaxi();
        }
    }
}

    const generateTimeOptions = () => {
        const timeOptions = [];
        for (let h = 0; h < 24; h++) {
            for (let m = 0; m < 60; m += 15) {
                const hour = h.toString().padStart(2, "0");
                const minute = m.toString().padStart(2, "0");
                const timeLabel = `${hour}:${minute}`;
                timeOptions.push(
                    <option key={`${hour}-${minute}`} value={`${hour}:${minute}`}>
                        {timeLabel}
                    </option>
                );
            }
        }
        return timeOptions;
    };
    const handleBookTaxi = () => {
      
        const isMobile = window.innerWidth <= 900; // Adjust the breakpoint as per your mobile view design
        setIsMobileView(isMobile);
        if (isMobile) {
            
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth', // Add smooth scrolling animation
            });
        }
        else setShowModal(true);

    };
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
   
    const handleCustomTimeChange = (event) => {

        setTime(event.target.value);


    };
    const inputDescriptions = {
        from: "Enter your starting location",
        to: "Enter your destination",
        date: "Select the date of your trip",
        time: "Select the time of your trip",
        phone: "Enter your phone number",
        city: "Enter your city",
        tourpackage: "Select a tour package",
        returndate: "Select the return date",
        days: "Select the number of days",
      };
    
    const renderCustomTimeSelect = () => {
        return (
            <div className="form-group">
                <label htmlFor="custom-time">Time: <div class="help-tip">
    <p>{inputDescriptions.time}</p>
</div> </label>
                {/* Use the select element with generated time options and add onChange handler */}
                <select id="custom-time" onChange={handleCustomTimeChange}>
                    {generateTimeOptions()}
                </select>
            </div>
        );
    };

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'from':
                setFromLocation(value);
                break;
            case 'to':
                setToLocation(value);
                break;
            case 'date':
                setDate(value);
                break;
            case 'time':
                setTime(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'days':
                setDays(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'tourpackage':
                setPackage(value);
                break;
            case 'returndate':
                setReturnDate(value);
                break;
            default:
                break;
        }
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };
    const renderData = () => {
        if (activeMenu === 'menu1') {
            setActiveMenu('round');

        } else if (activeMenu === 'menu2') {
            return <div className='menu-contents-trip'>
                <form className="booking-form">
                    <div className="form-group">
                        <label htmlFor="city">City <div class="help-tip">
    <p>{inputDescriptions.city}</p>
</div></label>
                        <input
                            type="city"
                            id="city"
                            name="city"
                            placeholder="Enter your city"
                            value={city}
                            onChange={handleInputChange}
                           
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="package">Package <div class="help-tip">
    <p>{inputDescriptions.tourpackage}</p>
</div></label>
                        <select
                            id="package"
                            name="tourpackage"
                            value={tourPackage}
                            onChange={handleInputChange}
                        >
                            <option value="">Select package</option>
                            <option value="4 hours, 40 km">4 hours, 40 km</option>
                            <option value="6 hours, 60 km">6 hours, 60 km</option>
                            <option value="8 hours, 80 km">8 hours, 80 km</option>
                            <option value="12 hours, 120 km">12 hours, 120 km</option>
                            <option value="WEDDING">WEDDING</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date <div class="help-tip">
    <p>{inputDescriptions.date}</p>
</div></label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            min={getCurrentDate()}
                            value={date}
                            onChange={handleInputChange}
                           
                        />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="phone">Phone <div class="help-tip">
    <p>{inputDescriptions.phone}</p>
</div></label>
                        <div className="phoneMain"> <span id="phoneCode">+91</span>  <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your number"
                            value={phone}
                            onChange={handleInputChange}
                        />
                        </div>
                    </div>

                </form>
            </div>;
        }
        else if (activeMenu === 'menu3') {
            return <div className='menu-contents-trip'>
                <form className="booking-form">
                    <div className="form-group">
                        <label htmlFor="city">City <div class="help-tip">
    <p>{inputDescriptions.city}</p>
</div></label>
                        <input
                            type="city"
                            id="city"
                            name="city"
                            placeholder="Enter your city"
                            value={city}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date <div class="help-tip">
    <p>{inputDescriptions.date}</p>
</div></label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            min={getCurrentDate()}
                            value={date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="days">Days <div class="help-tip">
    <p>{inputDescriptions.days}</p>
</div></label>
                        <select
                            id="days"
                            name="days"
                            value={days}
                            onChange={handleInputChange}
                        >
                            <option>Select Days</option>
                            {Array.from({ length: 15 }, (_, index) => index + 1).map(day => (
                                <option key={day} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="redate">Return Date<div class="help-tip">
    <p>{inputDescriptions.returndate}</p>
</div></label>
                        <input
                            type="date"
                            id="date"
                            name="returndate"
                            min={getCurrentDate()}
                            value={returnDate}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone<div class="help-tip">
    <p>{inputDescriptions.phone}</p>
</div></label>
                        <div className="phoneMain"> <span id="phoneCode">+91</span>  <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your number"
                            value={phone}
                            onChange={handleInputChange}
                        />
                        </div>
                    </div>

                </form>
            </div>;
        }
        else if (activeMenu === 'round') {
            return <div className='menu-contents-trip'>
                <form className="booking-form">
                    <div className="form-group">
                        <label htmlFor="from">From <div class="help-tip">
    <p>{inputDescriptions.from}</p>
</div> </label>
                        <Autocomplete
                            apiKey="AIzaSyD5BMc9ScpaPKkEOyBFxUuUjWaGqDpMgu0" onChange={(e) => setFromLocation(e.target.value)}
                            onPlaceSelected={(place) => setFromLocation(place.formatted_address)}
                            value={fromLocation}
                            options={{
                                types: ['geocode'],
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="to">To <div class="help-tip">
    <p>{inputDescriptions.to}</p>
</div> </label>
                        <Autocomplete
                            apiKey="AIzaSyD5BMc9ScpaPKkEOyBFxUuUjWaGqDpMgu0" onChange={(e) => setToLocation(e.target.value)}
                            onPlaceSelected={(place) => setToLocation(place.formatted_address)}
                            value={toLocation}
                            options={{
                                types: ['geocode'],
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date <div class="help-tip">
    <p>{inputDescriptions.date}</p>
</div> </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            min={getCurrentDate()}
                            value={date}
                            onChange={handleInputChange}
                        />
                    </div>

                   
                        {renderCustomTimeSelect()}
                   
                    <div className="form-group">
                        <label htmlFor="date">Return Date<div class="help-tip">
    <p>{inputDescriptions.returndate}</p>
</div> </label>
                        <input
                            type="date"
                            id="date"
                            name="returndate"
                            min={getCurrentDate()}
                            value={returnDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone<div class="help-tip">
    <p>{inputDescriptions.phone}</p>
</div> </label>
                        <div className="phoneMain"> <span id="phoneCode">+91</span>  <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your number"
                            value={phone}
                            onChange={handleInputChange}
                        />
                        </div>
                    </div>

                </form>
            </div>;
        }
        else if (activeMenu === 'oneway') {
            return <div className='menu-contents-trip'>
                <form className="booking-form">
                    <div className="form-group">
                        <label htmlFor="from">From <div class="help-tip">
    <p>{inputDescriptions.from}</p>
</div> </label>
                        <Autocomplete
                            apiKey="AIzaSyD5BMc9ScpaPKkEOyBFxUuUjWaGqDpMgu0" onChange={(e) => setFromLocation(e.target.value)}
                            onPlaceSelected={(place) => setFromLocation(place.formatted_address)}
                            value={fromLocation}
                            options={{
                                types: ['geocode'],
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="to">To <div class="help-tip">
    <p>{inputDescriptions.to}</p>
</div></label>
                        <Autocomplete
                            apiKey="AIzaSyD5BMc9ScpaPKkEOyBFxUuUjWaGqDpMgu0" onChange={(e) => setToLocation(e.target.value)}
                            onPlaceSelected={(place) => setToLocation(place.formatted_address)}
                            value={toLocation}
                            options={{
                                types: ['geocode'],
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date <div class="help-tip">
    <p>{inputDescriptions.date}</p>
</div></label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            min={getCurrentDate()}
                            value={date}
                            onChange={handleInputChange}
                        />
                    </div>

                
                        {renderCustomTimeSelect()}
             

                    <div className="form-group">
                        <label htmlFor="phone">Phone <div class="help-tip">
    <p>{inputDescriptions.phone}</p>
</div></label>
                        <div className="phoneMain"> <span id="phoneCode">+91</span>  <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your number"
                            value={phone}
                            onChange={handleInputChange}
                        />
                        </div>
                    </div>

                </form>
            </div>;
        }
        // Add more menu options and corresponding data here if needed
        return null;
    };
    return (
        <>
            <Navbar />
            <div className="home-container">
                <div className="hero">
                    <img src={hero} alt="" />
                    <div className="hero-title">
                        <p>  Most Reliable Taxi Service in Patna </p>
                    </div>


                    <div className="form-container">
                        <div className="trip-options">
                            <ul className="menu-trip">
                                <li
                                    className={`menu-item-trip ${activeMenu === 'round' || activeMenu === 'oneway' ? 'active' : ''}`}
                                    onClick={() => handleMenuClick('menu1')}
                                >
                                    OutStation
                                </li>
                                <li
                                    className={`menu-item-trip ${activeMenu === 'menu2' ? 'active' : ''}`}
                                    onClick={() => handleMenuClick('menu2')}
                                >
                                    Local
                                </li>
                                <li
                                    className={`menu-item-trip ${activeMenu === 'menu3' ? 'active' : ''}`}
                                    onClick={() => handleMenuClick('menu3')}
                                >
                                    Car Package
                                </li>

                            </ul> </div>
                        {
                            (activeMenu == "menu1" || (activeMenu == "oneway" || activeMenu == "round")) && (
                                <>
                                    <div className="trip-options-out">
                                        <ul className="menu-trip-out">
                                            <li
                                                className={`menu-item-trip ${activeMenu === 'round' ? 'active' : ''}`}
                                                onClick={() => handleMenuClick('round')}
                                            >
                                                Round Trip
                                            </li>
                                            <li
                                                className={`menu-item-trip ${activeMenu === 'oneway' ? 'active' : ''}`}
                                                onClick={() => handleMenuClick('oneway')}
                                            >
                                                One-Way Trip
                                            </li>
                                            {/* Add more menu items here if needed */}
                                        </ul>
                                    </div>

                                </>
                            )
                        }

                        {renderData()}
                        <div className="form-button">
                            <button type="submit" onClick={() => formValidation()}>Book Taxi</button>
                        </div>
                    </div>

                </div>
                <div className="map">
                    <MapComponent fromLocation={fromLocation} toLocation={toLocation} />
                </div>
            </div>




            {/* {showModal && <ChooseCategory setShowModal={setShowModal} />       } */}

            { showModal && <Modal showModal={showModal} setShowModal={setShowModal} carType={carType} setCarType={setCarType} setShowSummary={setShowSummary} showSummary={showSummary} />  }
            { isMobileView && <ChooseCategory setCarType={setCarType} setShowSummary={setShowSummary}  /> }
            { showSummary && <TripSummary  showSummary={showSummary} setShowSummary={setShowSummary} fromLocation={fromLocation} toLocation={toLocation} date={date} city={city} returnDate={returnDate} carType={carType} activeMenu={activeMenu} tourPackage={tourPackage} phone={phone} days={days} time={time} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />  }
            {isSubmitted && <SuccessBooking/> }
         
           
       <Banner />
       <Ourservices />
       <Cta />
       <CarOptions/>
       <AboutUs />
       <Majorcity />
         
         <Partner />
            <Footer />
        </>
    )
}

export default Home
