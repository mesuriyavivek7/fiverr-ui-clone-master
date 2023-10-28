import React from 'react'

import './catcard.scss'
import { Link } from 'react-router-dom'

//import Slider from 'infinite-react-carousel';



export default function CatCard({item}) {
   
  return (
    <Link to="/gigs/design" className='link'>
       <div className='catcard'>
             <img src={item.img} alt=''></img>
             <span className='desc'>{item.desc}</span>
             <span className='title'>{item.title}</span>
      </div>
    </Link>
  )
}