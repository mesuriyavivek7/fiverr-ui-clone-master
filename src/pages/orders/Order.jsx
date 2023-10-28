import React from 'react'

import './order.scss'
import EmailIcon from '@mui/icons-material/Email';

import PJ from '../../images/pj.jpg'
export default function Order() {


  const currentUser={
    id:1,
    username:"vivek mesuriya",
    isSeller:true
 }

  return (
    <div className='orders'>
       <div className='container'>
          <div className='title'>
            <h1>Orders</h1>
          </div>
          <table>
             <tr>
               <th>Image</th>
               <th>Title</th>
               <th>Price</th>
               <th>{currentUser.isSeller? "Buyer":"Seller"}</th>
               <th>Contact</th>
             </tr>
             <tr>
               <td><img className='img' src={PJ}></img></td>
               <td>Gig1</td>
               <td>88</td>
               <td>123</td>
               <td>
                 <EmailIcon style={{color:"lightblue"}} className='delete'></EmailIcon>
               </td>
            </tr>
            <tr>
               <td><img className='img' src={PJ}></img></td>
               <td>Gig2</td>
               <td>88</td>
               <td>123</td>
               <td>
               <EmailIcon style={{color:"lightblue"}} className='delete'></EmailIcon>
               </td>
            </tr>
            <tr>
               <td><img className='img' src={PJ}></img></td>
               <td>Gig3</td>
               <td>88</td>
               <td>123</td>
               <td>
               <EmailIcon style={{color:"lightblue"}} className='delete'></EmailIcon>
               </td>
            </tr>
            <tr>
               <td><img className='img' src={PJ}></img></td>
               <td>Gig4</td>
               <td>88</td>
               <td>123</td>
               <td>
               <EmailIcon style={{color:"lightblue"}} className='delete'></EmailIcon>
               </td>
            </tr>
          </table>
       </div>
    </div>
  )
}
