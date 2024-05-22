import React from 'react'
import infor from '../data/infor.json'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

interface Infor {
  about: string;
  imgab: string;

}

const Experience: React.FC = () => {
  const info: Infor = infor;
  return (
    
        <div className=" my-16 mx-10">
            
            <div className=' text-transparent text-5xl bg-clip-text bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500 font-extrabold mb-14'  >
            Experience
            </div>
            


            </div>
            
  )
}
export default Experience;