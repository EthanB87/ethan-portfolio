import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'

interface Props {
  openNav :() => void;
}


const Nav = ({openNav}:Props) => {

  const [navStick, setStick] = useState(false);
  useEffect(() => {
    const stickHandler = () => {
      if(window.scrollY >= 90){
          setStick(true);
      }
      if(window.scrollY <= 90){
        setStick(false);
      }
    };
    window.addEventListener("scroll", stickHandler);
  },[])

  const navStickStyling = navStick ? "bg-[#1e293b] shadow-gray-950 shadow-sm" : "";

  const navLinkScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <div className={`fixed w-[100%] ${navStickStyling} transition-all duration-500 z-[1000]`}>
    <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-primary text-white text-[18px]">
            <span className="font-primary text-[30px] md:text-[40px] text-yellow-400">Ethan Brockman</span>
            <div className="font-primary">Student Developer</div>
        </div>
        <ul className="md:flex hidden items-center space-x-10 cursor-pointer">
            <li><a className="nav__link" onClick={() => navLinkScroll("home")}>Home</a></li>
            <li><a className="nav__link" onClick={() => navLinkScroll("projects")}>Projects</a></li>
            <li><a className="nav__link" onClick={() => navLinkScroll("contact")}>Contact</a></li>
        </ul>
        <Bars3CenterLeftIcon onClick={openNav} className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"/>
    </div>
  </div>
}

export default Nav