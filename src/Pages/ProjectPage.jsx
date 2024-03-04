import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProjectPage() {

 const {id} = useParams();
 const [showProject, setShowProject] = useState({})
 
 useEffect(() => {
    axios.get(`http://localhost:3000/allprojects/${id}`)
    .then(response => {
        console.log(response.data)
        setShowProject(response.data);
    })
    .catch(error => console.log('Error fetching project:', error));
}, []);



  return (
    <div className='project-page'>
        <section>
            <h1>{showProject?.title}</h1>
            <p>{showProject?.description}</p>
        </section>
        <img className='project-page-image' src={showProject?.image} />
    </div>
  )
}

