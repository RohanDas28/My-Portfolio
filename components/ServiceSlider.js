import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper';
import { RxPencil2, RxCode, RxVideo, RxReader, RxArrowTopRight} from "react-icons/rx";
import { TbBrandPython } from "react-icons/tb";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: 'Graphic Design',
    description: 'Crafting visually appealing designs tailored to your brand and message.',
  },
  {
    icon: <RxCode />,
    title: 'Web Development',
    description: 'Building responsive and dynamic websites for a seamless online presence.',
  },
  {
    icon: <RxReader />,
    title: 'Content Writing',
    description: 'Creating compelling and engaging written content to convey your ideas effectively.',
  },
  {
    icon: <RxVideo />,
    title: 'Video Editing',
    description: 'Editing and enhancing videos to captivate your audience and convey your story.',
  },
  {
    icon: <TbBrandPython />,
    title: 'Python Application',
    description: 'Developing custom Python applications to meet your specific business needs.',
  },
];

const ServiceSlider = () => {
  return <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    autoplay={{
      delay: 4500,
      disableOnInteraction: false,
    }}
    modules={[ Autoplay, FreeMode, Pagination ]}
    className=' h-[240px] sm:h-[340px]'
  >{
      serviceData.map((item, index) => {
        return <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* Icon */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/* Title and Desc */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/* Arrows */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
            </div>
          </div>
        </SwiperSlide>
      })
    }</Swiper>;
};

export default ServiceSlider;
