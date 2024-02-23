import React, { useState } from 'react'
import Header from '../Components/Header'
import myself from '../assets/myself.jpg'
import { NavLink, Link } from 'react-router-dom'
import About from '../Components/About'
import Work from '../Components/Work'


export default function HomePage() {


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedin: '',
    message: ''
  })

  function handleFormSubmit(e){
    const {name, value} = e.target;

    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }


  return (
    <>
        <Header />
        <div className='homePage-container'>
            <section className='introduction'>
                <p>Howdy, my name is</p>
                <h1>CRISTIAN SERBAN</h1>
                <p>Front End Developer based in London.</p>
                <NavLink to="/">Browse Projects</NavLink>
                <Link to="https://brittanychiang.com/resume.pdf" target='_blank'>Resume</Link>
            </section>
            <img src={myself}/>
        </div>
        <About />
        <Work />
        <form> 
            <h1>Got any questions? Contact Me.</h1>
            <div className='form-container'>
              <section>
                <label htmlFor='fullName' >Full Name*</label><br />
                <input type='text' name='fullName' onChange={handleFormSubmit} value={formData.fullName}></input>
              </section>
              <section>
                <label htmlFor='email' >Email Address*</label><br />
                <input type='text' name='email' onChange={handleFormSubmit} value={formData.email}></input>
              </section>
              <section>                
                <label htmlFor='linkedin' onChange={handleFormSubmit} value={formData.linkedin}>Linkedin</label><br />
                <input type='text' name='linkedin'></input>
              </section>
              <section>
                <label htmlFor="message">Message</label>
                <textarea name="message" rows="8" cols="59" className="fixed-textarea" onChange={handleFormSubmit} value={formData.message}></textarea>
              </section>
              <button type='button'>Send</button>
            </div>
        </form>
        <div className='footer-container'>
          <h4>© Copyright 2024. By Cristian Serban</h4>
        </div>
    </>
  )
}

