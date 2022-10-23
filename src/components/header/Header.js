import React from 'react'
import './Header.css'
import face from '../../assets/face.jpg'
function Header() {
    return (
        <div>
            <img src={face} alt="" className='profile_image' />
            <p>Annette Black</p>
            
        </div>
    )
}

export default Header
