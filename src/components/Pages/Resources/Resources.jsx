import React from 'react'
import './Resources.css'
import Footer from "../../Footer/Footer"
import cards from './media/cards';

const Resources = () => {

  return (
    <>
         <div className='resources_main'> 
      <h1 className='resources_h1'>The Ultimate 3D Guide by Our Experts</h1>
      
      <div className='resources_table'>
  <ul className='resources_table_column'>
    <li>
      <div className='resources_card'>
        <div className='resources_card_imgdiv'><img className='resources_card_img' src={cards.xeber1img}></img></div>
        <div className='resources_carddiv'>
            <h1>{cards.card1h1}</h1>
        <p>{cards.card1p}</p>
          <a href={cards.xeber1} >View in Instagram</a>
          </div>
      </div></li>
      <li>
      <div className='resources_card'>
        <div className='resources_card_imgdiv'><img className='resources_card_img' src={cards.xeber2img}></img></div>
        <div className='resources_carddiv'>
            <h1>{cards.card2h1}</h1>
        <p>{cards.card2p}</p>
          <a href={cards.xeber2} >View in Instagram</a>
          </div>
      </div></li>
      <li>
      <div className='resources_card'>
        <div className='resources_card_imgdiv'><img className='resources_card_img' src={cards.xeber3img}></img></div>
        <div className='resources_carddiv'>
            <h1>{cards.card3h1}</h1>
        <p>{cards.card3p}</p>
          <a href={cards.xeber3} >View in Instagram</a>
          </div>
      </div></li>
      <li>
      <div className='resources_card'>
        <div className='resources_card_imgdiv'><img className='resources_card_img'  src={cards.xeber4img}></img></div>
        <div className='resources_carddiv'>
            <h1>{cards.card4h1}</h1>
        <p>{cards.card4p}</p>
          <a href={cards.xeber4} >View in Instagram</a>
          </div>
      </div></li>
     
      
  </ul>

 
  
</div>
<div className='footer' id="footer_resources">
   
   <Footer/>
  </div>
</div>
    </>
  )
}

export default Resources