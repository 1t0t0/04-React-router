import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import RootLayout from './components/layout/RootLayout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />

  )
}

export default App