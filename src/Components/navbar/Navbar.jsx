import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'

//import images
import UserLogo from '../../images/user-logo.png'

export default function Navbar() {

  const [active,setActive]=useState(false)

  const currentUser={
     id:1,
     username:"vivek mesuriya",
     isSeller:true
  }

  const {pathname}=useLocation()

  const [open,setOpen]=useState(false)

  const isActive=()=>{
    window.scrollY>0 ? setActive(true): setActive(false)
  }
  useEffect(()=>{
      window.addEventListener("scroll",isActive)

      return ()=>{
        window.removeEventListener("scroll",isActive)
      }
  },[])

  return (
    <div className={active || pathname!=="/" ? "navbar active":"navbar"}>
        <div className='container'>
              <div className='logo'>
                 <Link to="/" className='link'>
                 <span className='text'>fiverr</span>
                 </Link>
                 <span className='dot'>.</span>
              </div>
              <div className='links'>
                  <span>Fiverr Business</span>
                  <span>Explore</span>
                  <span>English</span>
                  <span>Sign in</span>
                {!currentUser.isSeller && <span>Become a Seller</span> }
                 {!currentUser && <button>Join</button> }
                 {currentUser && (
                     <div className='user' onClick={()=>setOpen(!open)}>
                       <img src={UserLogo}></img>
                       <span>{currentUser.username}</span>
                       
                     {open && (<div className='options'>
                          {
                            currentUser.isSeller && (
                                <>
                                    <Link  className='link' to='/mygigs'>Gigs</Link>
                                    <Link  className='link' to='/add'>Add New Gig</Link>
                                </>
                            )}
                            <Link className='link' to='/orders'>Orders</Link>
                            <Link className='link' to='/messages'>Messages</Link>
                            <Link className='link' to='/'>Logout</Link>
                       </div>)}

                     </div>
                 )}
              </div>
        </div>
        
        {active || pathname!=="/" && (
        <>
          <hr />
          <div className='menu'>
              <Link className='link menulink' to="/">
                 Graphics & Design
              </Link>
              <Link className='link' to='/'>
                 Video & Animation
              </Link>
              <Link className='link' to='/'>
                  Writing & Transition
              </Link>
              <Link className='link' to='/'>
                AI Services
              </Link>
              <Link className='link' to='/'>
                 Digital Marketing
              </Link>
              <Link className='link' to='/'>
                 Music & Audio
              </Link>
              <Link className='link' to='/'>
                 Lifestyle
              </Link>
           </div>
           <hr></hr>
        </>
        )
        }
    </div>
  )
}
