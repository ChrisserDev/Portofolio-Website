import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";


export default function Header() {
  return (
    <div className='header-container'>
      <h1>CS.</h1>
      <nav className='nav-container'>
        <NavLink to="/#about">About</NavLink>
        <NavLink to="#projects">Projects</NavLink>
        <NavLink to="#contact">Contact</NavLink>
      </nav>
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
  )
}

