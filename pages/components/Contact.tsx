import React from 'react'
import infor from '../data/infor.json'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Image from 'next/image'
interface Infor {
  email: string;
  phone: string;
  address:string;

}


const Contact = () => {
  const info: Infor = infor;
  return (
    
        <div className=" my-24 mx-10 pt-14 pb-14 grid grid-cols-1 sm:grid-cols-12" id="contact">
            
            <div className='col-span-6 place-self-center  text-center text-transparent text-5xl bg-clip-text bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500 font-extrabold mb-'  >
            
            <div className='text-transparent text-5xl bg-clip-text bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500 font-extrabold mb-2'>
              __Contact With Me__
              </div>
              <div className='text-base text-stone-200'>Hope we can work together in the future!</div>
              <div className='flex justify-center'>
        <Image
          src="/images/people.png"
          alt="contact"
          width={380}
          height={380}
        />
      </div>
            </div >
            <div className='col-span-6 place-self-center text-white text-center'>
                <div className='flex flex-col items-center space-y-8'>
                  <div className='w-full bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500 font-extrabold p-5 rounded-full'>
                    <PhoneIphoneIcon style={{ fontSize: 40 }} /> {info.email}
                  </div>
                  <div className='w-full bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500 font-extrabold p-5 mb-20 rounded-full'>
                  <MailIcon style={{ fontSize: 40 }} /> {info.phone}
                  </div>
                  <div className='bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500 font-extrabold p-5 mb-6 rounded-full'>
                  <AddLocationAltIcon style={{ fontSize: 40 }} /> {info.address}
        </div>
      </div>
    </div>
            













            </div>




        
            

    
  )
}
export default Contact;