import React from 'react'
//import icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PixIcon from '@mui/icons-material/Pix';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./trustedby.scss"
export default function TrustedBy() {
  return (
     <div className='trustedby'>
        <div className='container'>
           <span>Trusted By</span>
           <FacebookIcon className='icon'></FacebookIcon>
           <TwitterIcon className='icon'></TwitterIcon>
           <GoogleIcon className='icon'></GoogleIcon>
           <PixIcon className='icon'></PixIcon>
           <LinkedInIcon className='icon'></LinkedInIcon>
          </div>
     </div>
  )
}
