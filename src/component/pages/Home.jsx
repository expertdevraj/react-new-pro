import React from 'react'
import {NavLink} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Header from '../Header'
import BannerSlider from '../BannerSlider'
import Footer from '../Footer'

import Abtimge1 from '../../assets/abtimge1.jpg'
import Abtimge2 from '../../assets/abtimge2.jpg'
import WrkProce_icon1 from '../../assets/wrkProce_icon1.png'
import WrkProce_icon2 from '../../assets/wrkProce_icon2.png'
import WrkProce_icon3 from '../../assets/wrkProce_icon3.png'
import RghtArw from '../../assets/rghtArw.png'
import Logistics_imge1 from '../../assets/logistics_imge1.jpg'
import Logistics_imge2 from '../../assets/logistics_imge2.jpg'
import Faciliti_icon3 from '../../assets/faciliti_icon3.png'
import Faciliti_icon1 from '../../assets/faciliti_icon1.png'
import Faciliti_icon2 from '../../assets/faciliti_icon2.png'
import Product_imge1 from '../../assets/product_imge1.jpg'
import Product_imge2 from '../../assets/product_imge2.jpg'
import Product_imge3 from '../../assets/product_imge3.jpg'
import Product_imge4 from '../../assets/product_imge4.jpg'
import FacilitiImge from '../../assets/facilitiImge.jpg'


const Home = () => {

  const props = {innerHeading:"Oil & Gas", innerContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
  
  return (
    <>

        <Header/>
        <BannerSlider props={props}/>

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

        <div className="workProceSec">
          <div className="container">
            <div className="workProHed">
              <h3>Our Work Process</h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="workProceBxs wow fadeIn" data-wow-delay="0.1s">
                  <strong>Step 01</strong>
                  <i className="circleWrk"></i>
                  <div className="media">
                    <figure>
                      <img src={WrkProce_icon1} alt="" />
                    </figure>
                    <div className="media-object">
                      <h3>Energy products</h3>
                    </div>
                  </div>
                  <div className="workProceCon">
                    <p>Sustainable practices are essential to ensuring that Oil and Gas Supply Pipeline LLC. continues to thrive in the long-term, and that it remains  one of the world’s largest integrated energy and chemicals companies  throughout the global energy transition.</p>
                  </div>					
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="workProceBxs wow fadeIn" data-wow-delay="0.2s">
                  <strong>Step 01</strong>
                  <i className="circleWrk"></i>
                  <div className="media">
                    <figure>
                      <img src={WrkProce_icon2} alt="" />
                    </figure>
                    <div className="media-object">
                      <h3>Sustainable business operations</h3>
                    </div>
                  </div>
                  <div className="workProceCon">
                    <p>Pursuing low carbon energy solutions, and strategically investing for growth.</p>
                  </div>					
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="workProceBxs wow fadeIn" data-wow-delay="0.3s">
                  <strong>Step 01</strong>
                  <i className="circleWrk"></i>
                  <div className="media">
                    <figure>
                      <img src={WrkProce_icon3} alt="" />
                    </figure>
                    <div className="media-object">
                      <h3>Technology development</h3>
                    </div>
                  </div>
                  <div className="workProceCon">
                    <p>Continuous investment in technology is an essential enabler of our company’s long-term viability. Our approach helps to reinforce our global position in oil and gas by driving production efficiency and resilience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="workProcBtn">
              <NavLink to="/about-us" className="defultBtn">Read More<i><img src={RghtArw} alt="" /></i></NavLink>
            </div>
          </div>
        </div>

        <div className="productSec">
          <div className="container">
            <div className="pghding">
              <h2>Our Products</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="productBxs wow fadeIn" data-wow-delay="0.1s">
                  <figure>
                    <NavLink to="/contact-us"><img src={Product_imge1} alt="" /></NavLink>
                  </figure>
                  <div className="productCon">
                    <h4><NavLink to="/contact-us">Aviation KeroSene</NavLink></h4>
                    <NavLink to="/contact-us" className="redlnk">Read More<i><img src={RghtArw} alt="" /></i></NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="productBxs wow fadeIn" data-wow-delay="0.2s">
                  <figure>
                    <NavLink to="/contact-us"><img src={Product_imge2} alt="" /></NavLink>
                  </figure>
                  <div className="productCon">
                    <h4><NavLink to="/contact-us">Aviation Turbine Jet A-1</NavLink></h4>
                    <NavLink to="/contact-us" className="redlnk">Read More<i><img src={RghtArw} alt="" /></i></NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="productBxs wow fadeIn" data-wow-delay="0.3s">
                  <figure>
                    <NavLink to="/contact-us"><img src={Product_imge3} alt="" /></NavLink>
                  </figure>
                  <div className="productCon">
                    <h4><NavLink to="/contact-us">Virgin D6 Fuel Oil</NavLink></h4>
                    <NavLink to="/contact-us" className="redlnk">Read More<i><img src={RghtArw} alt="" /></i></NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="productBxs wow fadeIn" data-wow-delay="0.4s">
                  <figure>
                  <NavLink to="/contact-us"><img src={Product_imge4} alt="" /></NavLink>
                  </figure>
                  <div className="productCon">
                    <h4><NavLink to="/contact-us">Diesel Gasoil L-0.2-62</NavLink></h4>
                    <NavLink to="/contact-us" className="redlnk">Read More<i><img src={RghtArw} alt=""/></i></NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="productBtn">
              <NavLink to="/contact-us" className="defultBtn">Request a Quote<i><img src={RghtArw} alt=""/></i></NavLink>
            </div>
          </div>
        </div>

        <div className="facilitiSec">
          <div className="container">
            <div className="pghding wow fadeInUp">
              <h2>Storage Facilities</h2>
              <b>We carry out trans-shipment of up to 1 million tons per year of all  types of petroleum products, including low-sulfur and high-sulfur fuel  oil, diesel and marine fuel, all types of gasoline and oils, additives,  petrochemicals and refined products.</b>
              <p>From refinery to distribution, pipelines and terminals serve as the  delivery hub of the energy sector. Crude oil, natural gas and petroleum  products must be transported and stored safely and economically.  Accurate accounting of flows, eliminating risk to the environment, and  delivering product when and where its needed are the biggest challenges  in this sector.</p>
            </div>
            <div className="facilitipnel">
              <div className="media">
                <figure className="wow fadeInRight">
                  <img src={FacilitiImge} alt="" />
                </figure>
                <div className="media-object wow fadeInLeft">
                  <h4>Strategic Cooperation</h4>
                  <p>OIL AND GAS SUPPLY PIPELINE STRATEGIC COOPERATION WITH THE MAIN PORT OIL TERMINALS, AS WELL AS WITH THE PORT OF HOUSTON, ROTTERDAM IN ORDER TO INCREASE OUR CAPACITY TANK FARM FOR STORAGE AND TRANSHIPMENT OF OIL CARGO.</p>
                  <p>Geographic focus of Oil and Gas Supply Pipeline LLC covers all  major Kazakhstan ports of the Far East, the Black Sea, Baltic and the  Caspian regions.  The composition of Oil and Gas Supply Pipeline  LLC includes the two largest ports by cargo turnover Kazakhstan – Kuryk  on the Caspian Sea and on the Baltic Sea, which gives it a leading  position in the Kazakhstani market for storage and transshipment of  petroleum cargo. In addition, the company is constantly expanding the  geography of its activities and now also provides tank farm storage  services services of crude oil and refined petroleum products in the  ports:</p>
                  <div className="facilitiLst">
                    <ul>
                      <li>- Port of Bautino</li>
                      <li>- Port of Pavlodar</li>
                      <li>- Port of Atyrau</li>
                    </ul>
                    <ul>
                      <li>- Port of Kuryk</li>
                      <li>- Port of Öskemen</li>
                      <li>- Port of Semey</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="facilitiSldr wow fadeInUp">


                <OwlCarousel margin={10} items={3}>
                <div className="item">
                  <div className="facilitiBxs">
                    <figure>
                      <img src={Faciliti_icon1} alt="" />
                    </figure>
                    <h3>Our Storage Abilities</h3>
                    <p>Oil and Gas Supply Pipeline LLC is among the leading companies in Kazakhstan engineering services in terms of petroleum and petrochemical /chemical industries. The company is a expanding in holding and carries out a long intricate of works for oil and gas industry, including the  visionary and well analyzed engineering in terms of tank farms, petrol stations ; manufacturing and installation (including RVS, RGS) up to 65000 m3) for the storage of oil, chemicals, project management, oil products, water, vegetable oils; production capacities; qualified  engineering, supply of materials and equipment, utilization and processing of scrap, construction and certification of objects. The enterprise specializes in the manufacture of tanks of hot water, the  production of tanks, vessels, and separators.</p>
                  </div>
                </div>

                <div className="item">
                  <div className="facilitiBxs">
                    <figure>
                      <img src={Faciliti_icon2} alt="" />
                    </figure>
                    <h3>List of Terminals</h3>
                    <ul>
                      <li>RUSSIAN PORTS: Novorossiysk, Novosibirsk, Primorsk, Vladivostok, Nakhodka. (TANK FARM IN RUSSIAN PORT)</li>
                      <li>SINGAPORE PORT:(TANK FARM IN SINGAPORE PORT)</li>
                      <li>HOUSTON PORT: Texas City Port. (TANK FARM IN HOUSTON PORT)</li>
                      <li>KAZAKHSTAN PORTS: Aktau, Bautino, Pavlodar, Atyrau, Kuryk, Öskemen, Semey</li>
                      <li>OIL AND GAS SUPPLY PIPELINE LLC STORAGE TANK DESIGN</li>
                      <li>Oil and Gas Supply Pipeline LLC is one of the very few storage tank contractors to retain an in-house storage tank design team, with all its attendant benefits.</li>
                    </ul>
                  </div>
                </div>

                <div className="item">
                  <div className="facilitiBxs">
                    <figure>
                      <img src={Faciliti_icon3} alt="" />
                    </figure>
                    <h3>Their Experience Covers</h3>
                    <ul>
                      <li>Storage tank design API 650, API 620, EN14015, API 653 and EEMUA 159</li>
                      <li>Floating roof design</li>
                      <li>Fixed roof design</li>
                      <li>Storage tank assessments</li>
                      <li>Failure investigations</li>
                      <li>Design verification</li>
                      <li>Tank repairs</li>
                      <li>Tank jacking</li>
                      <li>Structural design</li>
                      <li>Mechanical equipment selection</li>
                      <li>Relief valve sizing and selection</li>
                      <li>Hemispheroid tank design</li>
                    </ul>
                  </div>
                </div>
                </OwlCarousel>

            </div>
          </div>
        </div>

        <div className="logisticsSec">
          <div className="container">
            <div className="logisticspnle">
              <div className="media">
                <div className="logisticsImg wow fadeInLeft">
                  <ul>
                    <li><img src={Logistics_imge1} alt="" /></li>
                    <li><img src={Logistics_imge2} alt="" /></li>
                  </ul>
                </div>
                <div className="media-object wow fadeInRight">
                  <h2>Logistics</h2>
                  <b><em>Our logistics are focused on:</em> International Supply Chain Management, Project Management, Oil Rig Movements/Re-Supply, and Warehouse Solutions.</b>
                  <h3>Specialists For Oil And Gas Logistics:</h3>
                  <p>Safety is especially important in Oil & Gas supply chains. Oil and  Gas Supply Pipeline LLC can assist you in every step of the process,  thanks to our tailored services: from the safe and efficient transportation of oil & gas products, to international project  coordination, anywhere in the world.</p>
                  <h4>TENGE OIL & GAS LAUNCHES NEW LOGISTICS SCHEME FOR TRANSSHIPMENTS OF OIL:</h4>
                  <p>The specificity of Kazakhstan’s natural, climatic and geological conditions is that the most resource-rich areas are located in the Arctic and sub-Arctic regions.</p>
                  
                  <NavLink to="/contact-us" className="defultBtn">Request a Quote<i><img src={RghtArw} alt=""/></i></NavLink>

                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>

    </>
  )
}

export default Home
