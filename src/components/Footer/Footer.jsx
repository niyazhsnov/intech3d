import React from 'react'
import "./Footer.css";
import axios from 'axios'
import facebook from './media/faceboo.png'
import linkedin from './media/linkedin.png'
import insta from './media/instg.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  const  instagramlink = 'https://www.instagram.com/intech.main/';
  const facebooklink = 'https://www.facebook.com/people/InTech/100092457157651/?mibextid=LQQJ4d';
  const gmaillink = 'https://mail.google.com/mail/u/0/#search/itc.intech%40gmail.com?compose=new';
  return (
    
    <div className='footer_div'>
    <div className='footer_contact'>
      <h4> Contact</h4>
      <p> Phone : +994 998 40 44 34 <br></br>
        Mail : <a className='fli' href={gmaillink}>itc.intech@gmail.com </a></p>
<Link   to="/contact"> <button  className='button1' >Contact Us</button></Link>
    </div>
    <ul>
      <h3>Menu</h3>
      <li><Link className="fli"  to="/"> Home</Link></li>
      <li>
    <Link className="fli" to="/services">Services</Link>
  </li> 
  <li>
    <Link  className="fli" to="/about">About</Link>
  </li>
  <li>
    <Link  className="fli" to="/materials">Materials</Link>
  </li>
  <li>
    <Link className="fli" to="/">Resources</Link>
  </li>
  <li>
    <Link  className="fli" to="/contact">Contact</Link>
  </li>
 
    </ul>
    <ul className='links'>
        <h3>Follow us on</h3> 
        
        <li ><img width='30px' src={facebook}></img><a href={facebooklink} className="fli">Facebook</a></li>
        <li> <img width='30px' src={linkedin}></img><a className="fli" href={ <Link to="*"></Link>}>LinkedIn</a></li>
        <li > <img width='30px' src={insta}></img><a className="fli" href={instagramlink}>Instagram</a></li>
    </ul>
  </div>
   

  )
}

export default Footer
