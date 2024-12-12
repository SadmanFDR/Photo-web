import React from 'react'
import './Banner2.css'
import { Link } from 'react-router-dom'

const Banner2 = () => {
  return (
    <>
    <div className="Ban2sadman_con">
      <div className="container">
        <div className="all_wrap">
          <div className="for_logo">
            <ul>
              <li><Link to={'#'}> <img src="Images/glogo1.png" alt="logo" /> </Link></li>
              <li><Link to={'#'}> <img src="Images/glogo2.png" alt="logo" /> </Link></li>
              <li><Link to={'#'}> <img src="Images/glogo3.png" alt="logo" /> </Link></li>
              <li><Link to={'#'}> <img src="Images/glogo4.png" alt="logo" /> </Link></li>
              <li><Link to={'#'}> <img src="Images/glogo5.png" alt="logo" /> </Link></li>
              <li><Link to={'#'}> <img src="Images/glogo6.png" alt="logo" /> </Link></li>
              <li><Link to={'#'}> <img src="Images/glogo7.png" alt="logo" /> </Link></li>
              <li><Link to={'#'}> <img src="Images/glogo8.png" alt="logo" /> </Link></li>
            </ul>
          </div>
          {/* =-=-=-=-=-=-=-=-=- enjoy poson */}
          <div className="enjoy_main_part">
            <div className="for_imag_eng">
               <div className="eng_heading">
                <h2>I enjoy 
                 <u> capturing</u> people</h2>
                <img className='text_img' src="Images/etext.png" alt="etext" />
                <img className='two_friend' src="Images/group2.jpg" alt="Enjoy" />
               </div>
               <div className="for_four_friend">
                <img className='four_img' src="Images/group444.png" alt="Enjoy" />
               </div>
            </div>
            <div className="for_text">
              <h2 className='text-[23px] text-white font-Cormorant font-bold mr-[16px]'>Hi there!</h2>
              <img  src="Images/hi.png" alt="HI" />
              <p className='one_par'>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you  free.</p>

             <div className="for_but">
             <p className='two_par'>You can customize a template or make your own from scratch, with an immersive library at your disposal.</p>
             <button>Contact with Me</button>
             </div>
            </div>
          </div>
        </div>
      <div className="for_flex">
      <div className="for_hill">
          <h2>Got many
            valuable  
            <u> awards</u></h2>
          <img src="Images/hill.jpg" alt="explor" />
          <ul>
            <li>2018 - Berlin Talent</li>
            <li>2019 - Portrait Award</li>
            <li>2020 - MKEL/Best Prir</li>
            <li>2021 - The Artist Award</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Banner2