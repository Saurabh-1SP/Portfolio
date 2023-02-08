import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { AppWraper, motionWrap } from '../../Wrappers'
import { images } from '../../constants'
import './Testimonials.scss'

const Testimonials = () => {

//   const [brands, setBrands] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  const testimonials = [
    {
        name:'Saurabh',
        company: 'Freelancer',
        imgurl: images.lion,
        feedback: 'I made this website to showcase my skills and works.I dont have any real work experience right now but you can be first one to hire me. And Your company will be the first one to be on the brand section'
    },
    // {
    //     name:'Sarah',
    //     company: 'meta',
    //     imgurl: images.node,
    //     feedback:'I am Backend Developer with the passion to make beautiful websites and function web application.'
    // }
  ]

    const brands = [
        {
            name: 'Bolt',
            imgUrl: images.bolt
        },
        {
            name: 'Asus',
            imgUrl: images.asus
        },
        {
            name: 'Amazon',
            imgUrl: images.amazon
        },
        {
            name: 'Skype',
            imgUrl: images.skype
        },
    ]
  const test = testimonials[currentIndex]
  
  return (
    <>
    {testimonials.length &&(
      <>
      <div className='app__testimonial-item app__flex'>
        <img src={test.imgurl} alt='' />
        <div className="app__testimonial-content">
          <p className="p-text">{test.feedback}</p>
          <div>
            <h4 className="bold-text">{test.name}</h4>
            <h5 className="p-text">{test.company}</h5>
          </div>
        </div>
      </div>

      <div className="app__testimonial-btns app__flex">
        <div className="app__flex" onClick={ () => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
        <HiChevronLeft/>
        </div>
        <div className="app__flex"  onClick={ () => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
        <HiChevronRight/>
        </div>
      </div>
      </>
    )}

    <div className="app__testimonials-brands app__flex">
      <span className='head-text'>Brands</span>
      {/* {brands.map((brand,index)=>(
        <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{duration: 0.5, type: 'tween'}}
        key={brand._id+index}
        >
          <img src={brand.imgUrl} alt={brand.name}/>
        </motion.div>
      ))} */}
    </div>
    </>
  )
}

export default AppWraper(
  motionWrap(Testimonials, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
  )