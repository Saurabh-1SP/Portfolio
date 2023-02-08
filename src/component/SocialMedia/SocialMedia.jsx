import React from 'react'
import { BsTwitter, BsInstagram,} from 'react-icons/bs'
import {FaFacebookF,} from 'react-icons/fa'

import { images } from '../../constants'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div><a href="https://www.freelancer.com/u/saurabhpasi1" target='_blank'><img src={images.freelancer} /></a>  </div>
        <div> <a href="https://www.upwork.com/freelancers/~01682612f2d0ecad7e" target='_blank'><img src={images.upwork}/></a> </div>
        {/* <div> <BsInstagram/> </div> */}
    </div>
  )
}

export default SocialMedia