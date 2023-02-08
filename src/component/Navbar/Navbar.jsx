import React,{useState} from 'react'
import { HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import './Navbar.scss'

import {images} from '../../constants'

const 
Navbar = () => {

  const [toggle, setToggle] = useState(false);


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.SaurabhLogo} alt="logo" />
        {/* <img src={images.pasi} alt="" /> */}
      </div>
      <ul className='app__navbar-links'> 
        {['Home' , 'About', 'Work', 'Skills', 'Contact'].map((items,index)=>(
          <li key={`link-${items}${index}`}
          className=' app__flex p-text'>
            <div/>
            <a href={`#${items}`}>{items}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        {/* <HiMenuAlt4 onClick={()=> setToggle(true)} /> */}

        {toggle ? (
          <motion.div
          whileInView={{ x:[300, 0]}}
          transition={{duration:0.85,ease: 'easeOut'}}
          >
            <HiX onClick={()=> setToggle(false)}/>
            <ul > 
        {['Home' , 'About', 'Work', 'Skills', 'Contact'].map((items,index)=>(
          <li key={`link-${items}${index}`} onClick={()=> setToggle(false)}
          className=' app__flex p-text'>
            <a href={`#${items}`}>{items}</a>
          </li>
        ))}
      </ul>
          </motion.div>
        ): (
            <HiMenuAlt4 onClick={()=> setToggle(true)} />
        )

        }
        </div>
    </nav>
  )
}

export default Navbar