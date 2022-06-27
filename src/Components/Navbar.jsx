import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {AiOutlineLogout} from 'react-icons/ai'

const Navbar = () => {

  const history = useNavigate();

  
  const userlogout = ()=>{
    localStorage.removeItem("user_login")
    history("/");
}
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Assignment</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse mr-4" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/master">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact us</Link>
      </li>
      <li className="nav-item" onClick={userlogout}>
        <Link className="nav-link" to="/design"><AiOutlineLogout className='logicon'/></Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar