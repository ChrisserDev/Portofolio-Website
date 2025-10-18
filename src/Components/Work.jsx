import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Work() {
  const [displayProjects, setDisplayProjects] = useState([])

  useEffect(() => {
      axios.get(`https://portofolio-website-3.onrender.com/allprojects`)
      .then(response => {
          setDisplayProjects(response?.data);
      })
      .catch(error => console.error('Error fetching projects:', error));
}, []);

return (
  <>
    <h1 className='projects-container-title'>PROJECTS</h1>
    <div className='projects-container'> 
      {displayProjects.map(project => {
        return (
          <div key={project._id} className='project-card'> 
            <img src={project?.image} alt={project?.title}/>
            <div className='project-details'>
              <section className='project-card-top'>
                <h2>{project?.title}</h2>
              <section className='project-links'>
                <Link to={project?.github} target='_blank'>Github</Link>
                <Link to={project?.liveapp} target='_blank'>View Live</Link>
              </section>
              </section>
                <p>{project?.description}</p>
                <div className='projects-stack'>
                  {project?.stack.map((tech, index) => (
                    <p key={index}>{tech}</p>
                  ))}
                </div>
            </div>
          </div>
          )
        })
      }
    </div>
  </>
)}