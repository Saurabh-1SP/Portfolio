import React from 'react'

const NavigationDot = ({active}) => {
  return (
    <div className='app__navigation'>
        {['Home' , 'About', 'Work', 'Skills','testimonials', 'Contact'].map((items,index)=>(
            <a 
            href={`#${items}`}
            key={items+index}
            className='app__navigation-dot'
            style={active === items ? {backgroundColor: '#313BAC'}: {}}
            />
        ))}
    </div>
  )
}

export default NavigationDot