import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../Frontend/Style/OurServicesPage.css"
const OurServicesPage = () => {
  return (
   <>
     <div className='mainSer'>
      <Navbar />

      <div className="servicesContainer">
        <div className="servicesHeading">
        <h2 className='servicesTitle'>Book taxi services from Patna Web/App</h2>
        <p className='servicesPara' >Your everyday travel partner - AC Cabs for point to point travel</p>


        </div>
        <div className="cardContainer">
          <div class="card-services">
            <div class="image1">

            </div>
            <div class="content">
              <a href="#">
                <span class="title">
                  Book Outstation Cab with Driver in Patna
                </span>
              </a>

              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium
              </p>

              <a class="action" href="#">
                Find out more
                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
          <div class="card-services">
            <div class="image2"></div>
            <div class="content">
              <a href="#">
                <span class="title">
                  Get online local car rental service
                </span>
              </a>

              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium
              </p>

              <a class="action" href="#">
                Find out more
                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
          <div class="card-services">
            <div class="image3"></div>
            <div class="content">
              <a href="#">
                <span class="title">
                  One way Cab Services
                </span>
              </a>

              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium
              </p>

              <a class="action" href="#">
                Find out more
                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

   </>
  )
}

export default OurServicesPage
