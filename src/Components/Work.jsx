import React from 'react'
import uniLife from '../assets/UniLife.png'
import pixify from '../assets/pixifycontest.png'
import cocktail from '../assets/cocktailApp.png'



export default function Work() {
  return (
    <>
      <h1 className='projects-container-title'>PROJECTS</h1>
      <div className='projects-container'>    
          <section className='project-card'>
              <h2>#RentHub</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic voluptas iure reprehenderit autem laudantium aut magni delectus.</p>
              <a href=''></a>
          </section>
          <section className='project-card'>
            <img src={uniLife} />
              <h2>UniLife</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic voluptas iure reprehenderit autem laudantium aut magni delectus.</p>
              <a href=''></a>
          </section>
          <section className='project-card'>
              <h2>Fake Store</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic voluptas iure reprehenderit autem laudantium aut magni delectus.</p>
              <a href=''></a>
          </section>
          <section className='project-card'>
              <img src={cocktail} />
              <h2>Cocktail Catche</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic voluptas iure reprehenderit autem laudantium aut magni delectus.</p>
              <a href=''></a>
          </section>
          <section className='project-card'>
            <img src={pixify} />
              <h2>Pifixy</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic voluptas iure reprehenderit autem laudantium aut magni delectus.</p>
              <a href=''></a>
          </section>
      </div>
    </>
  )
}

