import React from 'react'
// import infor from '../data/infor.json'
const Navigation: React.FC = () => {
  return (
    <nav  className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 px-16 py-2">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
            <span className=' text-transparent text-3xl bg-clip-text bg-gradient-to-br from-blue-400  to-purple-800 to-pink-500 font-extrabold'  >
            My Profile</span>
            <div className='flex space-x-6 text-[#ADB7BE] text-lg '>
              <div className='hover:text-white font-bold cursor-pointer'>About</div>
              <div className='hover:text-white font-bold cursor-pointer'>Project</div>
              <div className='hover:text-white font-bold cursor-pointer'>Contact</div>
            </div>
        </div>

    </nav>
        
        

    
  )
}
export default Navigation;



