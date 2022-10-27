import React from 'react'
import icongithub from '../../assets/Icon-github.png'
import slack from '../../assets/slack.png'
import './Main.css'
function Main() {
    return (
        <div className="container">
            <a href="https://twitter.com/successogbenna" >Twitter Link</a>
            <a href="https://training.zuri.team/" id='btn__zuri'>Zuri Team</a>
            <a href="http://books.zuri.team" id='book' >Zuri Books</a>
            <a href=" https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" id='book__python'>Python Books</a>
            <a href="https//background.zuri.team" id='pitch'>Background check for coders</a>
            <a href="https://books.zuri.team/design-rules" id='book__design'>Design Books</a>
            <div>
                <img src={slack} alt="slack" className='slack_img'/>
                <img src={icongithub} alt="github"  className='github_img'/>
            </div>
        </div>
    )
}

export default Main
