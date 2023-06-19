

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactSimplyCarousel from 'react-simply-carousel';
import carousel1 from './media/carousel1.jpg'
import back2 from './media/file.mp4'
import svg1 from './media/section3.1__.png'
import svg2 from './media/section3.2.png'
import moci from './media/mico.png'
import ionia from './media/ionia.png'
import dimenxen from './media/dimenxen.png'
import video from './media/home-page-video.mp4'
import drolo from './media/drolo.png'
import topli from './media/topli.png'
import adam1 from './media/adam1.jpg'
import svg3 from  './media/section3.3.png'
import svg4 from './media/section3.4.png'
import back3 from './media/c837a6_1164bd9a80a84d56b72dfd9692fd0c03~mv2.jpg'
import back1 from './media/back1.jpg'
import back4 from './media/footer.png'
import plastic from './media/plastic.jpg'
import metal from './media/metal.jpg'
import vase from './media/vase.jpg'
import Footer from '../../Footer/Footer'

import { Parallax,ParallaxLayer } from '@react-spring/parallax'
import "./Home.css" 
const Home = () => {
  const  instagramlink = 'https://www.instagram.com/intech.main/';
  
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <Parallax pages={8} style={{zIndex:'-22',marginTop:'-2.7%',height:'100%'}}>
        <ParallaxLayer offset={0}>
          <div className='section2'>
        <div style={{position:'absolute',top:'25%',left:'7%',width:'800px',color:'white'}}>
        
        <h1 style={{marginBottom:'10px',fontSize:'80px',fontWeight:'400',fontFamily:'sans-serif',textAlign:'left'}}>Make Your 3D Dreams a Reality  </h1>
        <p style={{fontSize:'24px'}}>Professional 3D Solutions Under One Roof</p>
        <div style={{marginTop:'20px'}} >
        <Link   to="/contact"> <button  className='button1' >Contact Us</button></Link>
          <Link to='/materials'><button className='button2' >View Materials Catalog</button></Link>
        </div>
       
        </div>
        <ul className='section1_footer'> 
       <li> <div className='span'></div>Up to 1,000 Parts </li>
        <li><div className='span'></div>30+ Materials Available</li>
        <li><div className='span'></div>Available in 57 Countries</li>
       <li> <div className='span'></div> 42 Industrial Printers</li>
        </ul></div>
        <img width='100%'  src='https://static.wixstatic.com/media/c837a6_12191520cc14491e89ef1e75e5bbf40d~mv2.jpg/v1/fill/w_1519,h_1100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_12191520cc14491e89ef1e75e5bbf40d~mv2.jpg' alt=''></img>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
        <Link   to="/about"> <button  className='button3' >Learn More</button></Link>
       
          <div className='section2'>
            
            <div className='section2_etiket'>What We Offer</div>
            <div className='section2_content' >
              <p style={{fontSize:"45px",lineHeight:'55px'}}>
              As 3D manufacturing becomes more and more accessible, we provide industrial solutions for the entire 3D process, from prototyping to industrial printing.
               
              </p>
      
               
            </div>
          </div>
         <video width='100%' loop autoPlay muted><source src={video} type="video/mp4"/></video>
        
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <div className='section3'>
            <div className='section3_etiket'>
              Why Choose InTech
            </div>
            <div className='section3_content'>
              <ul  >
                <li style={{display:'flex'}}>
                <div ><img alt='' width='60px' src={svg1}></img>
                <p className='card_title'>Cutting Edge <br></br> Printers</p>
                <p style={{marginTop:'-6%'}}>I'm a paragraph. Click here to add<br></br> your own text and edit me. Let your <br></br> users get to know you.</p>
                </div>
                <div style={{marginLeft:'90px'}}><img width='60px' src={svg2} alt=''></img>
                <p className='card_title'>Durable, High <br></br>quality materials</p>
                <p className='card_p'>I'm a paragraph. Click here to add <br></br>your own text and edit me. Let your <br></br>users get to know you.</p>
               
                </div>

                </li>
                <li style={{display:'flex',marginTop:'5%'}}>
                  <div>
                <img alt='' width='60px' src={svg3} ></img>
                <p className='card_title'>Bespoke<br></br>
Service</p>
                <p className='card_p'>I'm a paragraph. Click here to add <br></br>your own text and edit me. Let your <br></br>users get to know you.</p>
               
                </div>
                <div  style={{marginLeft:'90px'}} >
                <img alt='' width='60px' src={svg4} ></img>
                <p className='card_title'>Experienced<br></br> Advisor Service</p>
                <p className='card_p'>I'm a paragraph. Click here to add <br></br>your own text and edit me. Let your <br></br>users get to know you.</p>
               
                </div>
                </li>
              </ul>
          

            </div>
         
          </div>
        <img width='100%' src='https://static.wixstatic.com/media/c837a6_1164bd9a80a84d56b72dfd9692fd0c03~mv2.jpg/v1/fill/w_1823,h_995,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_1164bd9a80a84d56b72dfd9692fd0c03~mv2.jpg' alt=''/>

        </ParallaxLayer>
       < ParallaxLayer offset={3} style={{background:'black'}}>
       <div className='section4_content'>
       <div className='section4_etiket'>
       We Keep Top Notch Materials
            </div>
           <ul className='section4_cards'>
            <li className='section4_card'>
              <div className='dene1'>
                <img alt='' className='dene' src='https://static.wixstatic.com/media/c837a6_a16c0600747c43ac9446383802517898~mv2.jpg/v1/fill/w_420,h_315,q_90/c837a6_a16c0600747c43ac9446383802517898~mv2.jpg' />
              </div>
              <p className='section4_card_title'>Plastic</p>
            </li>
            <li className='section4_card'>
            <div className='dene1'>
                <img alt='' className='dene' src='https://static.wixstatic.com/media/c837a6_fedc97e9df8c47b7b8b4d79e3c753aef~mv2.jpg/v1/fill/w_420,h_315,q_90/c837a6_fedc97e9df8c47b7b8b4d79e3c753aef~mv2.jpg' ></img>
              </div>
              <p className='section4_card_title'>Metal</p>
            </li>
            <li className='section4_card'>
            <div className='dene1'>
                <img alt='' className='dene' src='https://static.wixstatic.com/media/c837a6_2cebc290dc794c1ca710a99980a465bb~mv2.jpg/v1/fill/w_419,h_315,q_90/c837a6_2cebc290dc794c1ca710a99980a465bb~mv2.jpg'></img>
              </div>
              <p className='section4_card_title'>Elastomer</p>
            </li>
            
           </ul>
           <Link   to="/materials">  <div className='material_button'><button className='button6'>See Catalog</button></div></Link>
        </div>
       </ParallaxLayer>
        <ParallaxLayer offset={4} style={{background:'#252835'}} >
        <div className='section5_etiket'>
       Testimonals
            </div>
         <ul className='section5_cards'>
          <li className='section5_card'>
              <p style={{display:'flex',alignItems:'center'}}><div className='span1'></div>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p>
            <div style={{display:'flex',marginTop:'15%',alignItems:'center'}}>
              <img className='author_image' alt='' src={adam1}></img>
              <div >
                <b>Lyla Rosen</b>
                <p>Chief Product Officer, Mico</p>
              </div>
            </div>
          </li>
          <li className='section5_card'>
              <p style={{display:'flex',alignItems:'center'}}><div className='span1'></div>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p>
            <div style={{display:'flex' ,marginTop:'15%',alignItems:'center'}}>
              <img className='author_image' alt='' src={adam1}></img>
              <div >
                <b>Lyla Rosen</b>
                <p>Chief Product Officer, Mico</p>
              </div>
            </div>
          </li>
          <li className='section5_card'>
              <p style={{display:'flex',alignItems:'center'}}><div className='span1'></div>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p>
            <div style={{display:'flex',marginTop:'15%',alignItems:'center'}}>
              <img className='author_image' alt='' src={adam1}></img>
              <div >
                <b>Lyla Rosen</b>
                <p>Chief Product Officer, Mico</p>
              </div>
            </div>
          </li>
         </ul>
        </ParallaxLayer>
        <ParallaxLayer offset={5} style={{background:'black'}} >
       <div className='section6'>
        <p className='section6_title'>The Possibilities Are Endless</p>
        
        <ReactSimplyCarousel 
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={2}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '80px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            
          },
          children: <span>{`›`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '80px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            marginRight:'20px'
          },
          children: <span>{`‹`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 1500,
            maxWidth:10000,
          },
        ]}
        speed={400}
        easing="linear"
         >
        <div  className='carousel_img'>
          <img className='carousel_imgimg'  src={carousel1}></img>
          <p>image title</p>
        </div>
        <div className='carousel_img'>
        <img className='carousel_imgimg'  src='https://static.wixstatic.com/media/c837a6_6b4a80d4ade941afa57521ac565576ed~mv2.jpg/v1/fill/w_307,h_275,q_90/c837a6_6b4a80d4ade941afa57521ac565576ed~mv2.jpg'></img>
        <p>image title</p>
        </div>
        <div className='carousel_img'>
        <img className='carousel_imgimg'  src='https://static.wixstatic.com/media/c837a6_5bd6842306eb40ea81ee102ddf3ae51c~mv2.jpg/v1/fill/w_307,h_275,q_90/c837a6_5bd6842306eb40ea81ee102ddf3ae51c~mv2.jpg'></img>
        <p>image title</p>
        </div>
        <div className='carousel_img'>
        <img className='carousel_imgimg'  src='https://static.wixstatic.com/media/c837a6_ac8ff964db99413a910478b09141b70d~mv2.jpg/v1/fill/w_307,h_275,q_90/c837a6_ac8ff964db99413a910478b09141b70d~mv2.jpg'></img>
        <p>image title</p>
        </div>
        <div className='carousel_img'>
        <img className='carousel_imgimg'  src='https://static.wixstatic.com/media/c837a6_06310f296d834268991d3dcba2a2d3e2~mv2.jpg/v1/fill/w_307,h_275,q_90/c837a6_06310f296d834268991d3dcba2a2d3e2~mv2.jpg'></img>
        <p>image title</p>
        </div>
        <div className='carousel_img'>
        <img className='carousel_imgimg' src='https://static.wixstatic.com/media/c837a6_d3ee39380b11409d92aa82f1a280a3df~mv2.jpg/v1/fill/w_307,h_275,q_90/c837a6_d3ee39380b11409d92aa82f1a280a3df~mv2.jpg'></img>
        <p>image title</p>
        </div>
        <div className='carousel_img'>
        <img className='carousel_imgimg'  src='https://static.wixstatic.com/media/c837a6_52ff9d68a80b4e36a20487b8e4aff855~mv2.jpg/v1/fill/w_307,h_275,q_90/c837a6_52ff9d68a80b4e36a20487b8e4aff855~mv2.jpg'></img>
        <p>image title</p>
        </div>
       
      </ReactSimplyCarousel>
       </div>
       </ParallaxLayer>
       <ParallaxLayer offset={6} style={{background:'black'}} >
       <div className='section6_etiket'>
       Our Clients</div>
       <table className='section6_tabler'>
                <tr >
                  <td className='section6_table' ><img src='https://img001.prntscr.com/file/img001/T-P_wGZrSDCxucpx8tKCOQ.png'/></td>
                  <td className='section6_table'><img src='https://img001.prntscr.com/file/img001/21nJBkuhT0KR9glJ87oEyg.png'/></td>
                  <td className='section6_table'><img src='https://img001.prntscr.com/file/img001/9SKGEHRuRWK-5F2vGRyFOg.png'/></td>
                  <td className='section6_table'><img src='https://img001.prntscr.com/file/img001/DcCKB0WwRCmk3LKnqQIMIw.png'/></td>
                  <td className='section6_table'><img src='https://img001.prntscr.com/file/img001/qnjeiS_5R-iCcBplu8tj0w.png'/></td>
                </tr>
              </table>
            
             
      
    </ParallaxLayer>
    <ParallaxLayer offset={7} className='footer'>
   <Footer/>


      </ParallaxLayer>

      </Parallax>
      
      
  )
}

export default Home
