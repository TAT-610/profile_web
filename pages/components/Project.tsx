import React from 'react';
import infor from '../data/infor.json';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Project {
  nameproject: string;
  imgproject: string;
}

interface Infor {
  project: Project[];
}

const MyCarousel = () => {
  const info: Infor = infor;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 2, 
    autoplay: true, 
    autoplaySpeed: 5000, 
  };

  return (
    <Slider {...settings}>
      {info.project.map((project, index) => (
         <div key={index} className="flex flex-col items-center">
         <div className="relative w-[360px] h-60 m-auto hover:scale-110 transition-transform duration-300">
           <Image
             src={project.imgproject}
             alt={project.nameproject}
             layout="fill"
             objectFit="cover"
             className="rounded-lg"
           />
         </div>
         <div className='text-center mt-4 text-lg font-bold text-white'>{project.nameproject}</div>
       </div>
      ))}
    </Slider>
  );
};

const Project = () => {
  return (
    <div className="my-16 mx-10 pb-20 pt-24" id="project">
      <div className='text-center text-transparent text-5xl bg-clip-text bg-gradient-to-br from-blue-400 to-purple-800 to-pink-500 font-extrabold mb-14'>
        My Projects
      </div>
      <div>
        <MyCarousel/>
      </div>
    </div>
  );
};

export default Project;
