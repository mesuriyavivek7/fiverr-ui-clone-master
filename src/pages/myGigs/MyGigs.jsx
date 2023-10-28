import React from 'react'
import './mygigs.scss'
import { Link } from 'react-router-dom'

import DeleteIcon from '@mui/icons-material/Delete';

//import images
import PJ from '../../images/pj.jpg'

export default function MyGigs() {
  

  return (
    <div className='mygigs'>
       <div className='container'>
          <div className='title'>
            <h1>Gigs</h1>
            <Link to='/add'><button>Add New Gig</button></Link>
          </div>
          <table>
             <tr>
               <th>Image</th>
               <th>Title</th>
               <th>Price</th>
               <th>Sales</th>
               <th>Action</th>
             </tr>
             <tr>
               <td><img className='img' src={PJ}></img></td>
               <td>Gig1</td>
               <td>88</td>
               <td>123</td>
               <td>
                 <DeleteIcon className='delete' style={{color:"red"}}></DeleteIcon>
               </td>
            </tr>
            <tr>
               <td><img className='img' src={PJ}></img></td>
               <td>Gig2</td>
               <td>88</td>
               <td>123</td>
               <td>
                 <DeleteIcon className='delete' style={{color:"red"}}></DeleteIcon>
               </td>
            </tr>
            <tr>
               <td><img className='img' src={PJ}></img></td>
               <td>Gig3</td>
               <td>88</td>
               <td>123</td>
               <td>
                 <DeleteIcon className='delete' style={{color:"red"}}></DeleteIcon>
               </td>
            </tr>
            <tr>
               <td><img className='img' src={PJ}></img></td>
               <td>Gig4</td>
               <td>88</td>
               <td>123</td>
               <td>
                 <DeleteIcon className='delete' style={{color:"red"}}></DeleteIcon>
               </td>
            </tr>
          </table>
       </div>
    </div>
  )
}
