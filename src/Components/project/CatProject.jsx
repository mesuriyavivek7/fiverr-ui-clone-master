import React from 'react'

import './catproject.scss'
import { Link } from '@mui/material'

//import Slider from 'infinite-react-carousel';



export default function CatProject({item}) {
   
  return (
    
       <div className='catproject'>
             <img src={item.img}></img>
             <div className='info'>
                <img src={item.pp }></img>
                <div className='text'>
                    <h2>{item.cat}</h2>
                    <span>{item.username}</span>
                </div>
             </div>
      </div>
  )
}