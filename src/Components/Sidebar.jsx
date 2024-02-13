import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";


export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <a href="https://www.linkedin.com/in/cristian-serban-ab6606174/" target="_blank">
        <FaLinkedin/>
      </a>
      <a href="https://github.com/ChrisserDev" target="_blank">
        <FaGithub/>
      </a>
      <a href="https://mail.google.com" target="_blank">
        <CgMail/>
      </a>
    </div>
  );
}