import React, { useState } from 'react'
import { FaHtml5, FaNode, FaSquareGit, FaReact, FaFigma, FaNpm } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

export default function About() {

  const [isOpen, setIsOpen] = useState(false);

  const paragraphStyle = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
  }

  return (
    <div className='about-skills-container'>
    <div className='about'>
        <h1>My Story</h1>
        <p style={isOpen ? null : paragraphStyle}>
          Hey there👋 I'm Cristian, a front-end developer living in London, UK. I delved into the world of coding during my master's degree in audio engineering back in 2019 where I got my first taste of coding in C++ while working on an audio effect project. Despite creating a cool delay effect that I enjoyed building, I’ve realised that coding might not be my true calling. This awareness dawned upon me when my teacher emphasized the importance of having a strong grasp of complex mathematics in the programming field.
          <br />Fast forward two years after finishing my master's, I decided to give coding another shot. I took a free course on learning Python on LinkedIn and thought, "Maybe I'll like this." But, once again, I hit a roadblock with complex math operations when I tried learning Audio Digital Signal Processing in Phyton. 
          <br />Then, in December 2022, I stumbled upon a mobile app called Mimo, and everything changed. I started learning Front-End Development, covering the basics like loops, if statements, and functions. A month later, I joined their 6-month Front-End Development bootcamp.
          During the bootcamp, I dove into HTML, CSS, JavaScript, and React. <br />It was awesome! I built a bunch of projects, and six months later, I realised that my love for coding and creating applications bring me joy.
          Since then, I've kept learning and developing my skills as well as developing applications. <br /> So, that's a bit about my coding journey so far. I'm thrilled about the progress I've made, and I'm eagerly looking forward to the next chapter. If you're on the lookout for a passionate front-end developer who loves bringing ideas to life, I'm your guy! Let's connect and create something awesome together. Cheers! 🚀
      </p>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Read Less...' : 'Read More...'}</button>
    <div className='skills'>
      <h1>Tech Stack</h1>
      <div className='stack'>
        <FaHtml5 />
        <FaCss3Alt />
        <SiJavascript />
        <FaReact />
        <FaNpm />
        <FaNode />
        <SiMongodb />
        <SiExpress />
        <FaSquareGit />
=       <FaFigma />
      </div>
    </div>
    </div>
    </div>
  )
}
