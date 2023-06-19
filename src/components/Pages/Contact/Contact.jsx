import React from 'react'
import './Contact.css'
import back from './media/back.png'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom'

const Contact = () => {

  const  instagramlink = 'https://www.instagram.com/intech.main/';
  const facebooklink = 'https://www.facebook.com/people/InTech/100092457157651/?mibextid=LQQJ4d';
  const gmaillink = 'https://mail.google.com/mail/u/0/#search/itc.intech%40gmail.com?compose=new';
  return (

    <>
    <div className='contact_main'>
    <img className='contact_backimage' src={back} alt='' />
    <div className='contact_div'>
        <h3>Contact Us</h3>
        
        <ul className='links'>
        <li className='media' >
          <img className='link_logos' src='https://i.giphy.com/media/ein9jzZFhQJai7eqAE/giphy.webp' alt=''/> <p>+994 998 40 44 34</p>
        </li>
        <li className='media' >
          <img className='link_logos' src='https://i.pinimg.com/originals/9c/e6/6a/9ce66a7e1727003ea9351dd7a94ea121.gif'/><a href={instagramlink}>Instagram</a>
        </li>
        <li className='media'>
          <img className='link_logos' src='https://gifdb.com/images/file/email-icon-notification-cx5j6sw64pod96cr.gif'/><a href={gmaillink}>Gmail</a>
        </li>
        <li className='media'>
          <img className='link_logos' src='https://media0.giphy.com/media/uxPlGvoc1TlgPF0deH/giphy.gif?cid=ecf05e47xj9guzwz76xvpc17gcu0ykyhz144neg7adoy850i&ep=v1_stickers_search&rid=giphy.gif&ct=s'/>
          <a href={facebooklink}>Facebook</a>
        </li>
        
    </ul>
      </div>
      <div className='footer' id="footer_resources">
   
   <Footer/>
  </div>
     
    </div>
    </>
  )
}

export default Contact