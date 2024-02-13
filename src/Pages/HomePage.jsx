import React from 'react'
import Header from '../Components/Header'
import myself from '../assets/myself.jpg'
import { NavLink } from 'react-router-dom'
import About from '../Components/About'
import Work from '../Components/Work'
import Sidebar from '../Components/Sidebar'

export default function HomePage() {
  return (
    <>
        <Header />
        <Sidebar />
        <div className='homePage-container'>
            <section className='introduction'>
                <p>Hi, my name is</p>
                <h1>CRISTIAN SERBAN</h1>
                <p>Front End Developer based in London.</p>
                <NavLink to="/">Browse Projects</NavLink>
            </section>
            <img src={myself}/>
        </div>
        <About />
        <Work />
    </>
  )
}

