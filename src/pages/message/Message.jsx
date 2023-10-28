import React from 'react'
import './message.scss'
import { Link } from 'react-router-dom'

//import image
import Yash from '../../images/yash.jpg'

export default function Message() {
  return (
    <div className='message'>
       <div className='container'>
         <span className='initial'>
           <Link to='/messages'>Messages</Link> - Vivek mesuriya 
         </span>
         <div className='messages'>
            <div className='item'>
              <img src={Yash}></img>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
            <div className='item owner'>
              <img src={Yash}></img>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
            <div className='item'>
              <img src={Yash}></img>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
            <div className='item owner'>
              <img src={Yash}></img>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
            <div className='item'>
              <img src={Yash}></img>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
            <div className='item owner'>
              <img src={Yash}></img>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
         </div>
         <hr></hr>
         <div className='write'>
           <textarea placeholder='Write your message'></textarea>
           <button>Send</button>
         </div>
       </div>
    </div>
  )
}
