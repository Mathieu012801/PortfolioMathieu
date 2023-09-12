import React from 'react'
import { Link } from 'react-router-dom'
import'../header/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="container">
      <h3 className='logo'>Mathieu Delcourt</h3>
      <ul className="nav-links">
        <li><Link to='#'><span className='letter'>A</span>ccueil</Link></li>
        <li><Link to='#'><span className='letter'>P</span>ortfolio</Link></li>
        <li><Link to='#'><span className='letter'>A</span> propos</Link></li>
        <li><Link to='#'><span className='letter'>M</span>E JOINDRE</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
