import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="mt-[-3rem] bg-[#1e293b] pb-[2rem]">
        <div className="w-[70%] pt-[2rem] sm:pt-[2rem] md:pt-[2px] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
            <div>
                <h1 className="xl:text-[50px] font-bold text-yellow-300">About Me</h1>
                <p className="lg:text-[20px] text-white"> I'm a driven and innovative computer science student currently studying at Conestoga College 
                    in Waterloo, Ontario. With a passion for technology and a knack for problem-solving, 
                    I thrive in dynamic environments where I can apply my skills and creativity to tackle challenges head-on. 
                    Before my I dove headfirst into the world of tech, I gained valuable leadership experience as General Manager at A&W Canada, 
                    where I led training initiatives, implemented operational standards, and drove process improvements to enhance efficiency 
                    and customer satisfaction, skills I continue to use and develop in a part time capacity while I am pursuing my studies.
                    Through my diverse technical projects developing web based software applications and games, 
                    I've honed my skills in coding languages such as C#, ASP.NET, and JavaScript, 
                    as well as frameworks like React, Next.js and Angular. The endless possibilities and impact of technology on the future 
                    of our world is what drives me to be the best version of myself and I look forward to contributing my expertise 
                    to innovative projects, and to make a positive impact wherever I go.                   
                </p>
            </div>
            <div className="hidden md:block grid-cols-1 sm:grid-cols-1">
                <Image src="/img/me.png" alt="Image of Me" width={600} height={600} className="object-contain" />
            </div>
        </div>
    </div>
  )
}

export default About