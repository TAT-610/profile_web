import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "./components/HeroSection"
import Navigation from "./components/Navigation"
import About from"./components/About"
import Experience from "./components/Experience"
import Project from "./components/Project";
import Contact from "./components/Contact";
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={`flex min-h-screen flex-col bg-[#121212] ${inter.className}`} >
    <Navigation/>
     <div className="container mx-auto px-14 py-20 ">
        <HeroSection/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
      </div>  
    </main>
  );
}
export default Home;

