import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faTiktok, faWhatsapp, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {  
  return (
    <div className='footer'>
        <p className='main-p'>Subscribe to our daily newsletter</p> <br />
        <p className='sub-p'>Be the first to know about releases and industry news insights.</p>
        <span>
            <input className='input' type="email" placeholder="Enter your email" id="" autoComplete='email' required/>
            <button>Subscribe</button>
            <div className="response"></div>
        </span>
        <div className="icons">
          <ul class="ul">   
            <FontAwesomeIcon size='2x' icon={faFacebook} className='font-icons'/>
            <FontAwesomeIcon size='2x' icon={faInstagram} className='font-icons'/>
            <FontAwesomeIcon size='2x' icon={faTwitter} className='font-icons'/>
            <FontAwesomeIcon size='2x' icon={faWhatsapp} className='font-icons'/>
            <FontAwesomeIcon size='2x' icon={faPinterest} className='font-icons'/>
          </ul>
        </div>
        <p className='sub-sub-p'>© Copyright EDUSITY HOMES 2024. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
