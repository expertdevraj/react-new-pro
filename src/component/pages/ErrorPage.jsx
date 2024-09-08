import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import InnerBanner from '../InnerBanner'

const ErrorPage = () => {

  const props2 = {innerHeading:"404 Error", innerContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
  return (
    <>

    <Header/>
    <InnerBanner props2={props2}/>

        <div className="aboutSec">
            <div className="container text-center">
                <h2>404 Error Page</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
        </div>
    <Footer/>
      
    </>
  )
}

export default ErrorPage
