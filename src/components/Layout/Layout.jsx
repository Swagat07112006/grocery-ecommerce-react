import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import CartSidebar from '../NavBar/CartSidebar'

const Layout = () => {
  return (
    <div>
      {/* We will keep those elements that will be same in every pages like NavBar etc */}

      <NavBar />
      <CartSidebar />
      <div className="pt-24 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout