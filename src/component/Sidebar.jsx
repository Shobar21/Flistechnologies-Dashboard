import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import home from '../imgs/Vector.png'
import product from '../imgs/Vector (1).png'
import project from '../imgs/Vector (2).png'
import signin from '../imgs/Vector (3).png'
import '../css/Sidebar.css'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false) // State to toggle sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Navbar for mobile */}
      <div className='mobile-navbar d-flex justify-content-between align-items-center p-3'>
        <h3 className='flis mb-0'>Flistechnologies</h3>
        <button className='menu-btn mb-0' onClick={toggleSidebar}>
          &#9776; {/* Menu icon */}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`bg-dark text-white sidebar ${isOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <button className='close-btn' onClick={toggleSidebar}>
          &times; {/* Close icon */}
        </button>
        <div className='text-center py-4'>
          <h3 className='flis'>Flistechnologies</h3>
        </div>
        <hr />
        <div className='flex-column px-3 mt-5'>
          <NavLink
            to='/'
            className='dashboard text-white mb-2 d-flex align-items-center'
          >
            <img src={home} alt='Dashboard' className='me-2' />
            Dashboard
          </NavLink>
          <NavLink
            to='/product'
            className='dashboard text-white d-flex align-items-center mt-3'
          >
            <img src={product} alt='Products' className='me-2' />
            Products
          </NavLink>
          <NavLink
            to='/project'
            className='dashboard text-white d-flex align-items-center mt-3'
          >
            <img src={project} alt='Projects' className='me-2' />
            Projects
          </NavLink>
          <NavLink
            to='/signin'
            className='dashboard text-white d-flex align-items-center mt-3'
          >
            <img src={signin} alt='Sign In' className='me-2' />
            Sign In
          </NavLink>
          <NavLink
            to='/signin'
            className='dashboard text-white d-flex align-items-center mt-3'
          >
            <img src={signin} alt='Sign Out' className='me-2' />
            Sign Out
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Sidebar
