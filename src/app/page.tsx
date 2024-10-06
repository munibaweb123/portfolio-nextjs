//import Image from "next/image";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection";
import Navbar from "./components/Navbar";
import EmailSection from "./components/EmailSection"
import Footer from "./components/footer";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] justify-around pt-10">
      <Navbar/>
      <div>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
      </div>
      <Footer/>
      
  
    </main>
  );
}
