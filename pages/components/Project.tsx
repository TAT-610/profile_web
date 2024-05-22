import React from 'react'
import infor from '../data/infor.json'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Infor {
  about: string;
  imgab: string;

}

const Project = () => {
  const info: Infor = infor;
  return (
    
        <div className=" my-16 mx-10 pb-20">
            <div className='text-white'> hi</div>
            
           
      



        </div>
            

    
  )
}
export default Project;