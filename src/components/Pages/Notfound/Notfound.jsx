import React from 'react'
import back from './media/2488756.jpg'
import './notfound.css'
import {Parallax, ParallaxLayer } from '@react-spring/parallax'
const Notfound = () => {
  return <div >
    <Parallax className='paralax' pages={1} style={{zIndex:'-22',marginTop:'-2.7%',marginLeft:'-1px'}}>
      <ParallaxLayer>
      <img style={{width:'100%'}} src={back}></img>
      </ParallaxLayer>
    </Parallax>
  </div>
}

export default Notfound
