import React from 'react'
import '../Frontend/Style/Ourservice.css'
import outstation from '../Frontend/Assets/outstation.jpg'
import local from '../Frontend/Assets/local.jpg'
import oneway from '../Frontend/Assets/oneway.jpg'

const Ourservices = () => {
  return (
    <>
    <div className="headingservice">
        OUR SERVICES
    </div>
    <div className='servicecardmain'>
      <div class="cardservice">
  <div class="cardservice-img"><img src={local} alt="" /></div>
  <div class="cardservice-info">
    <p class="text-title">ROUNDTRIP TAXI </p>
    <p class="text-body">Product description and details Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ad nobis voluptates deserunt qui aut, quia distinctio assumenda error dignissimos. Voluptatem dicta et in odio facilis quaerat possimus, rem eaque!</p>
  </div>
  <div class="cardservice-footer">
  <span class="text-title">$499.49</span>
  <div class="cardservice-button">
    <svg class="svg-icon" viewBox="0 0 20 20">
    </svg>
  </div>
</div></div>  <div class="cardservice">
  <div class="cardservice-img"><img src={oneway} alt="" /></div>
  <div class="cardservice-info">
    <p class="text-title">ONEWAY DROPS </p>
    <p class="text-body">Product description and details Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ad nobis voluptates deserunt qui aut, quia distinctio assumenda error dignissimos. Voluptatem dicta et in odio facilis quaerat possimus, rem eaque!</p>
  </div>
  <div class="cardservice-footer">
  <span class="text-title">$499.49</span>
  <div class="cardservice-button">
    <svg class="svg-icon" viewBox="0 0 20 20">
    </svg>
  </div>
</div></div>  <div class="cardservice">
  <div class="cardservice-img">
    <img src={local} alt="" />
  </div>
  <div class="cardservice-info">
    <p class="text-title">LOCAL RIDES </p>
    <p class="text-body">Product description and details Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ad nobis voluptates deserunt qui aut, quia distinctio assumenda error dignissimos. Voluptatem dicta et in odio facilis quaerat possimus, rem eaque!</p>
  </div>
  <div class="cardservice-footer">
  <span class="text-title">$499.49</span>
  <div class="cardservice-button">
    <svg class="svg-icon" viewBox="0 0 20 20">
    </svg>
  </div>
</div></div>  <div class="cardservice">
  <div class="cardservice-img"><img src={outstation} alt="" /></div>
  <div class="cardservice-info">
    <p class="text-title">CAR PACKAGE </p>
    <p class="text-body">Product description and details Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ad nobis voluptates deserunt qui aut, quia distinctio assumenda error dignissimos. Voluptatem dicta et in odio facilis quaerat possimus, rem eaque!</p>
  </div>
  <div class="cardservice-footer">
  <span class="text-title">$499.49</span>
  <div class="cardservice-button">
    <svg class="svg-icon" viewBox="0 0 20 20">
    </svg>
  </div>
</div></div>
</div>
    </>
  )
}

export default Ourservices