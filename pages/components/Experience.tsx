import React from 'react'
import infor from '../data/infor.json'
import Image from 'next/image'
import Rating from '@mui/material/Rating'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { red } from '@mui/material/colors';


interface Language{
  language:string;
  value:number
}
interface Skill{
  skill: string;
  imgskill: string;
}

interface certifications{
  namecer:string;
  day:string;
}
 

interface Infor {
  skills: Skill[];
  programinglanguage:Language[];
  imgcer:string;
  certifications:certifications[];
}


const color = red[500];
const Experience = () => {
  const info: Infor = infor;
  return (
    <div className='my-16 mx-10 pt-24' id="experience">
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

          {info.programinglanguage.map((lg, index) => (
          <div key={index} className='text-left flex items-center m-4'>
          <span className='text-xl mr-2'>{lg.language} :</span>
          <Rating
           name="text-feedback"
           value={lg.value}
           readOnly
           precision={0.5}
           icon={<LocalFireDepartmentIcon style={{ color: color, }} sx={{ fontSize: 40,verticalAlign: 'middle' }} />}
          emptyIcon={<LocalFireDepartmentIcon style={{ color: 'grey',verticalAlign: 'middle'}} sx={{ fontSize: 40 }} />}
          />
          


         </div>))}


        </div >
        <div className='col-span-6 place-self-center text-white text-center'>
        {info.certifications.map((Certificate, index) => ( 
            <div className="box-content h-20 w-12/12 bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500  pt-4 mb-5 hover:scale-110 transition-transform duration-300"  key={index}>
              
                 <div className='ml-4 text-center'>
                  <div className='text-lg font-bold m-auto p-0'>{Certificate.namecer}</div>
                  <div className='m-auto'>{Certificate.day}</div>
                </div>
              </div>))}
          




          
        </div>
      </div>
    </div>
  )
}

export default Experience;

