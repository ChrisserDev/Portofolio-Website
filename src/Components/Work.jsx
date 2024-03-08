import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ImNewTab } from "react-icons/im";
import Modal from 'react-modal'
import axios from 'axios'

export default function Work() {
  Modal.setAppElement(document.getElementById('root'));
  const [isOpen, setIsOpen] = useState(false)
  const [displayProjects, setDisplayProjects] = useState([])
  const [showProject, setShowProject] = useState({})

  useEffect(() => {
      axios.get(`https://portofolio-website-3.onrender.com/allprojects`)
      .then(response => {
          setDisplayProjects(response.data);
      })
      .catch(error => console.log('Error fetching projects:', error));
}, []);


  function openModal(project){
    setShowProject(project);
    setIsOpen(true);
  }

  //Styling for the modal.
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      boxShadow: '0 0 20px rgb(55, 54, 54)',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      width: '75%',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
  };

return (
  <>
    <h1 className='projects-container-title'>PROJECTS</h1>
    <div className='projects-container'> 
      {displayProjects.map(project => {
        return (
          <div key={project._id} className='project-card'> 
            <img src={project?.image} alt={project?.title}/>
            <button className='overlay' onClick={() => openModal(project)}>See more <ImNewTab /></button>
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
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}>
      <button onClick={() => setIsOpen(false)} className='close-modal'>X</button>
      <div className='modal-project'>
        <h2>Key features of the {showProject?.title} project</h2>
        <div>
          {Array.isArray(showProject?.features) && showProject?.features.map((feature, index) => (
            <section key={index} className='features'>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </section>
          ))}
        </div>
      </div>
    </Modal>
  </>
)}