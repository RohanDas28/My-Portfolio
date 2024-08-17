import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import GfxSlider from "../../components/GfxSlider";

const gfx = () => {
  return <div className="h-full bg-primary/30 py-24 text-center">
    <div className="mx-auto h-full flex flex-col lg:px-32">
      <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className="h2 mb-8 xl:mb-0 cursor-default">My <span className="text-accent underline">Graphics</span> Work</motion.h2>
      <div className='flex flex-col xl:flex-row gap-x-8 mt-8 overflow-auto custom-scrollbar'>
        {/* Slider */}
        <motion.div variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden'  className='w-full xl:max-w-[95%]'>
        <GfxSlider/>
        </motion.div>
      </div>
    </div>
  </div>;
};

export default gfx;
