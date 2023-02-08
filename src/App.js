import React from 'react'

import { Header,About,Work,Skills,Testimonials,Footer} from './container';
import { Navbar } from './component'

import './app.scss'                     

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App;