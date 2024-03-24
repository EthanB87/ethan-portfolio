import { TypeAnimation } from 'react-type-animation'
import React from 'react'

const HeroTypeAnimation = () => {
  return (
    <TypeAnimation
    sequence={[
      'A Computer Science Student',
      1000,
      'Looking For Internships',
      1000
    ]}
    wrapper="span"
    speed={50}
    className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-bold text-white"
    repeat={Infinity}
  />
  )
}

export default HeroTypeAnimation