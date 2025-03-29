import HeroSection from "./components/hero-section";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Navbar from "./components/Navbar";
import EmailSection from "./components/EmailSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main id="home" className="flex min-h-screen flex-col bg-[#121212] text-white ">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <div className="my-16">
          <AboutSection />
        </div>
        <div className="my-16">
          <ProjectsSection />
        </div>
        <div className="my-16">
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
