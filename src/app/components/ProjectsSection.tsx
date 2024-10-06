"use client";

import React,{useState} from "react";

import Card from "../components/card"
import ProjectTag from "./ProjectTag"

const projectData =[
    {
        id:1,
        title:"Countdown app",
        description:"A countdown app with nextjs.",
        image:"/images/countdown-project-mockup.jpg",
        name1:["All","Web","Typescript"],
        gitUrl:"/",
        previewUrl:"/",

    },
    {
        id:2,
        title:"Weather app", 
        description:"A weather-widget app with nextjs.", 
        image:"/images/weather-app-mockup.jpg",
        name1:["All","Web"],
        gitUrl:"/",
        previewUrl:"/",

    },
    {
        id:3,
        title:"Birthday wish app", 
        description:"A Birthday wishing app with nextjs.", 
        image:"/images/birthdaywish-app-mockup.jpg",
        name1:["All","Web"],
        gitUrl:"/",
        previewUrl:"/",

    },
    {
        id:4,
        title:"Number guessing game", 
        description:"A Number guessing game with nextjs.", 
        image:"/images/number-guessing-mockup.jpg",
        name1:["All","Web"],
        gitUrl:"/",
        previewUrl:"/",


    },
    {
        id:5,
        title:"Simple Calculator",  
        description:"A Simple calculator with nextjs.",
        image:"/images/calculator-mockup.jpg",
        name1:["All","Web"],
        gitUrl:"/",
        previewUrl:"/",


    },
    {
        id:6,
        title:"Digital Clock", 
        description:"A Digital clock with nextjs.", 
        image:"/images/clock-mockup.jpg",
        name1:["Web"] ,
        gitUrl:"/",
        previewUrl:"/",


    }
]

export default function ProjectsSection(){
    const [tag,setTag]= useState("All");
    const handleTagChange = (newTag:string) => {
        setTag(newTag)
    }
   

 
    
  
    // const filteredProjects = projectData.filter((project)=>{
    //     project.name1.includes(tag)
            
    // })


   
    return(
      <>
      <h2 className="text-center text-4xl font-bold text-pink-500 mt-4">My Projects</h2>
      <div className="text-orange-300 flex flex-row justify-center gap-2 py-6">
      <ProjectTag onClick={() => handleTagChange("All")} name1="All" isSelected={tag === "All"} />
                <ProjectTag onClick={() => handleTagChange("Web")} name1="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={() => handleTagChange("Typescript")} name1="Typescript" isSelected={tag === "Typescript"} />

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