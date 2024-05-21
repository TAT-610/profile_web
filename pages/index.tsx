import Image from "next/image";
import { Inter } from "next/font/google";
import {HeroSection} from "./components/HeroSection"
import {Navigation} from "./components/Navigation"
import {About} from"./components/About"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col bg-[#121212] ${inter.className}`} >
    <Navigation/>
     <div className="container mx-auto px-14 py-20 ">
        <HeroSection/>
        <About/>
      </div>  
    </main>
  );
}
