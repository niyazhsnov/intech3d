import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import MyImage from "./media/inteclog_.png"
const Navbar = () => {
  return (
    <nav>
  <ul className='nav_img_div'> <li>   <Link className="li"  to="/"> <img className='nav_img' src={MyImage}  alt="logo_gif" /></Link>
     </li>
     <li>
      <ul className='right'>
        <li>
          <Link className="li" to="/services">Services</Link>
        </li> 
        <li>
          <Link  className="li" to="/about">About</Link>
        </li>
        <li>
          <Link  className="li" to="/materials">Materials</Link>
        </li>
        <li>
          <Link className="li" to="/resources">Resources</Link>
        </li>
        <li>
          <Link  className="li" to="/contact">Contact</Link>
        </li>
       

      </ul>
      </li>
      </ul> 
    </nav>
  )
}

export default Navbar
