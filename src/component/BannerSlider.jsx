import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BannerImage from '../assets/banerImge.jpg'

import Icon from '../Icon';

const BannerSlider = ({props}) => {

    

  
  return (
    <>     

      <div className="bannerSec">        
      <Icon icon="icon-Vector-10" size={20} color="orange" />
      <Icon icon="pencil" size={20} color="orange" />
      <OwlCarousel margin={5} center items={1}>
            <div className="item">
                <div className="bnrimg">
                    <img src={BannerImage} alt="" />
                    <div className="bnrtxt">
                        <div className="container">
                            <div className="bnrtxtinr">
                                <h2>{props.innerHeading}</h2>
                                <p>{props.innerContent}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="bnrimg">
                    <img src={BannerImage} alt="" />
                    <div className="bnrtxt">
                        <div className="container">
                            <div className="bnrtxtinr">
                                <h2>Donec blandit imperdiet augue</h2>
                                <p>Sed ultrices eros id blandit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit duis ut</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="bnrimg">
                    <img src={BannerImage} alt="" />
                    <div className="bnrtxt">
                        <div className="container">
                            <div className="bnrtxtinr">
                                <h2>Donec blandit imperdiet augue</h2>
                                <p>Sed ultrices eros id blandit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit duis ut</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="bnrimg">
                <img src={BannerImage} alt="" />
                    <div className="bnrtxt">
                        <div className="container">
                            <div className="bnrtxtinr">
                                <h2>Donec blandit imperdiet augue</h2>
                                <p>Sed ultrices eros id blandit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit duis ut</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>

            
        </div>

    </>
  )
}

export default BannerSlider
