import Hero from '@/components/Hero';
import MobileNav from '@/components/MobileNav';
import Nav from '@/components/Nav';
import About from '@/components/About';
import React, { useState } from 'react'
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

const HomePage = () => {

  const [showNav, setShowNav] = useState(false);
  const showNavHandle = () => setShowNav(true);
  const closeNavHandle = () => setShowNav(false);


  return <div className="overflow-hidden">
    <MobileNav showNav = {showNav} closeNav = {closeNavHandle}/>
    <Nav openNav = {showNavHandle}/>
    <section id="home">
      <Hero/>
    </section>
    <About/>
    <Skills/>
    <section id="projects">
      <Projects/>
    </section>
    <section id="contact">
      <Footer/>
    </section>
    </div>
}

export default HomePage