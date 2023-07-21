import React from 'react'
import carmain from '../Frontend/Assets/carmain.png'
import '../Frontend/Style/Aboutus.css'
import { Link } from 'react-router-dom'
const AboutUs = () => {
  return (
    <section class="about" id="about">
  
    <div class="about-container">
        <div class="about-img">
            <img src={carmain} alt=""/>
        </div>
        <div class="about-text">
           <span>About Us</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aperiam magnam fuga sunt harum
                rerum mollitia libero quam necessitatibus commodi, obcaecati laborum optio quaerat facilis!
                Blanditiis dolores earum officiis veniam.</p>
          
               <Link to="/AboutUsPage" >  <a href="#" class="btn">Learn More</a></Link>
        </div>
    </div>
</section>
  )
}

export default AboutUs