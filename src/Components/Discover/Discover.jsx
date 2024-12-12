import React from 'react'
import './Discover.css'
import { Link } from 'react-router-dom'
const Discover = () => {
  return (
    <>
    <div className="all_dis">
      <div className="container">
         <div className="main_dis">
            <h2 className="heading">Discover my
            featured works</h2>
            <ul>
               <li><Link to={'#'}>All</Link></li>
               <li><Link to={'#'}>Maternity</Link></li>
               <li><Link to={'#'}>Portrait</Link></li>
               <li><Link to={'#'}>Travel</Link></li>
               <li><Link to={'#'}>Weeding</Link></li>
               <li><Link to={'#'}>Others</Link></li>
            </ul>
            <div className="cards">
              <div className="absu">
               {/* <p>Headshot</p> */}
              <img src="Images/card.jpg" alt="card" />
              </div>
              <div className="absu">
               {/* <p>Portrait</p> */}
              <img src="Images/card1.jpg" alt="card" />
              </div>
              <div className="absu">
               {/* <p>Weeding</p> */}
              <img src="Images/card.jpg" alt="card" />
              </div>
              <div className="absu">
               {/* <p>Maternity</p> */}
              <img src="Images/card1.jpg" alt="card" />
              </div>
              
            </div>
            <button>View All Works</button>
         </div>
      </div>
    </div>
    </>
  )
}

export default Discover