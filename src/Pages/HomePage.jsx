import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import { PiCoffeeLight } from "react-icons/pi";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import About from '../Components/About';
import Work from '../Components/Work';
import myself from '../assets/portfolio-cover2.jpeg';
import ScrollEffect from '../Components/ScrollEffect';
import '../App.css'

export default function HomePage() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='homePage'>
        <div className='header-container'>
          <h2>csdev.</h2>
          <nav className='nav-container'>
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>☰</button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
              <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link>
              <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link>
              <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </nav>
        </div>
       <ScrollEffect />
        <div className='homePage-container'>
          <section className='introduction'>
          <h1>Hi, I'm</h1>
          <h1>Cristian Serban</h1>
          <h3>Full Stack Developer</h3>
          <p className='home-page-description'>
            I'm a Full-Stack Developer, currently working with <span className='desc-skill'>JavaScript</span>, <span className='desc-skill'>TypeScript</span>, <span className='desc-skill'>CSS/SASS</span>, <span className='desc-skill'>React</span>, <span className='desc-skill'>Node.js</span>, <span className='desc-skill'>SQL</span>, <span className='desc-skill'>GraphQL</span>, and <span className='desc-skill'>GCP</span>. My toolkit also includes <span className='desc-skill'>Git/GitHub</span>, <span className='desc-skill'>Github Actions</span>, testing <span className='desc-skill'>(Jest & Playwright)</span>, and modern build tools <span className='desc-skill'>(Webpack)</span>. <br/>  <br/>
            Right now, I'm diving into  <span className='desc-skill'>Next.js</span> and learning how to layer <span className='desc-skill'>TypeScript</span> more effectively across my projects. <br/><br/>
            If you'd like to see what I've been working on, follow my work log on <span><a className='github-link desc-skill' href="https://github.com/ChrisserDev" target='_blank' aria-label="Link to my personal Github profile" title="Link to my personal Github profile">Github</a></span> and updates on <span><a className='linkedin-link desc-skill' href="https://www.linkedin.com/in/cristianserban24/"  target='_blank' aria-label="Link to my personal Linkedin profile" title="Link to my personal Linkedin profile">LinkedIn</a></span> where I share progress, small wins, and experiments as I keep building and learning.
          </p>
          <Link to="projects" smooth={true} duration={500}>Browse Projects</Link>
          <a className='resume-link' href="https://drive.google.com/file/d/1ijLlXDrzKpz0wfh1-bffzbGKtuxrDd4-/view?usp=sharing" target='_blank' rel="noopener noreferrer" aria-label='Link to Cristian Resume.'>Resume</a>
          </section>
          <img src={myself} alt="Image of Cristian Serban"/>
        </div>
      </div>
      <Element name='about'>
        <About />
      </Element>
      <Element name="projects">
        <Work />
      </Element>
      <Element name='contact'>
      <div className='contact-container'> 
        <h1>LET'S HAVE A CHAT <PiCoffeeLight /></h1>
        <h3>cristian.serban33@yahoo.com</h3>
        <div className='social-links'>
          <a href="https://www.linkedin.com/in/cristian-serban-ab6606174/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
          <a href="https://github.com/ChrisserDev" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
          </a>
        </div>
      </div>
      </Element>
      <div className='footer-container'>
        <h4>© Copyright 2025. Cristian Serban</h4>
      </div>
    </>
  )}