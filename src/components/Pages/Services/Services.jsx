
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import { Parallax,ParallaxLayer } from '@react-spring/parallax'
import "./Users2.css"

const User = () => {
  const backimage = 'https://static.wixstatic.com/media/c837a6_cfda4af88c6e416d83090a3fd76e6bbf~mv2.jpg/v1/fill/w_1519,h_758,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_cfda4af88c6e416d83090a3fd76e6bbf~mv2.jpg'
  const  instagramlink = 'https://www.instagram.com/intech.main/';
  return (
    <Parallax pages={3} style={{zIndex:'-22',marginTop:'-2.7%',height:'100%'}}>
         < ParallaxLayer offset={0} style={{background:'black'}}>
          <div className='section_layer'>
          <div className='section1_services'>
          <h1>What We Can Do For You</h1>
           <div className='section1_content_services'>
            <ul className='content1_ul'>
              <li className='lil'>
              <h3 className='h1'><span className='h3_span'></span>Rapid Prototyping</h3>
              <p className='p'>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
              </p>
              </li>
              <li className='lil'>
              <h3 className='h1'><span className='h3_span'></span>Design Services</h3>
              <p className='p'>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
              </p>
              </li>
            </ul>
            <ul className='content1_ul'>
            <li className='lil'>
              <h3 className='h1'><span className='h3_span'></span>Online 3D Printing</h3>
              <p className='p'>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
              </p>
              </li>
              <li className='lil'>
              <h3 className='h1'><span className='h3_span'></span>Post Processing</h3>
              <p className='p'>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
              </p>
              </li>
            </ul>
            </div>
          </div>

          </div>
           </ParallaxLayer>
           <ParallaxLayer offset={1} >
            <div className='section_layer2'>
            <div className='services_section2'>
             <h1>"We all have our time machines, don't we. Those that take us back are memories... those that carry us forward are dreams."</h1>
             <h5>H.G Wells</h5>
            </div>
          <img className='section2_background' src={backimage}></img>
          </div>
          

           </ParallaxLayer>
           <ParallaxLayer offset={2} style={{background:'#252934',zIndex:'-22'}}>
         <Footer/>
           </ParallaxLayer>
     </Parallax> 
    

  )
}

export default User;
