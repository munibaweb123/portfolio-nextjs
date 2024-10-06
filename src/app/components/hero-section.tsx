"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection(){
    return(
        <section className="pt-40">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600">
                    Hi, I'm<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600"></span> 
                
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
                <p className="text-gray-50 mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quas totam, repellat consectetur ducimus facilis quasi id fugiat doloremque possimus veniam minima qui doloribus. Optio, nesciunt. Asperiores commodi voluptas dolorum.
                Fugit quaerat sit animi molestiae commodi vero beatae quia sapiente adipisci, a sint cupiditate culpa vitae perferendis fugiat omnis? Doloremque iste totam dolorem dolor illum officiis sint quis maxime voluptate!
                Maxime, pariatur ipsa? Debitis nulla id fuga, necessitatibus velit perspiciatis, aspernatur dolorem explicabo rem similique vero? Laudantium maxime amet ullam mollitia! Officiis rerum ipsa natus culpa recusandae magni fugiat labore.
                Perspiciatis vel recusandae illum eveniet distinctio a unde, et iusto est minus alias culpa earum pariatur incidunt aspernatur error ipsa molestiae doloremque velit ex maiores libero voluptas inventore. Quidem, reiciendis.
                Unde cum minus repellat debitis? Officia, ratione. Amet, quasi voluptatum atque modi deserunt eaque eius. Magni non, possimus, iusto autem nulla recusandae cumque dolorem deleniti modi odit numquam nisi voluptas?</p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-400 via-orange-500 to-amber-600 text-gray-50">Hire Me</button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-400 via-orange-500 to-amber-600 text-gray-50">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2" >Download CV</span></button>
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
