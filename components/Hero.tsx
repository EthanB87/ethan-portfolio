import React from 'react'
import HeroTypeAnimation from './HeroTypeAnimation'

const Hero = () => {
  return (
    <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg">
        <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
                <div>
                    <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] 
                    font-bold leading-[2.5rem] text-white">
                        Hey! I'm <span className="text-yellow-300">Ethan</span>
                    </h1>
                    <HeroTypeAnimation/>
                    <div className="mt-[2rem] flex items-center space-x-6">
                        <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:e1f9d3d3-fd10-315b-bee7-56e9dd9b0b0a" target="_blank">
                            <button className="relative h-[50px] w-40 overflow-hidden bg-yellow-300 text-white shadow-2xl font-semibold
                            transition-all duration-300 hover:bg-blue-600 hover:text-yellow-300 mx-10">
                            <span className="absolute inset-0 flex items-center justify-center transition-all">
                            View My Resume
                            </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero