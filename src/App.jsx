import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import RootLayout from './components/layout/RootLayout'
import ContactLayout from './components/layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobsLayout from './components/layout/JobsLayout'
import Jobs, { jobsLoader } from './pages/Jobs'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactLayout />} >
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>
        <Route path='jobs' element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={jobsLoader} />

        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />

  )
}

export default App