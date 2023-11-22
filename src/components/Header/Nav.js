import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Nav.css'

function Nav() {
  return (
    <div>
      <div className="navbar">
        <Link className="navbarMenu" to={'/about'}>
          About
        </Link>
        <Link className="navbarMenu" to={'/MyPage'}>
          MyPage
        </Link>
        <Link className="navbarMenu" to={'/SignUp'}>
          Sign Up
        </Link>
        <Link className="navbarMenu" to={'/SignIn'}>
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default Nav
