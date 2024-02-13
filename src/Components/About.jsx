import React from 'react'
import { FaHtml5, FaNode, FaSquareGit, FaReact } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { BiSolidFileCss } from "react-icons/bi";


export default function About() {
  return (
    <div className='about-skills-container'>
    <div className='about'>
        <h1>About</h1>
        <p>Hi there! I'm Cristian and I'm a front end developer based in London, Uk. I've been learning to code for over a year now. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div className='skills'>
      <h1>Skills</h1>
      <FaHtml5 />
      <SiJavascript />
      <FaNode />
      <BiSolidFileCss />
      <FaSquareGit />
      <FaReact />
    </div>
    </div>
  )
}
