import React from 'react'
import infor from '../data/infor.json'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

interface Infor {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5:string;
  imgskill1: string;
  imgskill2: string;
  imgskill3: string;
  imgskill4: string;
  imgskill5:string;

}

const Experience = () => {
  const info: Infor = infor;
  return (
    
        <div className=' my-16 mx-10'>
            
            <div className=' text-transparent text-5xl bg-clip-text bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500 font-extrabold mb-14'  >
            Experience
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
              <div className='col-span-5 place-self-center text-white text-center flex'>
                <div className='mr-5'>
                  <div className='rounded-full relative bg-slate-800 w-20 h-20'>
                  <Image
                    src={info.imgskill1}
                    alt="HTML"
                    width={50}
                    height={50}
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  /></div> {info.skill1}
                </div >
                <div className='mr-5'>
                  <div className='rounded-full relative bg-slate-800 w-20 h-20'>
                  <Image
                    src={info.imgskill2}
                    alt="HTML"
                    width={50}
                    height={50}
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  /></div> {info.skill2}
                </div>
                <div className='mr-5'>
                  <div className='rounded-full relative bg-slate-800 w-20 h-20'>
                  <Image
                    src={info.imgskill3}
                    alt="HTML"
                    width={50}
                    height={50}
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  /></div> {info.skill3}
                  
                </div>
                <div className='mr-5'>
                  <div className='rounded-full relative bg-slate-800 w-20 h-20'>
                  <Image
                    src={info.imgskill4}
                    alt="HTML"
                    width={50}
                    height={50}
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  /></div> {info.skill4}
                </div>
                <div className='mr-5'>
                  <div className='rounded-full relative bg-slate-800 w-20 h-20'>
                  <Image
                    src={info.imgskill5}
                    alt="HTML"
                    width={50}
                    height={50}
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  /></div> {info.skill5}
                </div>


              </div>
            


            </div>
        </div>    
            
  )
}
export default Experience;