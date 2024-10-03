"use client";

import React,{useState} from "react";

import Card from "../components/card"
import ProjectTag from "./ProjectTag"

export default function ProjectsSection(){
    const [tag,setTag]= useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }
   

 
    const projectData =[
        {
            id:1,
            title:"Countdown app",
            description:"A countdown app with nextjs.",
            image:"/images/countdown-project-mockup.jpg",
            name:["All","Web","Typescript"],
            gitUrl:"/",
            previewUrl:"/"

        },
        {
            id:2,
            title:"Weather app", 
            description:"A weather-widget app with nextjs.", 
            image:"/images/weather-app-mockup.jpg",
            name:["All","Web"],
            gitUrl:"/",
            previewUrl:"/"

        },
        {
            id:3,
            title:"Birthday wish app", 
            description:"A Birthday wishing app with nextjs.", 
            image:"/images/birthdaywish-app-mockup.jpg",
            name:["All","Web"],
            gitUrl:"/",
            previewUrl:"/"

        },
        {
            id:4,
            title:"Number guessing game", 
            description:"A Number guessing game with nextjs.", 
            image:"/images/number-guessing-mockup.jpg",
            name:["All","Web"],
            gitUrl:"/",
            previewUrl:"/"


        },
        {
            id:5,
            title:"Simple Calculator",  
            description:"A Simple calculator with nextjs.",
            image:"/images/calculator-mockup.jpg",
            name:["All","Web"],
            gitUrl:"/",
            previewUrl:"/"


        },
        {
            id:6,
            title:"Digital Clock", 
            description:"A Digital clock with nextjs.", 
            image:"/images/clock-mockup.jpg",
            name:["Web"] ,
            gitUrl:"/",
            previewUrl:"/"


        }
    ]
  
    const filteredProjects = projectData.filter((project)=>{
        project.name.includes(tag)
    })


   
    return(
      <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
      <div className="text-orange-300 flex flex-row justify-center gap-2 py-6">
       <ProjectTag onClick={handleTagChange} name="All" isSelected={tag==="All"} /> 
       <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag==="Web"} /> 
       <ProjectTag onClick={handleTagChange} name="Typescript" isSelected={tag==="Typescript"} /> 

       </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((projects)=>
        <Card key={projects.id} 
        title={projects.title} 
        description={projects.description} 
        image={projects.image}
       
        gitUrl={projects.gitUrl}
        previewUrl={projects.previewUrl}

        />)
    }
      </div>
      </>
    )
}