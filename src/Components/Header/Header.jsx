import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'><h2>Movie App using Redux Toolkit</h2></Link>
      </div>
    </div>
  )
}

export default Header