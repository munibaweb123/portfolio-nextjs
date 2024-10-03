"use client"
import React,{useState, useTransition} from "react";
import Image from "next/image";
import TabButton from "./TabButton"

const TAB_DATA =[
    {
    title:"skills",
    id:"skills",
    content:(
        <ul className="list-disc pl-2">
            <li>Graphic Designing</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS/TS</li>
            <li>Next JS</li>
        </ul>
    )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className="list-disc pl-2">
                <li>MCS (Masters in Computer Science) from VU</li>
                <li>BCS (Bachelors in Computer Science) from KU</li>
                
            </ul>
        )
    },
        {
            title:"Certifications",
            id:"certifications",
            content:(
                <ul className="list-disc pl-2">
                    <li>Web 3.0 metaverse and solopreneurship.</li>
                    <li>Graphic Designing</li>
                    <li>Freelancing</li>
                    <li>Android App Development</li>
                    <li>Dot Net Programming</li>
                    <li>Amazon Virtual Assistant</li>

                </ul>
            )
            },
        
]

const AboutSection = ()=>{
    const [tab,setTab] = useState("skills")
    const [ isPending,startTransition] = useTransition();
    const handleTabChange =(id)=>{
        startTransition(()=>{
            setTab(id)
        })
    }
return(
    <section className="text-orange-400">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.jpg" width={500} height={500} alt="about me" className="rounded"/>
        <div className="mt-4 md:mt-0  text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-pink-400 mb-4 ">About me</h2>
        <p className="text-base lg:text-lg">I'm a student at governor house of GIAIC Course. Enrolled in Quarter 2, learning nextjs in this Quarter.
            I had learn Typescript using visual studio code, nodejs in Quarter 1. Also learn how to publish code on github.
        </p>
        
        <div className="flex flex-row justify-start mt-8 ">
            <TabButton selectTab={()=>handleTabChange("skills")} 
            active={tab==="skills"}>
                {" "}
                Skills{" "}
            </TabButton>
            <TabButton selectTab={()=>handleTabChange("education")} 
            active={tab==="education"}>
                {" "}
                Education{" "}
           
            </TabButton>
            <TabButton selectTab={()=>handleTabChange("certifications")} 
            active={tab==="certifications"}>
                {" "}
                Certifications{" "}
            </TabButton>
        </div>
        <div className="mt-8">{TAB_DATA.find((t)=>t.id===tab)?.content}</div>
        </div>
        </div>    
        
    </section>
)
}
export default AboutSection;
