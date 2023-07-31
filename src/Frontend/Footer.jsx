import React, { useState, useEffect } from 'react';
import { instagram, facebookcircle, linkedin, whatsapp } from 'boxicons';
import { Link } from 'react-router-dom';
import "../Frontend/Style/Footer.css"
import wicon from "../Frontend/Assets/whatsapp-icon.png"
const Footer = () => {
    const [activeMenu, setActiveMenu] = useState('menu1');
    const [citydata, setcitydata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/citypage')
          .then((response) => response.json())
          .then((data) => {
           
            setcitydata(data.data); // Assuming data is an object with a "data" property containing the posts array
          })
          .catch((error) => console.error(error));
      }, []);
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const renderData = () => {
        if (activeMenu === 'menu1') {
            return <div className='menu-contents'>
                <ul>
                    <br />
                    <li>Saharsa</li>
                    <li>Patna</li>
                    <li>Madhubani</li>
                    <li>Muzaffarpur</li>
                    <li>Sitamarhi</li>
                    <li>Jaynagar</li>
                </ul>
            </div>;
        } else if (activeMenu === 'menu2') {
            return <div className='menu-contents'>
                <ul>
                    <br />
                    <li>Hajipur</li>
                    <li>Patna</li>
                    <li>Madhubani</li>
                    <li>Samastipur</li>
                    <li>Chhapra</li>
                    <li>Motihari</li>
                </ul>
            </div>;
        }
        else if (activeMenu === 'menu3') {
            return <div className='menu-contents'>
                <ul>
                    <br />
                    <li>Saharsa</li>
                    <li>Khagaria</li>
                    <li>Lakhisarai</li>
                    <li>Muzaffarpur</li>
                    <li>Nawada</li>
                    <li>Jaynagar</li>
                </ul>
            </div>;
        }
        // Add more menu options and corresponding data here if needed
        return null;
    };

    return (
        <>
            <footer class="footer">
                <div class="container-footer">
                    <div class="row-footer">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services </a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">Book now</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Why choose us?</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Booking Status</a></li>
                                <li><a href="#">payment options</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>online Booking</h4>
                            <ul>
                                <li><a href="#">Sedan</a></li>
                                <li><a href="#">SUV</a></li>
                                <li><a href="#">Bus</a></li>
                                <li><a href="#">Traveler</a></li>
                            </ul>
                        </div>

                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="#">   <box-icon name='whatsapp' type='logo' color='#ffffff' ></box-icon></a>
                                <a href="#">  <box-icon type='logo' name='linkedin' color='#ffffff'></box-icon></a>
                                <a href="#">     <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon></a>
                                <a href="#">   <box-icon name='facebook-circle' type='logo' color='#ffffff'></box-icon></a>
                            </div>
                            {/* Footer navtabs
                    
                    */}


                            <p class="copyright">&copy; Copyrights. All rights reserved.
                            </p>
                            <p class="copyright">Made with <i class="bx bxs-heart"> By
                                Webzyro Tech</i></p>
                        </div>
                    </div>
                    <div className='footer-col'>

                       
                        <div className="footer-col-foot">
                        <h4>Popular Routes From</h4>
                            <ul className="menu-foot">
                                <li
                                    className={`menu-item ${activeMenu === 'menu1' ? 'active' : ''}`}
                                    onClick={() => handleMenuClick('menu1')}
                                >
                                    Darbhanga
                                </li>
                                <li
                                    className={`menu-item ${activeMenu === 'menu2' ? 'active' : ''}`}
                                    onClick={() => handleMenuClick('menu2')}
                                >
                                    Muzaffarpur
                                </li>
                                <li
                                    className={`menu-item1 ${activeMenu === 'menu3' ? 'active' : ''}`}
                                    onClick={() => handleMenuClick('menu3')}
                                >
                                    Patna
                                </li>
                                {/* Add more menu items here if needed */}
                            </ul>

                        </div>
                        {renderData()}
                        <div className="citydata">
                        <h4>Popular Cities</h4>
                       
                             <div className='menu-contents'>
                             <ul>
                                
                                 {citydata.map((i, index) => (
                               <li>  <Link to={`/city/${i._id}`}> {i.footTitle} </Link> </li>
                                 ))}
                             </ul>
                         </div>
          
                        </div>
                    </div>
                </div>
                <a
                    href="https://api.whatsapp.com/send?phone=19059294810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-float"
                >
                    <img src={wicon} alt="WhatsApp" />
                </a>
            </footer>
        </>
    )
}

export default Footer