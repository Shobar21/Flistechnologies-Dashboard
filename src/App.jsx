import './App.css'
import Dashboard from './component/Dashboard'
import Sidebar from './component/SideBar'

function App() {
  return (
    <div className='d-flex' style={{ height: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Dashboard Content */}
      <div className='flex-grow-1'>
        <Dashboard />
      </div>
    </div>
  )
}

export default App
