"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection(){
    return(
        <section className="pt-40">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600">
                    Hi, I&apos;m<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600"></span> 
                
                <br></br>
                <TypeAnimation
                sequence={[
                    "Muniba Ahmed",
                    1000,
                    "Web Developer",
                    1000,
                    "Graphic Designer",
                    1000,
                    "Freelancer",
                    1000,
                ] }  
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
                </h1>
                <p className="text-gray-50 mb-6">
                    I am a passionate Next.js developer with a strong focus on building high-performance, scalable, and user-friendly web applications. 
                    With expertise in Nextjs, Tailwindcss, TypeScript, and modern web development practices, I specialize in creating dynamic and responsive user interfaces. 
                    My goal is to deliver seamless user experiences while adhering to best practices in coding and design. 
                    Whether it's developing server-side rendered applications or optimizing front-end performance, I am dedicated to crafting solutions that meet client needs and exceed expectations.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-400 via-orange-500 to-amber-600 text-gray-50">Hire Me</button>
                    <a 
                        href="/resume.pdf" 
                        download 
                        className="inline-block rounded-full bg-gradient-to-br from-pink-400 via-orange-500 to-amber-600 text-gray-50 px-1 py-1 hover:bg-gradient-to-bl transition duration-300"
                    >
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3">Download CV</span>
                    </a>
                </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-400 h-400 relative">
                    <Image src="/images/hero-image.jpg" alt="hero image" width={500} height={509} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"/>
                    </div>
                    
                </div>
            </div>
           
        </section>
    )
}
