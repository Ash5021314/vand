import React from 'react'
import ControlledCarousel from './ControlledCarousel'
import About from './About'
import Items from './Items'
import Brends from './Brends'

const Landing = () => {
  let style = {
    marginTop: '56px',
  }
  return (
    <div style={{...style}}>
      <ControlledCarousel/>
      <About/>
      <Items/>
      <Brends/>
    </div>
  )
}

export default Landing