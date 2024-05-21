import Image from "next/image";
import { Inter } from "next/font/google";
import {HeroSection} from "./components/HeroSection.jsx"
import {Navigation} from "./components/Navigation.jsx"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col bg-[#121212] ${inter.className}`} >
    <Navigation/>
     <div className="container mx-auto px-20 py-20 ">
        <HeroSection/>
      </div>  
    </main>
  );
}
