import React from 'react'
import icongithub from '../../assets/Icon-github.png'
import './Main.css'
function Main() {
    return (
        <div className="container">
            <a href="">Twitter Link</a>
            <a href="">Zuri Team</a>
            <a href="">Zuri Books</a>
            <a href="">Python Books</a>
            <a href="">Background check for coders</a>
            <a href="">Design Books</a>
            <div>
                <img src={icongithub} alt="" />
            </div>
        </div>
    )
}

export default Main
