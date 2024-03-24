import React from 'react'
import Image from 'next/image';

interface Props {
    title: string;
    image: string;
    description: string;
    techIcons: string[];
    githubLink: string;

}

const ProjectCard = ({title, image, description, techIcons, githubLink}: Props) => {
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-300 bg-gray-800 shadow-md">
            <Image src={image} alt={title} width={350} height={350} className=" object-contain rounded-xl mx-auto mb-4" />
        </div>
        <div>
            <h1 className="text-[24px] text-white font-semibold">{title}</h1>
            <p className="text-white opacity-65 text-[16px] mt-[1rem]">{description}</p>
            <div className="mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
                {techIcons.map((icon, index) =>(
                    <div key={index}>
                        <Image src={icon} alt={`Icon ${index}`} width={45} height={45}/>
                    </div>
                ))}
                <a href={githubLink} target="_blank">
                <Image src="/img/github-mark-white.png" alt="GitHub" width={45} height={45} className="transition-transform duration-300 transform scale-100 hover:scale-125"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard