import React from 'react'
import './gigcard.scss'
import { Link } from 'react-router-dom'

//import icons
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function GigCard({item}) {
  return (
    <Link to='/gig/555' className='link' >
    <div className='gigCard'>
       <img src={item.img}></img>

       <div className='info'>
          <div className='user'>
            <img src={item.pp}></img>
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className='star'>
            <StarIcon className='staricon'></StarIcon>
            <span>{item.star}</span>
          </div>
       </div>
       <hr></hr>
       <div className='details'>
           <FavoriteIcon></FavoriteIcon>
           <div className='price'>
             <span>STARTING AT</span>
             <h2>${item.price}</h2>
           </div>
       </div>
    </div>
    </Link>
  )
}
