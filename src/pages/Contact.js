import React from 'react'
import './Contact.css'
import Footer from '../components/footer/Footer'
const Contact = () => {
  return (
    <div className='general_container container_contact'>
      <div className="container contact__container">
        <div className='title_text'>
          <h2>Contact Me</h2>
          <h3>Hi there, contact me to ask me about anything you have in mind</h3> 
        </div>
        
        <form >
          <div className="container__names">
            <div class="form-group">
              <label for="html">First Name</label>
              <input type="text" name="" id="first_name" class="form-control" placeholder="Enter your first name" required />
            </div>
            <div class="form-group">
              <label for="html">Last Name</label>
              <input type="text" name="" id="last_name" class="form-control" placeholder="Enter your second name" required/>
            </div>
          </div>
          <div class="form-group">
            <label for="html">Email</label>
            <input type="text" name="" id="email" class="form-control" placeholder="Yourname@email.com" required/>
          </div>
          <div class="form-group">
            <label for="html">Text</label>
            <textarea name="" id="message" cols="30" rows="10" placeholder='send a message and I will reply you as soon as possible'></textarea>
          </div>
          <div className='check__text'>
            <input type="checkbox" name="" id="" />
            <span>{`you agree to providing your data to name {name} who may contact you`} </span>
          </div>
          <button id='btn_submit'>Send Message</button>
        </form>
      </div>
      <Footer />
  </div>
  )
}

export default Contact