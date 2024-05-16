import React from 'react'
import './Contactus.css';
import { Link } from 'react-router-dom';

const Contactus = () => {
  return (
    <div>
      <span>Contact us</span>
<div className='box'>
      <div className="firsthalf">
        <h6>Telephone No.</h6>
        <p>123456789</p>
        <br />
        <br />
        <h6>Fax</h6>
        <p>02 02 04 06</p>
        <br />
        <br />
        <h6>Email</h6>
        <p>reservations@Revanta.com</p>
      </div>


      <div className="secondhalf">

        <form className='form1'>
            Name: 
            <input placeholder='Enter name' className='hhaa' type="text" />
            <br />
            <br />
            Telephone no. :
            
            <input placeholder='Enter Contact' className='hhaa' type="number" />
            <br /><br />
            Email : 
            <input placeholder='Enter email' className='hhaa' type="email" />

            <br />
            <br />

            <input className='drop' type="text" placeholder='drop a message'/>

            <br />
            <br />
            <button className='bhn'>Send Enquiry</button>
            <br />
        </form>
      </div>
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

export default Contactus
