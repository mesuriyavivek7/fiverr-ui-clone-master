import React from 'react'

import './slide.scss'

import Slider from 'infinite-react-carousel';



export default function Slide({children,slidesToShow,arrowsScroll}) {
  
  return (
    <div className='slide'>
        <div className='container'>

          <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
               {children}
          </Slider> 
        </div>
    </div>
  )
}
