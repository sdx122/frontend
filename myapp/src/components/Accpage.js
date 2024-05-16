import React, { useState } from 'react'

import './Accpage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Accpage = () => {




    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [url, setUrl] = useState('');
    const [desc, setDesc] = useState('');
    const [perks, setPerks] = useState('');
    const [checkin, setChi] = useState('');
    const [checkout, setCho] = useState('');




    return (
        <div>
            <form className='form1'>
                <h2 className='til'>Title</h2>
                <span className='sp'>title for your place,should be short and catchy as advertisement</span>
                <input type="text" required='true' value={title} onChange={(e) => {
                    e.preventDefault();
                    setTitle(e.target.value)
                }} placeholder='title,for example:my lovely apt' className='inp' />
                <br />
                <h2 className='til'>Address</h2>
                <span className='sp'>Address to this place</span>
                <input type="text" value={address} required='true' onChange={(e) => {
                    e.preventDefault();
                    setAddress(e.target.value)
                }} placeholder='address' className='inp' />

                <br />
                <h2 className='til'>Photos</h2>
                <span className='sp'>more=better</span>
                <input type="text" value={url} required='true' onChange={(e) => {
                    e.preventDefault();
                    setUrl(e.target.value)
                }} placeholder='add url to this place' className='inp' />
                <button onClick={async (ev) => {

                    ev.preventDefault();
                    const { data: filename } = await axios.post('/upload-by-link', { link: url });


                }} className='btn1'>Add photo</button>
                <div className="h-32 flex relative" key={url}/>
                    <img className="rounded-2xl w-full object-cover" src={url} alt="" />
                    <br />
                    <button className='btn2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                        </svg>
                        Upload
                    </button>
                    <br />
                    <h2 className='til'>Description</h2>
                    <span className='sp'>Description of the place</span>
                    <input type="text" value={desc} required='true' className='inp1' onChange={(e) => {
                        e.preventDefault();
                        setDesc(e.target.value)
                    }} />
                    <br />
                    <h2 className='til' value>Perks</h2>
                    <span className='sp'>select all the perks of your place</span>
                    <br />
                    <div className='hh'> <input type="checkbox" onChange={(e) => {
                        e.preventDefault();
                        setPerks(e.target.value)
                    }} />
                        Wifi </div>
                    <div className='hh'> <input type="checkbox" onChange={(e) => {
                        e.preventDefault();
                        setPerks(e.target.value)
                    }} />
                        Free parking spot </div>
                    <div className='hh'> <input type="checkbox" onChange={(e) => {
                        e.preventDefault();
                        setPerks(e.target.value)
                    }} />
                        TV </div>
                    <div className='hh'> <input type="checkbox" onChange={(e) => {
                        e.preventDefault();
                        setPerks(e.target.value)
                    }} />
                        Radio </div>
                    <div className='hh'> <input type="checkbox" onChange={(e) => {
                        e.preventDefault();
                        setPerks(e.target.value)
                    }} />
                        Pets </div>

                    <h2 className='til'>Check-in and Check-out time</h2>
                    <span className='sp'>add check-in adn check-out times...remember to give some window for cleaning</span>

                    <br />
                    <h2 >Check-in time</h2>
                    <input type="text" value={checkin} required='true' placeholder='14:00' className='til2' onChange={(e) => {
                        e.preventDefault();
                        setChi(e.target.value)
                    }} />

                    <h2 >Check-out time</h2>
                    <input type="text" value={checkout} onChange={(e) => {
                        e.preventDefault();
                        setCho(e.target.value)
                    }} required='true' placeholder='11:00' className='til2' />

                    <br />
                    <Link to="/">
                        <button className='btn3'>Save</button>
                    </Link>

            </form>
        </div>
    )
}

export default Accpage
