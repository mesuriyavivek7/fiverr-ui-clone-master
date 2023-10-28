import React from 'react'
import './add.scss'

export default function Add() {
    
  return (
    <div className='add'>
       <div className='container'>
         <h1>Add New Gig</h1>
         <div className='sections'>
            <div className='left'>
             <label>Title</label>
              <input type='text' placeholder="e.g. I will do something I'm really good at"></input>
              <label>Category</label>
              <select name='cats' id='cats'>
                 <option value='design'>Design</option>
                 <option value='web'>Web Devlopment</option>
                 <option value='animation'>Animation</option>
                 <option value='music'>Music</option>
              </select>
              <label>Cover Image</label>
              <input type='file' ></input>
              <label>Upload Images</label>
              <input type='file' multiple></input>
              <label>Description</label>
              <textarea placeholder='Brief description to introduce your service to customers'></textarea>
              <button>create</button>
            </div>
            <div className='right'>
              <label>Service Title</label>
              <input type='text' placeholder="e.g. One-page web design"></input>
              <label>Short Description</label>
              <textarea placeholder='Short description of your service'></textarea>
              <label>Delivery Time (e.g. 3days)</label>
              <input type='number' min={1}></input>
              <label>Revision Number</label>
              <input type='number' min={1}></input>
              <label>Add Features</label>
              <input type='text' placeholder='e.g. page design'></input>
              <input type='text' placeholder='e.g. file uploading'></input>
              <input type='text' placeholder='e.g. setting up a domain'></input>
              <input type='text' placeholder='e.g. hosting'></input>
              <label>Price</label>
              <input type='number' min={1}></input>
            </div>
         </div>
       </div>
    </div>
  )
}
