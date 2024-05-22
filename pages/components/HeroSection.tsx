import React from 'react'
import infor from '../data/infor.json'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

interface Infor {
  name: string;
  bio: string;
  avatar: string;
}

const HeroSection= () => {
  const info: Infor = infor;
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-12 my-20  pl-6" id='home'>
            <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                <div className="text-white mb-4 sm:text-2xl lg:text-5xl lg:leading-normal font-extrabold" >
                <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500">
              Hello, Im {info.name}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                1500,
                "Web Developer",
                1500,
                "Frontend Developer",
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
                <p className="text-[#ADB7BE] text-sm sm:text-lg mb-6 lg:text-xl" >{info.bio}</p>
                <div className='my-8'>
                <a href="#contact" ><button className='px-10 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-purple-800 to-pink-500 hover:scale-110 transition-transform duration-300 text-white '>
                    Contact Me</button></a>
                </div>
        
            </div>
            <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
            <div className="rounded-full w-[220px] h-[220px] lg:w-[370px] lg:h-[370px] relative">
            <Image
              src={info.avatar}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={450}
              height={450}
            />
          </div>
            </div>
        
         </div>

    </div>
  )
}
export default HeroSection;
