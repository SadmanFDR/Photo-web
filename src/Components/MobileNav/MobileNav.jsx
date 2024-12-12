import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

const MobileNav = () => {
  const [show , setshow] = useState(false)

  return (
    <>
    <nav className='ResMobile'>
        <div className="container">
        <div className="Mob-row">
          <div className="mob-logo">
          <Link to={'/'}> <img src="Images/logo.png" alt="logo" /><span>Mcap.</span></Link>  
            <div onClick={()=>setshow(!show)} className="menu-icon">
            <IoMdMenu  className='main_icon'/>
            </div>
          </div>
          
      {
        show ?
       <div className="all_menu">
         <ul className='Mobile-menu'>
          <li><Link to={"/"}>About</Link></li>
          <li><Link to={'/'}>Project</Link></li>
          <li><Link to={"/"}>Blog</Link></li>
          <li><Link to={"/"}>Pricing</Link></li>
          <li><Link to={"/"}>Studio</Link></li>
          <li><Link to={"/"}>Contact</Link></li>
        </ul>
        <ul className='side_menu_top'>
    <li><Link to={'#'}>Linkedin</Link></li>
    <li><Link to={'#'}>Instagram</Link></li>
    <li><Link to={'#'}>Twitter</Link></li>
    <li><Link to={'#'}>Facebook</Link></li>
    </ul>
       </div>



        :
        ''
      }
        
            
        </div>
        </div>
    </nav>
    </>
  )
}

export default MobileNav