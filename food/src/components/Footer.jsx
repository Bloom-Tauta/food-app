import React from 'react'
import '../css/footer.css';
import { FaRegCopyright } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_component'>
            <h3 className='footer_text'>Contact Us:</h3>
            <p>You need it we've got it!</p>
            <address className='address'>
              Bloom Tauta Holdings.Inc<br/>
              Visit us at <a href="http://www.eatsmart.com">EatSmart</a><br/>
              P.O BOX 57-00511<br/>
              Ong'ata Rongai<br/>
            </address>
            <h5><span><FaRegCopyright/></span>Copyright</h5>
        </div>
    </div>
  )
}

export default Footer;