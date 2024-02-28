import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-container'>
      <h1>CS.</h1>
      <nav className='nav-container'>
        <NavLink to="/#about">About</NavLink>
        <NavLink to="#projects">Projects</NavLink>
        <NavLink to="#contact">Contact</NavLink>
      </nav>
      </div>
  )
}

