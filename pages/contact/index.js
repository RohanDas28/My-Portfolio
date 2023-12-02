import Link from 'next/link';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { RiTwitterXLine, RiMailLine, RiLinkedinBoxLine, RiGithubLine, RiInstagramLine, RiTelegramLine, RiRedditLine, RiSpotifyLine } from "react-icons/ri";


const Contact = () => {
  return <div className='h-full bg-primary/30'>
    <Circles />
    <div className='container mx-auto py-32 text-center flex items-center justify-center h-full'>
      <div className='flex flex-col justify-center items-center'>
        <motion.h2 variants={fadeIn('down',0.2)} initial='hidden' animate='show' exit='hidden' className='h2 text-center mb-6'>You can find me <span className='text-accent'>here.</span></motion.h2>
        {/* Icons */}
        <motion.div variants={fadeIn('up',0.4)} initial='hidden' animate='show' exit='hidden' className='flex flex-row gap-x-4 text-3xl md:text-5xl'>
          <Link className='hover:text-accent hover:scale-125 transition-all duration-300' href={"mailto:rohandasbirbhum@gmail.com"} target='_blank' title='Send me an Email' >
            <RiMailLine />
          </Link>

          <Link className='hover:text-accent hover:scale-125 transition-all duration-300' href={"https://twitter.com/RohanDas28"} target='_blank' title='Follow me on X' >
            <RiTwitterXLine />
          </Link>

          <Link className='hover:text-accent hover:scale-125 transition-all duration-300' href={"https://github.com/RohanDas28"} target='_blank' title='Checkout my GitHub' >
            <RiGithubLine />
          </Link>

          <Link className='hover:text-accent hover:scale-125 transition-all duration-300' href={"https://www.instagram.com/rohandasrd"} target='_blank' title='Follow me on Instagram'>
            <RiInstagramLine />
          </Link >

          <Link className='hover:text-accent hover:scale-125 transition-all duration-300' href={"https://www.linkedin.com/in/rohandas28"} target='_blank' title='Connect on LinkedIn'>
            <RiLinkedinBoxLine />
          </Link>

          <Link className='hover:text-accent hover:scale-125 transition-all duration-300' href={"https://t.me/RohanDas28"} target='_blank' title='Send a message on Telegram'>
            <RiTelegramLine />
          </Link>

          <Link className='hover:text-accent hover:scale-125 transition-all duration-300' href={"https://www.reddit.com/user/RohanDas28"} target='_blank' title='Follow me on Reddit'>
            <RiRedditLine />
          </Link>

          <Link className='hover:text-accent hover:scale-125 transition-all duration-300' href={"https://open.spotify.com/artist/3kBygLthhdEVZ45drihYha"} target='_blank' title='Listen to my Songs'>
            <RiSpotifyLine />
          </Link>
        </motion.div>
      </div>
      <Bulb />
    </div>
  </div>;
};

export default Contact;
