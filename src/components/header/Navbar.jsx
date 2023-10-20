import React from 'react'
import { Link } from 'react-router-dom'
import'../header/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="container">
      <h3 className='logo'>Mathieu Delcourt</h3>
      <ul className="nav-links">
        <li><Link to='/'><span className='letter'>A</span>ccueil</Link></li>
        <li><a href='#Apropos'><span className='letter'>A</span>Propos</a></li>
        <li><a href='#compétences'><span className='letter'>C</span>ompétences</a></li>
          <li><a href='#projets'><span className='letter'>P</span>rojets</a></li>
        <li><a href='#contact'><span className='letter'>C</span>ontact</a></li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
