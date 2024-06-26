import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
      window.addEventListener("scroll", () => {
          window.scrollY > 50 ? setSticky(true) : setSticky(false)
      })
  }, []);


  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
        <p className='logo-name'>Peter's Houses</p>
        <ul className={mobileMenu ? "ul" : "hide-mobile-menu"}>
                <Link to="/"><li className='home'>Home</li></Link>
            <li>About Us</li>
            <li>Find an Agent</li>
            <li>Advertise</li>
            <li>Help</li>
            <li className='sign-up'><Link to="/signup" replace reloadDocument>Signup</Link></li>
        </ul>
        <img src={menu_icon} className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
   