import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper orange darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">News Top's stories</Link>
        <ul className="right">
          <li><NavLink exact to="/">Food</NavLink></li>
          <li><NavLink to='/books'>Books</NavLink></li>
          <li><NavLink to='/movies'>Movies</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          
        
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar