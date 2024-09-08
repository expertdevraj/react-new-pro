import React from 'react'
import Navbar from './Navbar'
import Logo from '../assets/hderLogo.png'

const Header = () => {
  return (
    <>

    <header className="headersec">
        <div className="container">
            <div className="hderinr">
                <div className="hdrlgo">
                    <a href="/"><img src="assets/images/hderLogo.png" alt="" /><img src ={Logo} alt=""/></a>
                </div>
                <div className="hdrmnu">
                    <Navbar/>                    
                </div>
                <div className="hderinfo">
                    <ul>
                        <li><a href="mailto:info@oilandgas.com"><span className="icon-Vector-91"></span>info@oilandgas.com</a></li>
                        <li><a href="tel:491234567890"><span className="icon-Vector-10"></span>+49 123 456 7890</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
      
    </>
  )
}

export default Header
