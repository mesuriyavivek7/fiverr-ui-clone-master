import React from 'react'
import './gig.scss'

import Slider from 'infinite-react-carousel';
//import icons
import StarIcon from '@mui/icons-material/Star';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RecyclingIcon from '@mui/icons-material/Recycling';
import CheckIcon from '@mui/icons-material/Check';
//import images
import PP from '../../images/pp.jpg'
import UIUX1 from '../../images/ui-ux1.jpg'
import UIUX2 from '../../images/ui-ux2.jpg'
import UIUX3 from '../../images/ui-ux3.jpg'
import IndiaFlag from '../../images/india-falg.png'
import User from '../../images/uesr.jpg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';


export default function Gig() {
  return (
    <div className='gig'>
      <div className='container'>
         <div className='left'>
           <span className='initial'>FIVERR  GRAPHICS & DESIGN </span>
           <h1>I will create UI/UX design for you</h1>

           <div className='user'>
             <img src={PP} className='pp'></img>
             <span>Rohit Kavar</span>
             <div className='stars'>
               <StarIcon style={{color:"#FFC300"}}></StarIcon>
               <StarIcon style={{color:"#FFC300"}}></StarIcon>
               <StarIcon style={{color:"#FFC300"}}></StarIcon>
               <StarIcon style={{color:"#FFC300"}}></StarIcon>
               <StarIcon style={{color:"#FFC300"}}></StarIcon>
               <span style={{color:"#FFC300"}}>5</span>
             </div>
           </div>
           <Slider arrowsScroll={1} slidesToShow={1} className="slider">
            <img src={UIUX1}></img>
            <img src={UIUX2}></img>
            <img src={UIUX3}></img>
           </Slider>
           <h2 className='about'>About This Gig</h2>
           <p className='gig-desc'>
             UX writing and content design are essentially the same. Both content designers and writers are a part of the design process, follow style and brand guidelines, make decisions based on user research and testing and write the copy that will be included in the user interface.
             Content design came about in the late 1990s. Initially, content designers were expected to use CSS and HTML to create stellar user experiences, visual and written content. They basically handled typesetting, page layout and writing on webpages and emerging personal computer devices.
           </p>

           <div className='seller'>
             <h2>About The Seller</h2>

             <div className='user'>
               <img src={PP}></img>
               <div className='info'>
                 <span>Rohit Kavar</span>
                 <div className='stars'>
                  <StarIcon style={{color:"#FFC300"}}></StarIcon>
                  <StarIcon style={{color:"#FFC300"}}></StarIcon>
                  <StarIcon style={{color:"#FFC300"}}></StarIcon>
                  <StarIcon style={{color:"#FFC300"}}></StarIcon>
                  <StarIcon style={{color:"#FFC300"}}></StarIcon>
                  <span style={{color:"#FFC300"}}>5</span>
                </div>
                <button>Contact Me</button>
               </div>
             </div>
            </div>

          <div className='box'>
            <div className='items'>
               <div className='item'>
                 <span className='title'>From</span>
                 <span className='desc'>India</span>
               </div>
               <div className='item'>
                 <span className='title'>Member since</span>
                 <span className='desc'>March 2020</span>
               </div>
               <div className='item'>
                 <span className='title'>Avg. responce time</span>
                 <span className='desc'>4 hours</span>
               </div>
               <div className='item'>
                 <span className='title'>Last delivery</span>
                 <span className='desc'>1 day</span>
               </div>
               <div className='item'>
                 <span className='title'>Languages</span>
                 <span className='desc'>English</span>
               </div>
            </div>
            <hr></hr>
            <p>
                My name is rohit and i am member since 2020 and my consitancy is on next level to deliver project to client.
                Throughout the early 2000s, content design took on scripting, graphics, animation, audio, compelling text and interactivity 
                responsibilities. 
            </p>
         </div>
          
           <div className='reviews'>
             <h2>Reviews</h2>
             <div className='item'>
               <div className='user'>
                  <img src={User} className='pp'></img>
                  <div className='info'>
                     <span>Akshay Patel</span>
                     <div className='country'>
                       <img src={IndiaFlag}></img>
                       <span>India</span>
                     </div>
                  </div>
               </div>
               <div className='stars'>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <span style={{color:"#FFC300"}}>5</span>
               </div>
               <p>
                 i am very satisfy by his work and want to give him next project
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                 ut labore et dolore magna aliqua.
               </p>
               <div className='helpfull'>
                  <span>Helpfull?</span>
                  <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                  <span>Yes</span>
                  <ThumbDownOffAltIcon> </ThumbDownOffAltIcon>
                  <span>No</span>
               </div>
             </div>
             <hr></hr>
             <div className='item'>
               <div className='user'>
                  <img src={User} className='pp'></img>
                  <div className='info'>
                     <span>Akshay Patel</span>
                     <div className='country'>
                       <img src={IndiaFlag}></img>
                       <span>India</span>
                     </div>
                  </div>
               </div>
               <div className='stars'>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <span style={{color:"#FFC300"}}>5</span>
               </div>
               <p>
                 i am very satisfy by his work and want to give him next project
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                 ut labore et dolore magna aliqua.
               </p>
               <div className='helpfull'>
                  <span>Helpfull?</span>
                  <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                  <span>Yes</span>
                  <ThumbDownOffAltIcon> </ThumbDownOffAltIcon>
                  <span>No</span>
               </div>
             </div>
             <hr></hr>

             <div className='item'>
               <div className='user'>
                  <img src={User} className='pp'></img>
                  <div className='info'>
                     <span>Akshay Patel</span>
                     <div className='country'>
                       <img src={IndiaFlag}></img>
                       <span>India</span>
                     </div>
                  </div>
               </div>
               <div className='stars'>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <span style={{color:"#FFC300"}}>5</span>
               </div>
               <p>
                 i am very satisfy by his work and want to give him next project
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                 ut labore et dolore magna aliqua.
               </p>
               <div className='helpfull'>
                  <span>Helpfull?</span>
                  <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                  <span>Yes</span>
                  <ThumbDownOffAltIcon> </ThumbDownOffAltIcon>
                  <span>No</span>
               </div>
             </div>
             <hr></hr>
             <div className='item'>
               <div className='user'>
                  <img src={User} className='pp'></img>
                  <div className='info'>
                     <span>Akshay Patel</span>
                     <div className='country'>
                       <img src={IndiaFlag}></img>
                       <span>India</span>
                     </div>
                  </div>
               </div>
               <div className='stars'>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <StarIcon style={{color:"#FFC300"}}></StarIcon>
                <span style={{color:"#FFC300"}}>5</span>
               </div>
               <p>
                 i am very satisfy by his work and want to give him next project
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                 ut labore et dolore magna aliqua.
               </p>
               <div className='helpfull'>
                  <span>Helpfull?</span>
                  <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                  <span>Yes</span>
                  <ThumbDownOffAltIcon> </ThumbDownOffAltIcon>
                  <span>No</span>
               </div>
             </div>


           </div>
         </div>
         <div className='right'>
            <div className='price'>
              <h3>1 Ui/Ux Design</h3>
              <h2>$ 59.99</h2>
            </div>
            <p>I will Create a unique high quality Design for your website and bext user interface is also there.</p>
            <div className='details'>
              <div className='item'>
                 <AccessAlarmIcon></AccessAlarmIcon>
                 <span>2 days delivery</span>
              </div>
              <div className='item'>
                 <RecyclingIcon></RecyclingIcon>
                 <span>3 revision</span>
              </div>
            </div>
            <div className='features'>
               <div className='item'>
                  <CheckIcon style={{color:"green"}}></CheckIcon>
                  <span>Promt Writing</span>
               </div>
               <div className='item'>
                 <CheckIcon style={{color:"green"}}></CheckIcon>
                 <span>Ui/Ux Modules</span>
               </div>
               <div className='item'>
                <CheckIcon style={{color:"green"}}></CheckIcon>
                <span>User Interect Design</span>
               </div>
               <div className='item'>
                <CheckIcon style={{color:"green"}}></CheckIcon>
                <span>Additional Design</span>
               </div>
            </div>
            <button>Continue</button>
         </div>
      </div>
    </div>
  )
}
