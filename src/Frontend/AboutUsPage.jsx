import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../Frontend/Style/AboutUsPage.css"
const AboutUsPage = () => {
  return (
    <>
    <div>
        <Navbar/>
      <div className="responsive-container-block bigContainer">
  <div className="responsive-container-block Container bottomContainer">
    <div className="allText bottomText">
      <p className="text-blk headingText">
        About Us
      </p>
      <p className="text-blk subHeadingText">
        We build to your bespoke
      </p>
      <p className="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut. Congue in dignissim tincidunt ut dolor eu. Mi, eget posuere vitae sed purus nisl lorem.
      </p>
      <a>
        <button className="explore">
          View More
        </button>
      </a>
    </div>
    <div className="videoContainer">
      <iframe allowfullscreen="allowfullscreen" className="mainVideo" controls="controls" src="https://www.youtube.com/embed/svg%3E?">
      </iframe>
      <img className="dotsImg image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"/>
    </div>
  </div>
</div>
<Footer/>
    </div>
    </>
  )
}

export default AboutUsPage
