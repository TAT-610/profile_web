import React from 'react'
import infor from '../data/infor.json'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
export const HeroSection = () => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className="text-white mb-4 text-4xl sm:text-2xl lg:text-5xl lg:leading-normal font-extrabold" >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500">
              Hello, Im {infor.name}
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
          </h1>
                <p className="text-[#ADB7BE] text-sm sm:text-lg mb-6 lg:text-xl" >{infor.bio}</p>
                <div>
                    <button className='px-10 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-purple-800 to-pink-500 hover:bg-slate-200 text-white '>Contact Me</button>
                </div>
        
            </div>
            <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
            <div className="rounded-full w-[220px] h-[220px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src={infor.avatar}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
            </div>
        
         </div>

    </div>
  )
}

