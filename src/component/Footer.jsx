import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import FooterLogo from '../assets/foterLgo.png'
import FooterBG from '../assets/foterBack.jpg'

const Footer = () => {
    
  return (
    <> 
          
      <footer className="footerSec lazy" style={{ backgroundImage: 'url(' + FooterBG + ')' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="foterlFt wow fadeIn" data-wow-delay="0.1s">
                        <NavLink to="/" className="foterLgo"><img src= {FooterLogo} alt="" /></NavLink>
                            <p>© 2024 Oil And Gas. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="foterlnk wow fadeIn" data-wow-delay="0.2s">
                            <h3>Sitemap</h3>                            
                            <Navbar/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <div className="ftrinfo wow fadeIn" data-wow-delay="0.3s">
                            <h3>Contact Info</h3>
                            <ul>
                                <li>
                                    <span className="icon-Vector-8"></span>
                                    <p>Prawsent vehicula vulputate ligula <br/> id auctor, 0101 Berlin</p>
                                </li>
                                <li>
                                    <span className="icon-Vector-91"></span>
                                    <p><NavLink to="mailto:info@oilandgas.com">info@oilandgas.com</NavLink></p>
                                </li>
                                <li>
                                    <span className="icon-Vector-10"></span>
                                    <p><NavLink to="tel:491234567890">+49 123 456 7890</NavLink></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="ftrsocil wow fadeIn" data-wow-delay="0.4s">
                            <h3>Follow us</h3>
                            <ul>
                                <li><NavLink to="#url" target="_blank"><span className="icon-facebook-logo"></span>Facebook</NavLink></li>
                                <li><NavLink to="#url" target="_blank"><span className="icon-Vector-9"></span>Twitter</NavLink></li>
                                <li><NavLink to="#url" target="_blank"><span className="icon-linkedin"></span>Linkedin</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mobileDisply">
                        <div className="foterlFt wow fadeIn" data-wow-delay="0.5s">
                            <p>© 2024 Oil And Gas. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </>
  )
}

export default Footer
