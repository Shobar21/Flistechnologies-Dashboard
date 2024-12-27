import React from 'react'
import './App.css'
import Dashboard from './component/Dashboard'
import Product from './component/Product'
import Project from './component/Project'
import Sidebar from './component/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignInPage from './component/SignInPage'

function App() {
  return (
    <Router>
      <div className='d-flex' style={{ height: '100vh' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Dashboard Content */}
        <div className='dash'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/product' element={<Product />} />
            <Route path='/project' element={<Project />} />
            <Route path='/signin' element={<SignInPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
