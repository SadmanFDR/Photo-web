import React from 'react'
import './Banner1.css'
import { Link } from 'react-router-dom'
import mainBG from '..//../assets/image/banner.jpg'

const Banner1 = () => {
  return (
    <>
<div style={{background: `url(${mainBG})`,widows: '100%', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}} className="sadman_ban">

<div className="container">
<div className="main_div">
<div className="side_text">
   <img src="Images/text.png" alt="text" />
    <p>Professional Photographer</p>
  </div> 
<div className="align_all">
<div className="heading">
    <h1 className='leading-[50px] lg:leading-[62px]'>Love to <u>capture</u>the best <u>moments</u></h1>

    <p>Distinctively re-engineer process-centric growth strategies without granular process improvements.</p>
  </div>
  <div className="video_part">
  <video controls className='video'>
      <source src="Video/video.mp4" type="video/mp4"/>
     </video>
      <img src="Images/Video.png" alt="text" />
  </div>
 
  {/* +___________= video part */}
<div className="for_flex">
<div className="hodai">
 <ul className='menu_soc'>
    <li><Link to={'#'}>Linkedin</Link></li>
    <li><Link to={'#'}>Instagram</Link></li>
    <li><Link to={'#'}>Twitter</Link></li>
    <li><Link to={'#'}>Facebook</Link></li>
  </ul> 
 </div>
</div>
</div> 
  
</div>
</div>

</div>
    </>
  )
}

export default Banner1