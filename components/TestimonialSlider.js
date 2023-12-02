import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// testimonial data
const TestimonialData = [
  {
    image: '/avt-2.png',
    name: 'Vaqar Rehmani',
    position: 'CEO, Pixelnib',
    message:
      'I have had a chance to work with Rohan for many months. During the time we worked together he has been an amazing person along with being a skillful and self motivated developer. Rohan\'s curious attitude is a plus. It was a pleasure working together.',
  },
  {
    image: '/avt-3.png',
    name: 'Pankaj Kumar',
    position: 'Frontend Developer',
    message:
      'We\'ve worked together on several projects and Rohan had been a great collaborator. He is very enthusiastic about his work. His ability to learn and adapt to any technology is what makes him a great fit for any developer role.',
  },
  {
    image: '/avt-1.png',
    name: 'Abhishek Pathak',
    position: 'Frontend Developer',
    message:
      'Fortunate to have Rohan as both colleague and friend; his innate ability, technical prowess, and passion for learning set him apart. His positive attitude creates a conducive work environment. I endorse Rohan as a stellar developer.',
  },
];

const TestimonialSlider = () => {
  return <Swiper
    spaceBetween={10}
    navigation={true}
    pagination={{
      clickable: true
    }}
    modules={[Pagination, Navigation]}
    className='h-[480px]'
  >{
      TestimonialData.map((person, index) => {
        return <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-12'>
            {/* Avatar, Name, Position */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                {/* Avatar */}
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={100} height={100} alt='image'/>
                </div>
                {/* Name */}
                <div className='text-lg'>{person.name}</div>
                {/* Position */}
                <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
              </div>
            </div>
            {/* Quote and Message */}
            <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
              {/* Quote */}
              <div className='mb-4'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
              </div>
              {/* Message */}
              <div className='xl:text-lg text-center md:text-left '>
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      })
    }</Swiper>;
};

export default TestimonialSlider;
