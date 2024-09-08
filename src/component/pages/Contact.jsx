import React,{useState} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import InnerBanner from '../InnerBanner'

const Contact = () => {

  const[form,setForm] = useState({})

  const handleForm =(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const props2 = {innerHeading:"Contact Us", innerContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
  return (
    <>
    <Header/>
    <InnerBanner props2={props2}/>        

    <div className="aboutSec contactpage">
        <div className="container">
           <div className='row'>
                <div className="col-lg-3 col-md-6">
                    <div className="ftrinfo wow fadeIn" data-wow-delay="0.3s">
                        <ul>
                            <li>
                                <span className="icon-Vector-8"></span>
                                <p>Prawsent vehicula vulputate ligula <br/> id auctor, 0101 Berlin</p>
                            </li>
                            <li>
                                <span className="icon-Vector-91"></span>
                                <p><a href="mailto:info@oilandgas.com">info@oilandgas.com</a></p>
                            </li>
                            <li>
                                <span className="icon-Vector-10"></span>
                                <p><a href="tel:491234567890">+49 123 456 7890</a></p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-7 col-md-6">
                    <div className='contactForm'>
                      <p>Please fill the form below.</p>
                      <form>
                        <input type='text' name='name' value={form.name?form.value:""} placeholder='Your Name' onChange={handleForm}></input>
                        <input type='email' name='email' value={form.email?form.value:""} placeholder='Your Email' onChange={handleForm}></input>
                        <input type='tel' name='phone' value={form.phone?form.value:""} placeholder='Your Phone' onChange={handleForm}></input>
                        <textarea name='msg' value={form.msg?form.value:""} placeholder='Your Message' onChange={handleForm}></textarea>
                        <input type='submit' className='defultBtn'></input>
                      </form>
                    </div>
                </div>


           </div>
        </div>
    </div>
    
    

    <Footer/>
    </>
  )
}

export default Contact
