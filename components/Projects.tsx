import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
        <div className="text-center">
            <h1 className="heading_main">
                My <span className="text-yellow-300">Projects</span>
            </h1>
        </div>
        <ProjectCard title="Space Race" description="A 2d skill based platformer created in C# with Monogame/XNA" 
        techIcons={["/img/c-sharp.svg", "/img/MonoGame.svg"]} image="/img/space-race.png" githubLink="https://github.com/EthanB87/Space-Race"/>
        <ProjectCard title="NFL Statistical Analysis" description="Used Matplotlib and Python to visualize the top NFL offenses in rush & pass epa combined" 
        techIcons={["/img/python.svg", "/img/matplotlib.svg"]} image="/img/rushpassepa.png" githubLink="https://github.com/EthanB87/NFL-Matplotlib"/>
        <ProjectCard title="Excel to SQL Converter" description="Created a WinForms application to add and display Excel files and sheets and then import the data to your SQL server" 
        techIcons={["/img/VB.Net.svg", "/img/VisualStudio.svg"]} image="/img/excel-sql.png" githubLink="https://github.com/EthanB87/Excel_to_SQL"/>
        <ProjectCard title="Movie Database App" description="Created a full stack application using .Net Core and Entity Framework for the API and ASP.Net Core for the front end" 
        techIcons={["/img/c-sharp.svg", "/img/dotnet.png", "/img/bootstrap.svg" ]} image="/img/movie-app.png" githubLink="https://github.com/EthanB87/ASP.net-movies-app"/>
    </div>
  )
}

export default Projects