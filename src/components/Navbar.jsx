import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/Vector.png'

const Navbar = () => {
  return (
    <div className='main'>
    <div className='navbar'>
        <div className='logolist'>
      <div className='logo' >
        <img src={logo} alt="logo iamge" />
        <p>Mobile basics</p>
        </div>
       <ul>
       <li>Demos</li>
       <li>About</li>
       <li>Blog</li>
       <li>Page</li>
       <li>Contact</li>
       </ul>
       </div>
       <div className='loginsection'>
        
       <button className='loginbtn'><Link to="/loginPage">Login</Link></button>
       
       <button className='startbtn'>Get started free</button>
       </div>
   </div>
   </div>
  )
}

export default Navbar
