import React from 'react'
import back1 from './media/aboutback1.jpg'
import image from './media/aboutsection1_div.jpg'
import Footer from '../../Footer/Footer'
import './About.css'
import { Parallax,ParallaxLayer } from '@react-spring/parallax'
const About = () => {
  return (
    <Parallax pages={3} style={{zIndex:'-22',marginTop:'-2.7%'}}>
    <ParallaxLayer offset={0} style={{background:'black'}}>
    
      <div className='about_section1'>
         <h1 className='about_section1_title'>
          Who We Are
         </h1>
         <div className='about_section1_div'>
          <div className='about_section1_text'>
            <h3 className='about_section1_h3'>
              
I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
            </h3>
            <p  className='about_section1_p'>

            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
           <img className='about_section1_img' src='http://3.123.22.66/django_media/about_page/about-page-3d-printer.jpg'/>
         </div>
      </div>
      
    </ParallaxLayer>
    <ParallaxLayer offset={1} style={{zIndex:'10'}}>

    <div className='section2_about'>
    <div className='about_section2_etiket'>Our Mission</div>
    <div className='about_section2_text'>
       <h1>
       I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
       </h1>
       <p>
       I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
       </p>
    </div>
    <div className='about_section2_table' >
    <div className='about_section2_table_etiket'>Core Values</div>
    <ul >
      
      <li className='td_table'>
        <div className='h3_div'><div className='h3_span'></div><h3>Innovation</h3></div>
          <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </li >
      <li className='td_table'>
        <div className='h3_div'><div className='h3_span'></div><h3>Transparency</h3></div>
          <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </li>
      <li className='td_table'> 
        <div className='h3_div'><div className='h3_span'></div><h3>Accessibility</h3></div>
          <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </li>
      
    </ul>
    </div>
    </div>
    <img width='100%'className='section2_about_back' src='http://3.123.22.66/django_media/about_page/about-page-image.jpg'/>
    </ParallaxLayer>
    
    <ParallaxLayer  offset={2} style={{background:'#252934',zIndex:'9'}}>
          <Footer/>
        </ParallaxLayer>
  </Parallax>
  )
}

export default About