import React from 'react'
import { NavLink } from 'react-router-dom' // Use NavLink for routing
import home from '../imgs/Vector.png'
import product from '../imgs/Vector (1).png'
import project from '../imgs/Vector (2).png'
import signin from '../imgs/Vector (3).png'
import '../css/Sidebar.css'

function Sidebar() {
  return (
    <div className='bg-dark text-white sidebar'>
      <div className='text-center py-4'>
        <h3 className='flis'>Flistechnologies</h3>
      </div>
      <hr className='bg-light' />
      <div className='flex-column px-3'>
        <NavLink
          to='/'
          className='dashboard text-white mb-2 d-flex align-items-center'
        >
          <img src={home} alt='Dashboard' className='me-2' />
          Dashboard
        </NavLink>
        <NavLink
          to='/product'
          className=' dashboard text-white d-flex align-items-center mt-3'
        >
          <img src={product} alt='Products' className='me-2' />
          Products
        </NavLink>
        <NavLink
          to='/project'
          className=' dashboard text-white d-flex align-items-center mt-3'
        >
          <img src={project} alt='Projects' className='me-2' />
          Projects
        </NavLink>
        <NavLink
          to='/signin'
          className=' dashboard text-white d-flex align-items-center mt-3'
        >
          <img src={signin} alt='Sign In' className='me-2' />
          Sign In
        </NavLink>
        <NavLink
          to='/signin'
          className=' dashboard text-white d-flex align-items-center mt-3'
        >
          <img src={signin} alt='Sign In' className='me-2' />
          Sign Out
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
