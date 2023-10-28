import React from 'react'
import Featured from '../../Components/featured/Featured'
import TrustedBy from '../../Components/trustedBy/TrustedBy'
import Slide from '../../Components/slide/Slide'
import CatCard from '../../Components/card/CatCard'
import {cards} from '../../data'
import {projects} from '../../data'

import './home.scss'

//import video
import Featurevideo from '../../images/feature.mp4' 

//import icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Business from '../../images/business.png'
import CatProject from '../../Components/project/CatProject'

export default function HomeSet() {
  return (
    <div className='home'> 
     <Featured></Featured>
     <TrustedBy></TrustedBy>
     <Slide slidesToShow={5} arrowsScroll={5}>
         {cards.map(card=>(
            <CatCard item={card} key={card.id}></CatCard>
         ))}
     </Slide>

     <div className='features'>
       <div className='container'>
          <div className='item'>
             <h1>A Whole world of freelance talent at your fingertips</h1>
             <div className='title'>
                <CheckCircleIcon></CheckCircleIcon>
                The best of every budget
             </div>
             <p>Find high-quality services at every price point , No hourly rates, just project-based pricing</p> 

             <div className='title'>
             <CheckCircleIcon></CheckCircleIcon>
                The best of every budget
             </div>
             <p>Find high-quality services at every price point , No hourly rates, just project-based pricing</p>

             <div className='title'>
             <CheckCircleIcon></CheckCircleIcon>
                The best of every budget
             </div>
             <p>Find high-quality services at every price point , No hourly rates, just project-based pricing</p>

             <div className='title'>
             <CheckCircleIcon></CheckCircleIcon>
                The best of every budget
             </div>
             <p>Find high-quality services at every price point , No hourly rates, just project-based pricing</p>

          </div>
          <div className='item'>
             <video src={Featurevideo} autoPlay controls></video>
          </div>
       </div>
     </div>


     <div className='features dark'>
       <div className='container'>
          <div className='item'>
             <h1>fiverr business</h1>
             <h1>a business solution design for teams</h1>
             <p>Upgrade to a curated experience packed with tools and benefits,
                dedicated to business
             </p>
             <div className='title'>
               <CheckCircleIcon></CheckCircleIcon>
               Connect to freelancer with proven business experience
             </div>
             <div className='title'>
               <CheckCircleIcon></CheckCircleIcon>
               Connect to freelancer with proven business experience
             </div>
             <div className='title'>
               <CheckCircleIcon></CheckCircleIcon>
               Connect to freelancer with proven business experience
             </div>
             <div className='title'>
               <CheckCircleIcon></CheckCircleIcon>
               Connect to freelancer with proven business experience
             </div>
             <button>Explore Fiverr Business</button>
          </div>
          <div className='item'>
             <img src={Business}></img>
          </div>
       </div>
     </div>

     <Slide slidesToShow={4} arrowsScroll={4}>
         {projects.map(project=>(
            <CatProject item={project} key={project.id}></CatProject>
         ))}
     </Slide>
    </div>
  )
}
