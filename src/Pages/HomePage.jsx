import React, { useState } from 'react'
import Header from '../Components/Header'
import myself from '../assets/myself.jpg'
import { NavLink, Link } from 'react-router-dom'
import About from '../Components/About'
import Work from '../Components/Work'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";

export default function HomePage() {

  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   email: '',
  //   linkedin: '',
  //   message: ''
  // })

  // function handleFormSubmit(e){
  //   const {name, value} = e.target;

  //   setFormData(prevData => {
  //     return {
  //       ...prevData,
  //       [name]: value
  //     }
  //   })
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:3000/contactdata', formData);
  //     console.log(response.data);
  //     // Clear form or show success message
  //   } catch (error) {
  //     console.error('Error sending data', error);
  //     // Show error message
  //   }
  // }

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
        <div className='contact-container'> 
            <h1>Got any questions for me?</h1>
            <h3>LET'S HAVE A CHAT</h3>
            {/* <div className='form-container'>
              <section>
                <label htmlFor='fullName' >Full Name*</label><br />
                <input type='text' name='fullName' onChange={handleFormSubmit} value={formData.fullName} required></input>
              </section>
              <section>
                <label htmlFor='email' >Email Address*</label><br />
                <input type='text' name='email' onChange={handleFormSubmit} value={formData.email} required></input>
              </section>
              <section>                
                <label htmlFor='linkedin'>Linkedin</label><br />
                <input type='text' name='linkedin' onChange={handleFormSubmit} value={formData.linkedin} required></input>
              </section>
              <section>
                <label htmlFor="message">Message</label>
                <textarea name="message" rows="8" cols="59" className="fixed-textarea" onChange={handleFormSubmit} value={formData.message}></textarea>
              </section>
              <button type='button' onClick={handleSubmit}>Send</button>
            </div> */}
          <div className='sidebar-container'>
          <a href="https://www.linkedin.com/in/cristian-serban-ab6606174/" target="_blank">
            <FaLinkedin/>
          </a>
          <a href="https://github.com/ChrisserDev" target="_blank">
            <FaGithub/>
          </a>
          <a href="https://mail.google.com" target="_blank">
            <CgMail/>
          </a>
        </div>
        </div>
        <div className='footer-container'>
          <h4>© Copyright 2024. By Cristian Serban</h4>
        </div>
    </>
  )
}

