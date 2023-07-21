import React from 'react'
import '../Frontend/Style/Majorcity.css'
import car1 from '../Frontend/Assets/dharbanga.jpg'
import car2 from '../Frontend/Assets/patna.jpg'
import car3 from '../Frontend/Assets/madhubani.jpg'
import car4 from '../Frontend/Assets/muzaffarpur.jpg'
const Majorcity = () => {
  return (
    <>
    <div className="headingservice">
        CAB SERVICES IN BIHAR
    </div>
   <div className='majorcitymain'>
   <div class="majorcitycard">
  <div class="majorcitycard-image">
    <img src={car1} alt="" />
  </div>
  <p class="majorcitycard-title">Taxi Services In Darbhanga, Bihar</p>
  <p class="majorcitycard-body">
    Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
  </p>

</div>
<div class="majorcitycard">
  <div class="majorcitycard-image">
  <img src={car2} alt="" />
  </div>
  <p class="majorcitycard-title">Cab Services In Patna, Bihar</p>
  <p class="majorcitycard-body">
    Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
  </p>
 
</div>
<div class="majorcitycard">
  <div class="majorcitycard-image">
  <img src={car3} alt="" />
  </div>
  <p class="majorcitycard-title">Book Online Cab Service In Madhubani</p>
  <p class="majorcitycard-body">
    Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
  </p>

</div>
<div class="majorcitycard">
  <div class="majorcitycard-image">
  <img src={car4} alt="" />
  </div>
  <p class="majorcitycard-title">Online Cab Service In Muzaffarpur</p>
  <p class="majorcitycard-body">
    Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
  </p>
 
</div>
   </div>
   </>
  )
}

export default Majorcity