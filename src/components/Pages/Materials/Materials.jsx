import React from 'react'
import { Parallax,ParallaxLayer } from '@react-spring/parallax'
import './Materials.css'
import Footer from '../../Footer/Footer'
const Materials = () => {
  return (
    <>
    <div className='materials_main'> 
      <h1 className='materials_h1'>We Keep Top Notch Materials</h1>
      <p className='materials_title'>Highest quality materials provide highest quality products</p>

      <div className='materials_table'>
  <ul className='materials_table_column'>
    <li>   <div className='materials_table_etiket'>Plastic</div></li>
    <li><img alt='' className='materials_table_img' src='http://3.123.22.66/django_media/materials/materials-plastic.jpg' /></li>
    <div className='materials_table_column_titles'>
    <li><p>POM (Delrin/Acetal)</p></li>
    <li><p>Nylon</p></li>
    <li><p>ABS</p></li>
    <li><p>PEEK</p></li>
    <li><p>Polycarbonate</p></li>
    <li><p>Polyethylene</p></li>
    <li><p>PVC</p></li>
    <li><p>PMMA (Acrylic)</p></li>
    <li><p>PET</p></li>
    <li><p>Polypropylene</p></li>
    </div>
  </ul>
  <ul className='materials_table_column'>
    <li>   <div className='materials_table_etiket'>Metal</div></li>
    <li><img alt='' className='materials_table_img' src='http://3.123.22.66/django_media/materials/materials-metal.jpg' /></li>
    <div className='materials_table_column_titles'>
    <li><p>Aluminum</p></li>
    <li><p>Stainless steel</p></li>
    <li><p>Mild steel</p></li>
    <li><p>Brass</p></li>
    <li><p>Copper</p></li>
    <li><p>Tool steel</p></li>
    <li><p>Titanium</p></li>
    <li><p>Inconel</p></li>
    <li><p>Magnesium</p></li>
    <li><p>Invar</p></li>
    </div>
  </ul>
  <ul className='materials_table_column'>
    <li>   <div className='materials_table_etiket'>Elastomer</div></li>
    <li><img alt='' className='materials_table_img' src='http://3.123.22.66/django_media/materials/materials-elastomer.jpg' /></li>
    <div className='materials_table_column_titles'>
    <li><p>EPM</p></li>
    <li><p>EPDM rubber</p></li>
    <li><p>Epichlorohydrin rubber (ECO)</p></li>
    <li><p>Polyacrylic rubber (ACM, ABR)</p></li>
    <li><p>Silicone rubber (SI, Q, VMQ)</p></li>
    <li><p>Fluorosilicone rubber (FVMQ)</p></li>
    <li><p>Fluoroelastomers (FKM, and FEPM)</p></li>
    <li><p>Viton, Tecnoflon, Fluorel, Aflas</p></li>
    <li><p>Magnesium</p></li>
    <li><p>Perfluoroelastomers (FFKM)</p></li>
    </div>
  </ul>
  
</div>

    </div>
    <div className='footer'>
   
    <Footer/>
   </div>
    </>
  );
}

export default Materials