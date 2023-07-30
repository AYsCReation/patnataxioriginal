import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Navbar from './Navbar';
import Footer from './Footer';
import "../Frontend/Style/ContactUs.css"

import ScrollToTop from './ScrollToTop';
const ContactUs = ({message,setMessage}) => {
  console.log(message)
  return (
    <>
    <ScrollToTop />
    <Navbar />
      <section className="footer_get_touch_outer">
        <div className="container-contact">
          <div className="footer_get_touch_inner grid-70-30">
            <div className="colmun-70 get_form">
              <div className="get_form_inner">
                <div className="get_form_inner_text">
                  <h3>Get In Touch</h3>
                </div>
                <form action="#">
                  <div className="grid-50-50">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone/Skype" />
                  </div>
                  <div className="grid-full">
                    <textarea placeholder="About Your Query" cols="30" rows="10" value={message}></textarea>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
            <div className="colmun-30 get_say_form">
              <h5>Say Hi!</h5>
              <ul className="get_say_info_sec">
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:">info@taxiatpatna.com</a>
                </li>
                <li>
                  <i className=""><BsFillTelephoneFill /></i>
                  <a href="tel:">+91 9898989898</a>
                </li>
                <li>
                  <i className=""><AiFillInstagram /></i>
                  <a href="#">Stackfindover</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ContactUs
