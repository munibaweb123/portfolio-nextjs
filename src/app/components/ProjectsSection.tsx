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
        name1:["All","Web"],
        gitUrl:"https://github.com/munibaweb123/30-days-of-projects.git",
        previewUrl:"https://30-days-of-projects-two.vercel.app/",

    },
    {
        id:2,
        title:"Weather app", 
        description:"A weather-widget app with nextjs.", 
        image:"/images/weather-app-mockup.jpg",
        name1:["All","Web"],
        gitUrl:"https://github.com/munibaweb123/day_2_of_30_days_projects.git",
        previewUrl:"https://day-2-of-30-days-projects.vercel.app/",

    },
    {
        id:3,
        title:"Birthday wish app", 
        description:"A Birthday wishing app with nextjs.", 
        image:"/images/birthdaywish-app-mockup.jpg",
        name1:["All","Web"],
        gitUrl:"https://github.com/munibaweb123/day_3_nextjs.git",
        previewUrl:"/",

    },
    {
        id:4,
        title:"Number guessing game", 
        description:"A Number guessing game with nextjs.", 
        image:"/images/number-guessing-mockup.jpg",
        name1:["All","Web"],
        gitUrl:"https://github.com/munibaweb123/day_4_nextjs.git",
        previewUrl:"/",


    },
    {
        id:5,
        title:"Simple Calculator",  
        description:"A Simple calculator with nextjs.",
        image:"/images/calculator-mockup.jpg",
        name1:["All","Web"],
        gitUrl:"https://github.com/munibaweb123/day_5_nextjs.git",
        previewUrl:"/",


    },
    {
        id:6,
        title:"Digital Clock", 
        description:"A Digital clock with nextjs.", 
        image:"/images/clock-mockup.jpg",
        name1:["All","Web"] ,
        gitUrl:"https://github.com/munibaweb123/day_6_nextjs.git",
        previewUrl:"/",


    },
    {
        id:7,
        title:"OOP Bank", 
        description:"An oop bank console app with typescript.", 
        image:"/images/oop-bank.jpg",
        name1:["Typescript"] ,
        gitUrl:"https://github.com/munibaweb123/OOP-BANK.git",
        previewUrl:"/",
    },
    {
        id:7,
        title:"Ecommerce website design", 
        description:"An e-commerce website design with nextjs", 
        image:"/images/ecommerce.jpg",
        name1:["web"] ,
        gitUrl:"https://github.com/munibaweb123/e-commerce-nextjs.git",
        previewUrl:"https://e-commerce-nextjs-4sgf.vercel.app/",
    }
]

export default function ProjectsSection(){
    const [tag,setTag]= useState("All");
    const handleTagChange = (newTag:string) => {
        setTag(newTag)
    }
   

 
    
  
    const filteredProjects = projectData.filter(project => 
        tag === "All" || project.name1.includes(tag)
    );


   
    return(
      <section id="projects">
      <h2 className="text-center text-4xl font-bold text-pink-500 mt-4">My Projects</h2>
      <div className="text-orange-300 flex flex-row justify-center gap-2 py-6">
      <ProjectTag onClick={() => handleTagChange("All")} name1="All" isSelected={tag === "All"} />
                <ProjectTag onClick={() => handleTagChange("Web")} name1="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={() => handleTagChange("Typescript")} name1="Typescript" isSelected={tag === "Typescript"} />

       </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((projects)=>
        <Card key={projects.id} 
        title={projects.title} 
        description={projects.description} 
        image={projects.image}
       
        gitUrl={projects.gitUrl}
        previewUrl={projects.previewUrl}

        />)
    }
      </div>
      </section>
    )
}