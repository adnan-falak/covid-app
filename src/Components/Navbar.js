import React from 'react'
import logo from '../Images/logo.jpg'


function Navbar() {
  return (
    <>
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" className="rounded-circle d-inline-block align-top mx-2" alt="logo" loading="lazy" />
            <h1>COVID-19 Global Stats</h1>
        </a>
        </nav>
    </>
  )
}

export default Navbar
