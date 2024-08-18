import { useState } from 'react';
import Image from 'next/image';

// Data
const workData = {
  slides: [
    {
      images: [
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/y8ZC7Kkv/SHOWTOWN-3.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/Ss8fxFs4/SHOWTOWN-4.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/MpCxBThC/Artboard-1.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/RVbvMGGV/bank-rob.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/SsrpHGJ4/Code.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/MTxSsLZt/desi-driver-ets2.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/L67Md56J/image-2.png' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/RhZzmnHH/gtav3.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/0yMPrmHG/btrp-pd.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/SR1bxN6t/pd1.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/3rtTB9sC/robin-cadet.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/c46N5wZq/roro-sergeant.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/hGRWjYmg/underground-uirp.jpg' },
        { title: 'Copyright by Rohan Das', path: 'https://i.postimg.cc/zvzqfc93/Untitled-1-Sensei.jpg' },     
        // Add more images as needed
      ],
    },
  ],
};

const WorkSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='overflow-x-hidden'>
      <div className='flex flex-wrap justify-evenly p-4'>
        {workData.slides[0].images.map((image, index) => (
          <div
            key={index}
            className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 overflow-hidden cursor-pointer hover:scale-105 transition-all'
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image.path}
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
              alt={image.title}
              className='rounded-lg'
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50'
          onClick={closeModal}
        >
          <div
            className='relative'
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.path}
              width={1000}
              height={600}
              layout="responsive"
              objectFit="cover"
              alt={selectedImage.title}
            />
            <button
              className='absolute top-2 right-2 text-white text-2xl'
              aria-label="Close Modal"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSlider;
