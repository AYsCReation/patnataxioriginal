import React, { useState, useEffect } from 'react';
import { instagram, facebookcircle, linkedin, whatsapp } from 'boxicons';
import { Link } from 'react-router-dom';
import "../Frontend/Style/Footer.css"
import wicon from "../Frontend/Assets/whatsapp-icon.png"
const Footer = () => {
    const [activeMenu, setActiveMenu] = useState('menu1');
    const [citydata, setcitydata] = useState([]);
    const [routedata, setroutedata] = useState([]);
    useEffect(() => {
        fetch('https://backend-taxi.onrender.com/citypage')
            .then((response) => response.json())
            .then((data) => {

                setcitydata(data.data); // Assuming data is an object with a "data" property containing the posts array
            })
            .catch((error) => console.error(error));
    }, []);
    const uniqueFromRoutes = Array.from(new Set(routedata.map((route) => route.FromRoute)));
    useEffect(() => {
        fetch('https://backend-taxi.onrender.com/routepage')
            .then((response) => response.json())
            .then((data) => {

                setroutedata(data.data); // Assuming data is an object with a "data" property containing the posts array
            })
            .catch((error) => console.error(error));
    }, []);
   
    const renderData = () => {
        const groupedRoutes = {};
      
        routedata.forEach((route) => {
          const { FromRoute, toRoute } = route;
          if (groupedRoutes[FromRoute]) {
            groupedRoutes[FromRoute].push(toRoute);
          } else {
            groupedRoutes[FromRoute] = [toRoute];
          }
        });
      
        const activeRoutes = groupedRoutes[activeMenu];
      
        if (!activeRoutes) {
          return null;
        }
      
        return (
          <div className='menu-contents'>
            <ul>
              <br />
              {activeRoutes.map((route) => (
                <li key={route}>{rendermain(activeMenu, route)}</li>
              ))}
            </ul>
          </div>
        );
      };
      
      const rendermain = (fromRoute, toRoute) => {
        const selectedRoute = routedata.find((route) => route.FromRoute === fromRoute && route.toRoute === toRoute);
        if (selectedRoute) {
          return (
            <Link to={`/routes/${selectedRoute.customUrl}`}>{toRoute}</Link>
          );
        }
        return null;
      };
      
      
      const handleMenuClick = (menu) => {
        setActiveMenu(menu);
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
                                {uniqueFromRoutes.map((fromRoute) => (
                                    <li
                                        key={fromRoute}
                                        className={`menu-item ${activeMenu === fromRoute.FromRoute ? 'active' : ''}`}
                                        onClick={() => handleMenuClick(fromRoute)}
                                    >
                                        {fromRoute}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {renderData()}
                        <div className="citydata">
                            <h4>Popular Cities</h4>

                            <div className='menu-contents'>
                                <ul>

                                    {citydata.map((i, index) => (
                                        <li>  <Link to={`/city/${i.customUrl}`}> {i.footTitle} </Link> </li>
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