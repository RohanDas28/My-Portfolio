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
          title: 'title',
          path: '/thumb1.jpg',
          dest: 'https://www.google.com',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          dest: 'https://www.google.com',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          dest: 'https://www.google.com',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          dest: 'https://www.google.com',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          dest: 'https://www.google.com',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          dest: 'https://www.google.com',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          dest: 'https://www.google.com',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          dest: 'https://www.google.com',
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
