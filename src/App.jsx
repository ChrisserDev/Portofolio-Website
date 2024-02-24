import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ProjectPage from './Pages/ProjectPage'

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/projects/:id' element={<ProjectPage />}/>
    </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)

