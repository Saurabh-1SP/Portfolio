import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'

import './About.scss'
import { images } from '../../constants'
// import { urlFor, client} from '../../client'
import { AppWraper, motionWrap} from '../../Wrappers'


const About = () => {

    const abouts = [
        {
            tittle: 'Backend Developer',
            description: ` I'm a backend developer with a passion for solving complex problems and delivering effective solutions. I have experience working with technologies such as Node.js, Express, and MongoDB, and I excel at building scalable, secure, and efficient server-side applications. I have a strong understanding of server-side scripting, and I'm always seeking to improve my skills and stay current with the latest industry advancements. Whether working on a simple backend service or a complex system, I bring my best to every project and strive to exceed expectations.`,
            imgUrl: images.about01
        },
        {
            tittle: 'React Developer',
            description: `I am a React developer with a passion for crafting user-friendly web experiences. My expertise in JavaScript, HTML, and CSS allows me to turn ideas into polished, functional interfaces. I'm constantly seeking new ways to push the limits of what's possible, always striving to learn and grow as a developer. Whether working on a simple site or a complex application, I bring my best to every project and always aim to deliver outstanding results.`,
            imgUrl: images.about03
        },
        {
            tittle: 'Frontend Developer',
            description: ` I'm a frontend developer with a focus on React. I have a passion for creating beautiful and intuitive user interfaces that deliver a great experience. With a strong foundation in JavaScript, HTML, and CSS, I bring ideas to life and make sure that they work seamlessly for users. I'm always looking for ways to improve my skills and stay up-to-date with the latest trends in frontend development. Whether working on a small project or a complex application, I bring my best to every task and strive to exceed expectations.`,
            imgUrl: images.about04
        },
    ]

  return (
    <div id='About' className='app__about'>
      <h2 className='head-text'>I Know that <span>Good Development</span><br/>means <span>Good Business</span></h2>
      
      <div className='app__profiles'>
        {abouts.map((about, index)=>(
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type: 'tween'}}
          key={about.tittle+index}
          className="app__profile-item"
          >
            <img src={about.imgUrl} alt={about.tittle}/>
            <h2 className='bold-text' style={{marginTop:20}} >{about.tittle}</h2>
            <p className='p-text' style={{marginTop:20}} >{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWraper(
  motionWrap(About),
  'About',
  'app__whitebg'
  )