import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
    <div className='overflow-hidden bg-[#0a0118]'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout