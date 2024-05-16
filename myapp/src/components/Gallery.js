import React from 'react'
import './Gallery.css';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div>
     <span className='glry'>GALLERY</span>

     <div className='lll'>
        <ul>
           <Link to="/hotels" > <li className='vv'>Hotels and Surrounding</li> </Link>
           
           <Link to="/atts" > <li  className='vv'>Attractions</li></Link>
        </ul>
     </div>
     <div className='footer'>
        <Link className='foot'>
        <div>
        Terms & conditions
        </div>
        </Link>
        <Link className='foot'>
        <div>
        Privacy Policy
        </div>
        </Link>
        <Link className='foot'>
        <div>
        Social Media
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Gallery



