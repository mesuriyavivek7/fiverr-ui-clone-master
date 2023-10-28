import React from 'react'
import './featured.scss'

//import image
import Man from "../../images/man-crop.png"
import Search from "../../images/search-icon.png"

export default function Featured() {
  return (
    <div className='featured'>
      <div className='container'>
          <div className='left'>
             <h1> Find the perfect <i>freelance</i> services for your business</h1>
             <div className='search'>
                <div className='searchInput'>
                    <img src={Search}></img>
                    <input type='text' placeholder='Try "building mobile app"'></input>
                </div>
                <button>Search</button>
             </div>
             <div className='populer'>
                  <span>Populer:</span>
                  <button>Web Design</button>
                  <button>Wordpress</button>
                  <button>Logo Design</button>
                  <button>AI Services</button>
             </div>
          </div>
          <div className='right'>
               <img src={Man}></img>
          </div>
      </div>
    </div>
  )
}
