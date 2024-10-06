import GithubIcon from "../../../public/github_icon.svg"
import Linkedin from "../../../public/linkedin_icon.svg"
import Link from "next/link"
import Image from "next/image"

const EmailSection = ()=>{
    return(
        <section className="bg-[#121212] grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 to-transparent rounded full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="flex-1 justify-center items-center pl-10 pr-10">
                <h5 className="text-orange-400 text-4xl px-4 my-2 font-bold">Let's Connect</h5>
                <p className="text-pink-400 mb-4 max-w-md">
                    I'm currently looking for new opportunities, my inbox is always open, 
                    weather you havea question or just want to say hi. I'll try my best to get back to you.
                </p>
            <div className="socials flex flex-row gap-2 ">
                <div className="rounded bg-orange-400">
                <Link href="https://github.com/munibaweb123">
                <Image src={GithubIcon} alt="Github icon" height={50} width={50}/>
                </Link>
                </div>
                <div className="rounded bg-orange-400">
                <Link href="https://www.linkedin.com/in/muniba-ahmed-4936391a4">
                <Image src={Linkedin} alt="linkedin icon" height={50} width={50}/></Link>
                </div>
                
            </div>
            </div>
            <div>
                <form className="flex flex-col pr-10 pl-10">
                   <div className="mb-6">
                   <label htmlFor="email" typeof="email" className="text-pink-400 block mb-2  text-sm font-medium">
                        Your Email</label>
                    <input className="bg-[#121212] border border-pink-400 placeholder-orange-400 text-pink-400 rounded-lg block w-full p-2.5" type="text" id="subject" required placeholder="example.com"/>

                   </div>
                   <div className="mb-6">
                   <label htmlFor="subject" typeof="subject" className="text-pink-400 block mb-2 text-sm font-medium">
                        Subject</label>
                    <input className="bg-[#121212] border border-pink-400 placeholder-orange-400 text-pink-400 rounded-lg block w-full p-2.5" type="text" id="subject" required placeholder="just saying hi"/>

                   </div>
                   <div className="mb-6">
                    <label htmlFor="message"
                    className="text-pink-400 block text-sm mb-2 font-medium">
                            Message
                    </label>
                    <textarea name="message" id="message"
                    className="bg-[#121212] border border-pink-400 placeholder-orange-400 text-pink-400 rounded-lg block w-full p-2.5"
                    placeholder="let's talk about.."/>
                   </div>
                   <button type="submit" className="bg-orange-400 hover:bg-orange-300 text-white font-medium py-2.5 rounded-lg w-full">Send Message</button>
                </form>
            </div>
            
        </section>
    )
}
export default EmailSection