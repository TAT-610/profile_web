import React from 'react'
import infor from '../data/infor.json'
import Image from 'next/image'


interface Infor {
  about: string;
  imgab: string;

}

const About = () => {
  const info: Infor = infor;
  return (
    
        <div className=" my-16 mx-10 pt-24" id="about">
            
            <div className=' text-center text-transparent text-5xl bg-clip-text bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500 font-extrabold mb-14'  >
            About Me
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
              <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='w-[220px] h-[220px] lg:w-[350px] lg:h-[350px] relative'>
                  <Image
                    src={info.imgab}
                    alt="hero image"
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={450}
                    height={450}
                  />
                </div>
            </div>
            <div className='col-span-7 place-self-center-x sm:text-left justify-self-start '>
              <div className='text-white  text-sm sm:text-lg mb-6 lg:text-xl font-bold'>FRONT-END DEVELOPER INTERNSHIP</div>
              <div className='text-[#ADB7BE]  text-sm sm:text-lg mb-6 lg:text-xl'>
              {info.about}
              <div>If you have any questions or want to connect, do not hesitate to reach out!</div>
              </div>

            </div>


            </div>




        </div>
            

    
  )
}
export default About;
