import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const MainLayout = () => {
  return (
    <div className='min-h-screen bg-bg'>
      
      {/* {Sidebar} */}
      <Sidebar />

      {/* {Right Area} */}

      <div className='md:ml-64 min-h-screen'>
        {/* {Topbar} */}
        <Topbar />

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout