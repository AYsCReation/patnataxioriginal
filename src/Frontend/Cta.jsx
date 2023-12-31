import React from 'react';
import '../Frontend/Style/Cta.css';

const Cta = () => {
  const handleBookNowCta = ()=>{
    window.scrollTo(0,0)
  }
  return (
    <>
      <div className="ctamain">
        <div className="bg-img-hero">
          <div className="container">
            <div className="row align-items-lg-center text-center text-lg-left space-2">
              <div className="col-lg-7">
                <h2 className="text-white">Call Now To Reserve Your Ride</h2>
                <p className="lead text-white">Space gives you everything you need to manage business, build great stuff, and reach your goals.</p>
              </div>

              <div className="text-lg-right">
                <a className="btn btn-purple" href="#">+91 8877665544</a>
                <button className="btn btn-light btn-glowing" onClick={handleBookNowCta} >Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
