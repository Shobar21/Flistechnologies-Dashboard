import React from 'react'
import { Nav } from 'react-bootstrap'
import home from '../img/Vector.png'
import product from '../img/Vector (1).png'
import project from '../img/Vector (2).png'
import signin from '../img/Vector (3).png'
import '../css/Sidebar.css'

function Sidebar() {
  return (
    <div className='bg-dark text-white vh-100' style={{ width: '220px' }}>
      <div className='text-center py-4'>
        <h3 className='flis'>Flistechnologies</h3>
      </div>
      <hr className='bg-light' />
      <Nav className='flex-column px-3'>
        <Nav.Link
          href='#dashboard'
          className='dashboard text-white mb-2 d-flex align-items-center'
        >
          <img src={home} alt='Dashboard' className='me-2' />
          Dashboard
        </Nav.Link>
        <Nav.Link
          href='#products'
          className='text-white d-flex align-items-center'
        >
          <img src={product} alt='Products' className='me-2' />
          Products
        </Nav.Link>
        <Nav.Link
          href='#projects'
          className='text-white d-flex align-items-center mt-2'
        >
          <img src={project} alt='Projects' className='me-2' />
          Projects
        </Nav.Link>
        <Nav.Link
          href='#signin'
          className='text-white d-flex align-items-center mt-2'
        >
          <img src={signin} alt='Sign In' className='me-2' />
          Sign In
        </Nav.Link>
      </Nav>
    </div>
  )
}

export default Sidebar
