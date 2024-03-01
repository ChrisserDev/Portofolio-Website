import React, { useState } from 'react'
import { FaHtml5, FaNode, FaReact, FaFigma, FaNpm } from "react-icons/fa6";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

export default function About() {

  // Initializing state for the paragraph button dropdown.
  const [isOpen, setIsOpen] = useState(false);

  //Styling for the paragraph dropdown.
  const paragraphStyle = {
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
  }

  return (
    <div className='about-skills-container'>
      <div className='about'>
        <h1>MY STORY</h1>
        <p style={isOpen ? null : paragraphStyle}>
          Hey there👋I delved into the world of coding during my Master's Degree in Audio Engineering back in 2019 where I got my first taste of coding in C++ while working on an audio effect project. Despite creating a cool delay effect that I enjoyed building, I’ve realised that coding might not be my true calling. This awareness dawned upon me when my teacher emphasized the importance of having a strong grasp of complex mathematics in the programming field.
          <br/><br/>Fast forward two years after finishing my master's, I decided to give coding another shot. I took a free course on learning Python on LinkedIn and thought, "Maybe I'll like this." But, once again, I hit a roadblock with complex math operations when I tried learning Audio Digital Signal Processing in Phyton. 
          <br/><br/>Then, in December 2022, I stumbled upon a mobile app called Mimo, and everything changed. I started learning Front-End Development, covering the basics like loops, if statements, and functions. A month later, I joined their 6-month Front-End Development bootcamp.
          During the bootcamp, I dove into HTML, CSS, JavaScript, and React.<br/><br/>It was awesome! I built a bunch of projects, and six months later, I realised that my love for coding and creating applications bring me joy and satisfaction.
          Since then, I've kept learning and developing my skills as well as developing applications.<br/><br/> So, that's a bit about my coding journey so far. I'm thrilled about the progress I've made, and I'm eagerly looking forward to the next chapter. If you're on the lookout for a passionate front-end developer who loves bringing ideas to life, I'm your guy! Let's connect and create something awesome together. Cheers! 🚀
        </p>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Read Less...' : 'Read More...'}</button>
      </div>
      <div className='skills'>
        <h1>TECH STACK</h1>
        <div className='stack'>
          <section>
            <FaHtml5/>
            <h5>HTML</h5>
          </section>
          <section>
            <FaCss3Alt/>
            <h5>CSS</h5>
          </section>
          <section>
            <SiJavascript/>
            <h5>JavaScript</h5>
          </section>
          <section>      
            <FaReact/>
            <h5>React</h5>
          </section>
          <section>
            <FaNode/>
            <h5>Node.JS</h5>
          </section>
          <section>
            <SiMongodb/>
            <h5>MongoDB</h5>
          </section>
          <section>
            <SiExpress/>
            <h5>Express.JS</h5>
          </section>
          <section>
            <FaGitAlt/>
            <h5>GIT</h5>
          </section>
          <section>
            <FaFigma/>
            <h5>Figma</h5>
          </section>
          <section>
            <FaNpm/>
            <h5>Node Package Manager</h5>
          </section>
          <section>
            <DiVisualstudio />
            <h5>Visual Studio</h5>
          </section>
        </div>
      </div>
    </div>
  )
}
