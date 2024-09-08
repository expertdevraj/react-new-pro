import React from 'react'

import BannerImage from '../assets/banerImge.jpg'

const InnerBanner = ({props2}) => {
  
  

  return (

    <>
        <div className="bannerSec innerBanner">
            <div className="bnrimg">
                <img src={BannerImage} alt="" />
                <div className="bnrtxt">
                    <div className="container">
                        <div className="bnrtxtinr">
                            <h2>{props2.innerHeading}</h2>
                            <p>{props2.innerContent}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default InnerBanner