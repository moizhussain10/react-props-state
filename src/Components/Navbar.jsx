import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <div className="bg-green-950 font-bold flex justify-between p-4">
       
      <div> LOGO</div>
      <div>
        <ul className="flex gap-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        </ul>
      </div>

      </div>
    </>
  )
}

export default Navbar
