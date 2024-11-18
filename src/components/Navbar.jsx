import React from 'react'
import logo from '../assets/react.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" width="50px" />
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/product"><li>Product</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/contact"><li>Contact</li></NavLink>
            </ul>
            <button>Get Started</button>
        </div>
    )
}

export default Navbar