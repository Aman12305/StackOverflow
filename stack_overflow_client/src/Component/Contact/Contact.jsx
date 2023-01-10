import React from 'react'
import {FaLocationArrow ,} from 'react-icons/fa'
import {GoMailRead}  from 'react-icons/go'
import {IoCallSharp} from 'react-icons/io5'
import '../Auth/Auth.css'
import Contactform from './Contactform'

export default function Contact() {
  return (
    <div className="container">
      <div className="row">
      <div className="auth_leftcontainer">
        <GoMailRead style={{fontSize:"35px"}}/>
        <h1>Support & Feedback</h1>
        <div className='auth_leftcontainer_div'>
          <div><IoCallSharp/><span>+91 - 3456778607 </span></div>
          <div><FaLocationArrow/> <span>New York (HQ) Stack Exchange Inc. 110 William Street 28th Floor New York, NY 10038 </span> </div>
          <div><GoMailRead/> <span>legal@stackoverflow.com </span></div>
        </div>
        <p style={{maxWidth:"400px", paddingLeft:"10px" }}>If you need help, please contact us . To share product feedback on our products, please visit our community here.</p>
      </div>
      <div className="auth_rightcontainer">
          <Contactform/>
      </div>
      </div>
    </div>
  )
}
