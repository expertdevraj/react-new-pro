import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import InnerBanner from '../InnerBanner'

import Abtimge1 from '../../assets/abtimge1.jpg'
import Abtimge2 from '../../assets/abtimge2.jpg'


const About = () => {
  const props2 = {innerHeading:"About Us", innerContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
  return (
    <>

    <Header/>

    <InnerBanner props2={props2}/>

    <div className="aboutSec">
        <div className="container">
        <div className="aboutpnl">
            <div className="media">
            <div className="abtimge wow fadeInRight">
                <img src={Abtimge1} alt="" />
                <figure>
                <img src={Abtimge2} alt="" />
                </figure>
            </div>
            <div className="media-object wow fadeInLeft">
                <h1>About Oil and Gas</h1>
                <p className="defntTxt">OIL AND GAS SUPPLY PIPELINE LLC. is a leading, integrated, downstream  energy company headquartered in Kazakhstan.</p>
                <p>The company operates the  nation's largest refining system. Oil and Gas Supply Pipeline LLC.. The  marketing system includes branded locations across Kazakhstan including  retail outlets.We also own and operate gathering, processing, and  fractionation assets, as well as crude oil and light product  transportation and logistics infrastructure.</p>
                <h3>What Makes Us Stand Out</h3>
                <h4>Our perspective</h4>
                <p>We believe in the power of energy to transform lives, enhance communities, advance human progress, and sustain our planet.</p>
                <h4>What We Do</h4>
                <p>We continually seek new opportunities to expand and diversify our energy  products portfolio, with the intent of creating additional value for  Kazakhstan, and offering innovative solutions to our customers around  the world.</p>
                <h4>Ethics and governance</h4>
                <p>Our ethics and compliance principles are deeply embedded within our  corporate culture and form the basis for a suite of policies, codes and  guidelines that guide and inform our employees as they implement the  company’s business strategy.</p>
            </div>
            </div>
        </div>
        </div>
    </div>

    <Footer/>
      
    </>
  )
}

export default About
