import React,{useState} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import "react-tooltip/dist/react-tooltip.css";
import {motion} from 'framer-motion'

import { AppWraper, motionWrap } from '../../Wrappers'
import { images } from '../../constants'
import './Work.scss'

const Work = () => {

  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1 })
  const [activeFilter, setActiveFilter] = useState('All');
  const [filterWork, setFilterWork] = useState([])

  const works = [
    {
        tittle: 'Dalle clone',
        description: 'This website is the clone of the Dalle so it has all features like dalle. And i also add community area where people can watch other images and prompt, they can post there imagaes.There is search bar to search prompt or images',
        imgUrl: images.dalleimg ,
        projectLink: 'https://marvelous-sunshine-bd31a7.netlify.app/',
        link: 'https://github.com/Saurabh-1SP/Dall-e',
        tags: ['React JS','All'],
    },
    {
        tittle: 'ChatGPT',
        description: 'I fond figma design for chapgpt website. So i made responsive desing using reactjs',
        imgUrl: images.gpt ,
        projectLink: 'https://brilliant-stroopwafel-767295.netlify.app/',
        link: 'https://github.com/Saurabh-1SP/GTP3',
        tags: ['UI/UX','All'],
    }
  ]

  useState(()=>{
    setFilterWork(works)
  })

  
const handleWorkFilter = (item) =>{
  setActiveFilter(item);
  setAnimateCard([{y: 100, opacity: 0}]);

  setTimeout(() => {
    setAnimateCard([{y: 0, opacity: 1}])
    
    if(item == 'All'){
      setFilterWork(works);
    } else{
      setFilterWork(works.filter((works)=> works.tags.includes(item)))
    }
  }, 500);
}

  return (
    <div className='app__work'>      <h2 className='head-text'>My Creative <span>Profolio</span> Section</h2>
      <div className='app__work-filter'>
        {['All','UI/UX', 'Web App', 'Mobile App','React JS',].map((item,index)=>(
          <div
          key={index}
          onClick={()=> handleWorkFilter(item)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      
      <motion.div
      animate={animateCard}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className="app__work-portfolio"
      >
        {filterWork.map((work,index)=> (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.name} />
              <motion.div
              whileHover={{opacity:[0,1]}}
              transition={{duration:0.25, ease:'easeInOut', staggerChildren:0.5}}
              className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target='_blank'>
                  <motion.div
                  whileHover={{scale: [1,0.9]}}
                  transition={{duration: 0.25}}
                  className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.link} target='_blank'>
                  <motion.div
                  whileHover={{scale: [1,0.9]}}
                  transition={{duration: 0.25}}
                  className='app__flex'
                  >
                    <AiFillGithub/>
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className="bold-text">{work.tittle}</h4>
              <p className="p-text" style={{marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWraper(
  motionWrap(Work),
  'Work',
  'app__primarybg'
  )