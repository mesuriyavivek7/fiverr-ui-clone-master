import React, { useState } from 'react'
import './gigs.scss'

//import icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import {gigs} from "../../data"

import GigCard from '../../Components/gigcard/GigCard';

export default function Gigs() {

  const [open,setOpen]=useState(false)
  const [sort,isSort]=useState("sales")

  const reSort=(type)=>{
      isSort(type)
      setOpen(false)
  }

  return (
    <div className='gigs'>
       <div className='container'>
           <span className='initial'>FIVERR  GRAPHICS & DESIGN </span>
           <h1>AI Artist</h1>
           <p>Explore the boundaries of art and technology with Fiverrs AI Artist</p>

           <div className='menu'>
               <div className='left'>
                  <span>Budged</span>
                  <input type='text' placeholder='min'></input>
                  <input type='text' placeholder='max'></input>
                  <button>Apply</button>
               </div>
               <div className='right'>
                  <span className='sortBy'>sortBy</span>
                  <span className='sortType'>{sort==="sales"?"Best Selling":"Newest"}</span>
                  {(!open)?(<ArrowDropDownIcon onClick={()=>setOpen(!open)}></ArrowDropDownIcon>):(<ArrowDropUpIcon onClick={()=>setOpen(!open)}></ArrowDropUpIcon>)}
                  {
                   open &&( <div className='rightmenu'>
                    {
                     sort==="sales"?(<span onClick={()=>reSort("createdAt")}>Newest</span>):
                     (<span onClick={()=>reSort("sales")}>Best Selling</span>)
                    }
                    
                   </div> )
                  }
               </div>
           </div>

           <div className='cards'>
                {
                  gigs.map(gig=>(
                    <GigCard key={gig.id} item={gig}></GigCard>
                  ))
                }
           </div>
       </div>
    </div>
  )
}
