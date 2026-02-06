import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import Meat from './components/Meat/Meat'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/fruits',
          element: <Fruits />,
        },
        {
          path: '/dairy',
          element: <Dairy />,
        },
        {
          path: '/meat',
          element: <Meat />,
        }
      ]
    },
  ])

  return <RouterProvider router={router} />
}

export default App
