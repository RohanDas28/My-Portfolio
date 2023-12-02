import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Link from 'next/link';

// Data
const workData = {
  slides: [
    {
      images: [
        {
          title: 'Snake Game in Python',
          path: '/snake.png',
          dest: 'https://github.com/RohanDas28/SnakeByRohan',
        },
        {
          title: 'Automatic FaceBook Login',
          path: '/fblogin.png',
          dest: 'https://github.com/RohanDas28/Automatic-Facebook-Login-With-Python',
        },
        {
          title: 'GIndexer',
          path: '/gindex.png',
          dest: 'https://github.com/RohanDas28/GIndexer',
        },
        {
          title: 'Realtime Face Recognition',
          path: '/facerecog.png',
          dest: 'https://github.com/RohanDas28/Python-Face-Recognition-Attendance-System',
        },
      ],
    },
    {
      images: [
        {
          title: 'Amazon Price Tracker',
          path: '/amazon.png',
          dest: 'https://github.com/RohanDas28/Amazon-Price-Tracker',
        },
        {
          title: 'Image Optimizer',
          path: '/imageopti.png',
          dest: 'https://github.com/RohanDas28/Image-Optimizer-Using-Flask',
        },
        {
          title: 'Portfolio Template',
          path: '/port.png',
          dest: 'https://github.com/RohanDas28/Portfolio-Template',
        },
        {
          title: 'FlabbyBird Game',
          path: '/flappy.png',
          dest: 'https://github.com/RohanDas28/Flappybird-By-Rohan',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true
    }}
    modules={[Pagination]}
    className=' h-[280px] sm:h-[480px]'
  >{
      workData.slides.map((slide, index) => {
        return <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {
              slide.images.map((image, index) => {
                return <Link key={index} href={image.dest} target="_blank" >
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden'>
                      {/* Image */}
                      <Image src={image.path} width={500} height={300} alt='' />
                      {/* Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* Title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 xl:group-hover:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* Part 1 */}
                          <div className='delay-100'>LIVE</div>
                          {/* Part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                          {/* Icon */}
                          <div className='text-2xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              })
            }
          </div>
        </SwiperSlide>
      })
    }</Swiper>;
};

export default WorkSlider;
