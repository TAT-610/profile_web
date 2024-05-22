import React from 'react'
import infor from '../data/infor.json'
import Image from 'next/image'


interface Infor {
  about: string;
  imgab: string;

}


const Contact = () => {
  const info: Infor = infor;
  return (
    
        <div className=" my-16 mx-10 pt-24 grid grid-cols-1 sm:grid-cols-12" id="contact">
            
            <div className='col-span-6 place-self-center  text-center text-transparent text-5xl bg-clip-text bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500 font-extrabold mb-14'  >
            Contact With Me
            </div >
            <div className='col-span-6 place-self-center text-white text-center'>
            

            </div>
            













            </div>




        
            

    
  )
}
export default Contact;