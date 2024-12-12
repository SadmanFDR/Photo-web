import React from 'react'
import './Navber.css'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
const Navber = () => {
  return (
    <>
    <div className="sadman_con">
      <div className="container">
         <div className="main_nav">
            <div className="nav_logo">
               <Link to={'/'}> <img src="Images/logo.png" alt="logo" /><span>Mcap.</span></Link>  
            </div>
           <ul className='menu'>
            <li><Link to={'/'}>About</Link></li>
            <li><Link to={'/'}>Project</Link></li>
            <li><Link to={'/'}>Blog</Link></li>
            <li><Link to={'/'}>Pricing</Link></li>
            <li><Link to={'/'}>Studio</Link></li>
            <li><Link to={'/'}>Contact</Link></li>
           </ul>
           <div className="icon">
           <FaBars className='bar'/>
            </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default Navber