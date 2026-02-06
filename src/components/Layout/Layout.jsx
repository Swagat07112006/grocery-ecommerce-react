import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
        {/* We will keep those elements that will be same in every pages like NavBar etc */}

        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout