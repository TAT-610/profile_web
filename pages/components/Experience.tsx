import React from 'react'
import infor from '../data/infor.json'
import Image from 'next/image'

interface Skill{
  skill: string;
  imgskill: string;
}

interface Infor {
  skills: Skill[];
}

const Experience = () => {
  const info: Infor = infor;
  return (
    <div className='my-16 mx-10'>
      <div className='text-transparent text-5xl bg-clip-text bg-gradient-to-br from-blue-400 to-purple-800 to-pink-500 font-extrabold mb-14'>
        Experience
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-6 place-self-center text-white text-center'>
          <div className='flex'>
            {info.skills.map((skill, index) => (
              <div className='mr-5 mb-5' key={index}>
                <div className='rounded-full relative bg-slate-800 w-20 h-20'>
                  <Image
                    src={skill.imgskill}
                    alt={skill.skill}
                    width={50}
                    height={50}
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  />
                </div>
                <div>{skill.skill}</div>
              </div>
            ))}
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;

