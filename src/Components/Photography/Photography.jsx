import React from 'react'
import './Photography.css'

const Photography = () => {
  return (
    <>
    <div className="Sadman_photo">
      <div className="container">
         <div className="flex_photo">
         <div className="main_photography">
             <h2>Lovely words
             from my clients</h2>
             <button>View All Reviews</button>
         </div>
         <div className="for_text_photo">
            <img src="Images/photography2.jpg" alt="pho" />
            <p><span className=' inline-block font-bold'>"Jenifer Lofez</span> is Just an awesome photografer and great person Even if ifis your first photosession, don't worry, Kaya wIl calm you down, give a lot of helpful tips ans suggestions She is so calm and attentive,
            My entire family was impressed by her 
            and photographs.</p>
            
         </div>
         </div>
         
         {/* =-=-=-=-=-=-=-=-=-=-=-  another part */}
         <div className="allpart">
            <h2>Affordable 
           <u> pricing  plan </u></h2>
          <div className="niche">
          <div className="pho_car">
               <div className="single_card">
                  <div className="top">
                       <h3>Maternity</h3>
                       <h5>$500</h5>
                  </div>
                  <p>
                  The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.
                  </p>
                  <button>
                  Book Now
                  </button>
               </div>
               <div className="single_card">
                  <div className="top">
                       <h3>Maternity</h3>
                       <h5>$500</h5>
                  </div>
                  <p>
                  The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.
                  </p>
                  <button>
                  Book Now
                  </button>
               </div>
               <div className="single_card">
                  <div className="top">
                       <h3>Maternity</h3>
                       <h5>$500</h5>
                  </div>
                  <p>
                  The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.
                  </p>
                  <button>
                  Book Now
                  </button>
               </div>
               <div className="single_card">
                  <div className="top">
                       <h3>Maternity</h3>
                       <h5>$500</h5>
                  </div>
                  <p>
                  The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.
                  </p>
                  <button>
                  Book Now
                  </button>
               </div>
            </div>
          </div>
         </div>
         {/* =-----------=-=-=-=- THERD PART */}
         <div className="ready_sadman">
            <img src="Images/download.jpg" alt="sdaf" />
            <div className="ready_text_num">
               <h2>Ready to make
               your moment
               memorable?</h2>
              <div className="now_cont">
               <button>Contract</button>
              <div className="contract">
                  <p>+8801932210174</p>
                  <p>sadman.fed.com</p>
               </div>
              </div>
            </div>
         </div>
         {/* =-=-=-=-=-=-=-=-=-=- latest blog */}
         <div className="latest_blog">
            <div className="blog_for_text">
             <h2>Latest blog</h2>
             <button>View All Blog</button>
            </div>
            <div className="sad_blog_img">
               <div className="side_img">
                     <div className="blog_vid">
                          <img src="Images/blog1.jpg" alt="blog" />
                         <div className="time">
                           <li>05 Feb, 2022</li>
                           <li>5 min</li>
                         </div>
                          <h3>Speech has never been free, and 
                          that’s good</h3>
                     </div>
                     <div className="blog_vid">
                          <img src="Images/blog2.jpg" alt="blog" />
                         <div className="time">
                           <li>05 Feb, 2022</li>
                           <li>5 min</li>
                         </div>
                          <h3>Speech has never been free, and 
                          that’s good</h3>
                     </div>
                     
                     
               </div>
               <div className="big_blog">
                  <img src="Images/blog3.jpg" alt="blog" />
                  <div className="time">
                           <li>05 Feb, 2022</li>
                           <li>5 min</li>
                         </div>
                          <h3>Speech has never been free, and 
                          that’s good</h3>
               </div>
            </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default Photography