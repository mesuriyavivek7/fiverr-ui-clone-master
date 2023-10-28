import React from 'react'
import './messages.scss';

import { Link } from 'react-router-dom'

export default function Messages() {
  return (
    <div className='messages'>
       <div className='container'>
          <div className='title'>
            <h1>Messages</h1>
          </div>
          <table>
             <tr>
               <th>Buyer</th>
               <th>Last Message</th>
               <th>Date</th>
               <th>Action</th>
             </tr>
             <tr className="active">
               <td>John Deo</td>
               <td><Link to="/message/123" className="link">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</Link></td>
               <td>1 day ago</td>
               <td>
                 <button>Mark as Read</button>
               </td>
            </tr>
            <tr className="active">
               <td>John Deo</td>
               <td><Link to="/message/123" className="link">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</Link></td>
               <td>1 day ago</td>
               <td>
                 <button>Mark as Read</button>
               </td>
            </tr>
            <tr>
               <td>John Deo</td>
               <td><Link to="/message/123" className="link">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</Link></td>
               <td>1 day ago</td>
               <td>
                 
               </td>
            </tr>
            <tr>
               <td>John Deo</td>
               <td><Link to="/message/123" className="link">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</Link></td>
               <td>1 day ago</td>
               <td>
                 
               </td>
            </tr>
          </table>
       </div>
    </div>
  )
}
