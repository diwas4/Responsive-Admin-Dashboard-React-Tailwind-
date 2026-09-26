import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import { Navigate } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={< MainLayout />}>
          <Route path='/' element={<Navigate to={"/dashboard"} replace />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/products' element={<Products />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App