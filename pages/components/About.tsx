import React from 'react'
import infor from '../data/infor.json'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

interface Infor {
  name: string;
  bio: string;
  avatar: string;
}

export const About = () => {
  const info: Infor = infor;
  return (
    
        <div className=" my-16 mx-10">
            
            <div className=' text-transparent text-5xl bg-clip-text bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500 font-extrabold'  >
            My Profile</div>




        </div>
            

    
  )
}