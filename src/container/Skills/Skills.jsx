import React from 'react'
import "react-tooltip/dist/react-tooltip.css";
import {motion} from 'framer-motion'
import {Tooltip} from 'react-tooltip'

import { AppWraper, motionWrap } from '../../Wrappers'
import { images } from '../../constants';
import './Skills.scss'

const Skills = () => {

    const skills =[
        {
            name: 'JavaScript',
            icon: images.javascript
        },
        {
            name: 'React',
            icon: images.react
        },
        {
            name: 'HTML',
            icon: images.html
        },
        {
            name: 'CSS',
            icon: images.css
        },
        {
            name: 'Sass',
            icon: images.sass
        },
        {
            name: 'NodeJS',
            icon: images.node
        },
        {
            name: 'ExpressJS',
            icon: images.express
        },
        {
            name: 'MongoDB',
            icon: images.mongodb
        },
    ]
    
  return (
    <div>
      <h2 className=' head-text'>
        Skills
      </h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills.map((skill,index) =>(
            <motion.div
            whileInView={{opacity: [0,1]}}
            transition={{duration: 0.5}}
            className='app__skills-items app__flex'
            key={skill.name+index}
            >
              <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                <img src={skill.icon} alt={skill.name}/>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>


        {/* <motion.div className='app__skills-exp'>
          {experience.map((experiences,index)=>(
            <motion.div
            className='app__skills-exp-item'
            key={experiences.year+index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experiences.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                    <motion.div whileInView={{opacity: [0,1]}}
                      transition={{duration: 0.5}}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={experiences.work.name}
                      key={experiences.work.name+index}
                        >
                      <h4 id={experiences.work.name} className="bold-text" > {experiences.work.name}</h4>
                      <p className="p-text">{experiences.work.company}</p>
                  </motion.div>
                    <Tooltip anchorId={experiences.work.name}
                    content={experiences.work.desc}
                    />
                </motion.div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </div>
  )
}

export default AppWraper(
  motionWrap(Skills),
  'Skills',
  'app__whitebg'
  )