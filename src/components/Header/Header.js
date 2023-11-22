import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'

function Header() {
  return (
    <div className="PageHeader">
      <Link className="Title" to={'/'}>
        JCBT
      </Link>
    </div>
  )
}

export default Header
