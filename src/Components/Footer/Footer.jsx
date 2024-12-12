import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <footer className='fffffff'>
      <div className="container">
        <div className="main_foo">
         <div className="logo">
         <img src="Images/logo.png" alt="lgo" /> <h3>Mcap.</h3>
         </div>
          <div className="contract">
            <p>© 2022 Elliana Mary  All Rights Reserved</p>
          </div>
          <span></span>
          <ul className='foo_bar'>
            <li><Link to={'/'}>About</Link></li>
            <li><Link to={'/'}>Project</Link></li>
            <li><Link to={'/'}>Blog</Link></li>
            <li><Link to={'/'}>Pricing</Link></li>
            <li><Link to={'/'}>Studio</Link></li>
            <li><Link to={'/'}>Contact</Link></li>
           </ul>
           <span></span>
           <ul className='foot_soc'>
           <li><Link to={'#'}>Linkedin</Link></li>
            <li><Link to={'#'}>Instagram</Link></li>
            <li><Link to={'#'}>Twitter</Link></li>
            <li><Link to={'#'}>Facebook</Link></li>
           </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer