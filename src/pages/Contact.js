import React,{useState,useEffect} from 'react'
import './Contact.css'
import Footer from '../components/footer/Footer'

const Contact = () => {
  const initialValues = { firstName: "", lastName: "", email: "", message: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit,setIsSubmit] = useState(false)

  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }
  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //   }
  // }, [formErrors])
  
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const inputs = document.querySelectorAll('.form-control')
    const messagebox = document.querySelector('.messagebox')
    if (!values.firstName) {
      errors.firstName = "First Name is required"
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required"
    }
    // 
    if (!values.email) {
      errors.email = "Email is required"
    }
    else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format"
    }
    if (!values.message) {
      errors.message = "Please enter a message"
      messagebox.classList.add('.active')
      console.log('error')
    }
    return errors;
  
}

  return (
    <div className='general_container container_contact'>
      <div className="container contact__container">
        <div className='title_text'>
          <h2>Contact Me</h2>
          <h3>Hi there, contact me to ask me about anything you have in mind</h3> 
        </div>
        <form onSubmit={handleSubmit}>
          <div className="container__names">
            <div className="form-group">
              <label for="firstname">First Name</label>
              <input type="text" name="firstName" id="first_name" className="form-control" placeholder="Enter your first name" value={formValues.firstName} onChange={handleChange} />
              <span className='error__message'>{formErrors.firstName}</span>
            </div>
           
            <div className="form-group">
              <label for="lastname">Last Name</label>
              <input type="text" name="lastName" id="last_name" className="form-control" placeholder="Enter your second name" value={formValues.lastName} onChange={handleChange} />
              <span className='error__message'>{formErrors.lastName}</span>
            </div>
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" className="form-control" placeholder="Yourname@email.com" value={formValues.email} onChange={handleChange} />
            <span className='error__message'>{formErrors.email}</span>
          </div>
          <div className="form-group textarea__text">
            <label for="text">Text</label>
            <textarea name="message" id="message" className='messagebox' cols="30" rows="10" placeholder='send a message and I will reply you as soon as possible' value={formValues.message} onChange={handleChange}></textarea>
            <span className='error__message'>{formErrors.message}</span>
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