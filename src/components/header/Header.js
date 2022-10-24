import React from 'react'
import './Header.css'
import face from '../../assets/profile__img.png'
import share_img from '../../assets/Icon_1.png'
import camera_img from '../../assets/Icon.png'
function Header() {
    return (
        <div className='header'>
            <div className='profile_image_text'>
                <div className='image_camera'>
                    <img src={face} alt="" className='profile_image' />
                    <img src={camera_img} alt="camera" className='camera' />
                </div>
                <p>Annette Black</p>
            </div>
            <div className='share'>
                <img src={share_img} alt="" />
                <p className='tooltips'>Share link</p>
            </div>    
        </div>
    )
}

export default Header
