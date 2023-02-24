import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import house from '../assets/house.svg'
function Navbar() {

    const location = useLocation()
    const src = house
  return (
    <nav className='nav-bar'>
        {location.pathname === '/'
            ? <NavLink to='/' style={{opacity: 0}}></NavLink>
            : <NavLink to='/'><img src={src} className='home-icon' alt='home-icon' /></NavLink>
        }
        <ul className='nav-bar-ul'>
            <li className='nav-link'>
            {location.pathname === '/listofbeers' ? null : <NavLink to='/listofbeers'>All Beers</NavLink>}</li>
            <li className='nav-link'>
            {location.pathname === '/newbeer' ? null : <NavLink to='/newbeer'>New Beer</NavLink>}</li>
            <li className='nav-link'>
            {location.pathname === '/randombeer' ? null : <NavLink to='/randombeer'>Random Beer</NavLink>}</li>
        </ul>
    </nav>
  )
}

export default Navbar