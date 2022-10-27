import React from 'react'
import './Header.css'
import face from '../../assets/profile__img.png'
import share_img from '../../assets/Icon_1.png'
import camera_img from '../../assets/Icon.png'
import menuIcon from '../../assets/Icon-mobile.png'
function Header() {
    return (
        <div className='header'>
            <div className='profile_image_text'>
                <div className='image_camera'>
                    <img src={face} alt="" className='profile_image' id ='profile__img' />
                    <img src={camera_img} alt="camera" className='camera' />
                </div>
                <p id='twitter'>success ogbenna</p>
                <p id='slack'>Ogbenna Success</p>
            </div>
            <div className='share'>
                <img src={share_img} alt="icon" className='share-icon'/>
                <img src={menuIcon} alt="icon" className="menu" />
                <p className='tooltips'>Share link</p>
            </div>  
            
        </div>
       
    )
}

export default Header
