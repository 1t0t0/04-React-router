import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {

  return (
    <div>
      <Navbar />
      <div className='contianer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App