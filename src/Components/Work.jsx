import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Modal from 'react-modal'


export default function Work() {
  Modal.setAppElement(document.getElementById('root'));
  const [isOpen, setIsOpen] = useState(false)
  const [displayProjects, setDisplayProjects] = useState([])
  const {id} = useParams();
  const [showProject, setShowProject] = useState({})

  useEffect(() => {
      axios.get(`http://localhost:3000/allprojects`)
      .then(response => {
          console.log(response.data)
          setDisplayProjects(response.data);
      })
      .catch(error => console.log('Error fetching projects:', error));
}, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/allprojects/${id}`)
    .then(response => {
        console.log(response.data)
        setShowProject(response.data);
    })
    .catch(error => console.log('Error fetching project:', error));
  }, []);

  const openModal = (project) => {
    setShowProject(project);
    setIsOpen(true);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }
  };


  return (
    <>
      <h1 className='projects-container-title'>PROJECTS</h1>
      <div className='projects-container'> 
          {
            displayProjects.map(project => {
              return (
                <div key={project._id} className='project-card'> 
                        <img src={project.image}/>
                        <button className='overlay' onClick={() => openModal(project)}>See more...</button>
                          <section className='project-card-top'>
                            <h2>{project?.title}</h2>
                            <section className='project-links'>
                              <Link to={project?.github} target='_blank'>Github</Link>
                              <Link to={project?.liveapp} target='_blank'>Deployed</Link>
                            </section>
                          </section>
                          <p>{project?.description}</p>
                          <div className='projects-stack'>
                            {project?.stack.map((tech, index) => (
                              <p key={index}>{tech}</p>
                            ))}
                        </div>
                    </div>
            )
            })
          }
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <button onClick={() => setIsOpen(false)}>X</button>
        <div className='modal-project'>
          <h2>{showProject?.title}</h2>
          <p>{showProject?.description}</p>
          {/* <div className='projects-stack'>
            {showProject?.stack.map((tech, index) => (
              <p key={index}>{tech}</p>
            ))}
          </div> */}
        </div>
      </Modal>
    </>
  )
}

