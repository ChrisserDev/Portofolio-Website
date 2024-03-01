import React, { useState } from 'react';
import myself from '../assets/myself.jpg';
import { Link, Element, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { PiCoffeeLight } from "react-icons/pi";
import About from '../Components/About';
import Work from '../Components/Work';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='homePage'>
        <div className='header-container'>
          <h2>csdev.</h2>
          <nav className='nav-container'>
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
              <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link>
              <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link>
              <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </nav>
        </div>
        <div className='homePage-container'>
          <section className='introduction'>
            <p>Howdy, my name is</p>
            <h1>CRISTIAN SERBAN</h1>
            <p>Front End Developer based in London.</p>
            <Link to="projects" smooth={true} duration={500}>Browse Projects</Link>
            <a href="https://brittanychiang.com/resume.pdf" target='_blank' rel="noopener noreferrer">Resume</a>
          </section>
          <img src={myself} alt="Cristian Serban"/>
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
        <h4>© Copyright 2024. By Cristian Serban</h4>
      </div>
    </>
  );
}
