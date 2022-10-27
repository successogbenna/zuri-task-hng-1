import React from 'react'
import zuriLog from '../../assets/logo.36d2d48a.png'
import i4g from '../../assets/I4G.png'
import './Footer.css'
function Footer() {
    return (
           <div className='footer_container'>
            <img src={zuriLog} alt="" />
            <p>HNG Internshp 9 Frontend Task</p>
            <img src={i4g} alt="" />
        </div>
    )
}

export default Footer
