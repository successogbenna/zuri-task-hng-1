import { useForm } from "react-hook-form";
import './Contact.css'
import Footer from '../components/footer/Footer'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset,trigger } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <div className='general_container container_contact'>
      <div className="container contact__container">
        <div className='title_text'>
          <h2>Contact Me</h2>
          <h3>Hi there, contact me to ask me about anything you have in mind</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container__names">
            <div className="form-group">
              <label htmlfor="firstname">First Name</label>
              <input type="text" name="firstName" id="first_name" className={`form-control ${errors.firstName && "invalid"}`} placeholder="Enter your first name"
                {...register("firstName", {
                  required: "First Name is required",
                  minLength:{
                    value: 3,
                    message:"The character should be above 2"
                  },
                  maxLength: {
                    value: 10,
                    message: "The character should be above 2"
                  },
                })} onKeyUp={() => {
                  trigger('firstName')
                }} />
              {errors.firstName && (<span className='error__message'>{errors.firstName.message}</span>)}
            </div>
            <div className="form-group">
              <label htmlfor="lastname">Last Name</label>
              <input type="text" name="lastName" id="last_name" className={`form-control ${errors.lastName && "invalid"}`} placeholder="Enter your second name"
                {...register("lastName", {
                  required: "Last Name is required",
                  minLength: {
                    value: 3,
                    message: "The character should be above 2"
                  },
                  maxLength: {
                    value: 10,
                    message: "The character should be above 2"
                  }
                })}
                onKeyUp={() => {
                  trigger('lastName')
                }}/>
              {errors.lastName && (<span className='error__message'>{errors.lastName.message}</span>)}
            </div>
          </div>
          <div className="form-group">
            <label htmlfor="email">Email</label>
            <input type="text" name="email" id="email" className={`form-control ${errors.email && "invalid"}`} placeholder="Yourname@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              onKeyUp={() => {
                trigger('email')
              }}/>
            {errors.email && (<span className='error__message'>{errors.email.message}</span>)}
          </div>
          <div className="form-group textarea__text">
            <label htmlfor="text">Text</label>
            <textarea name="message" id="message" className={`message ${errors.message && "invalid"}`} cols="30" rows="10" placeholder='send a message and I will reply you as soon as possible'
              {...register("message", { required: "Message is required" })}
              onKeyUp={() => {
                trigger('message')
              }}></textarea>
            {errors.message && (<span className='error__message'>{errors.message.message}</span>)}
          </div>
          <div className='check__text'>
            <input type="checkbox" name="" id="" />
            <span>{`you agree to providing your data to name {name} who may contact you`} </span>
          </div>
          <button id='btn__submit'>Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact