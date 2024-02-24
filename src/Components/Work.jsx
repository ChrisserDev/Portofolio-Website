import React, { useEffect, useState } from 'react'
import axios from 'axios'
import rentHub from '../assets/RentHub.png'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'

export default function Work() {
  const [displayProjects, setDisplayProjects] = useState([])

  useEffect(() => {
      axios.get(`http://localhost:3000/allprojects`)
      .then(response => {
          console.log(response.data)
          setDisplayProjects(response.data);
      })
      .catch(error => console.log('Error fetching vehicles:', error));
}, []);

  return (
    <>
      <h1 className='projects-container-title'>PROJECTS</h1>
      <div className='projects-container'> 
          {
            displayProjects.map(project => {
              return (
                <div key={project._id} className='project-card'> 
                        <img src={project.image}/>
                        <Link to={`/projects/${project._id}`} className='overlay'>See more</Link>
                          <section className='project-card-top'>
                            <h2>{project?.title}</h2>
                            <section className='project-links'>
                              <Link to={project?.github} target='_blank'>Github</Link>
                              <Link to={project?.liveapp} target='_blank'>Live Demo</Link>
                            </section>
                          </section>
                          <p>{project?.description}</p>
                          <p>{project?.stack.join(' ')}</p>
                    </div>
            )
            })
          }
      </div>
    </>
  )
}

