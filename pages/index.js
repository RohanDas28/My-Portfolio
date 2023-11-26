import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import quotes from "../components/quotes";

// variants
import { fadeIn } from '../variants'

// components
import ParticlesContainer from '../components/ParticlesContainer'


const Home = () => {
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    // Select a random quote on component mount or reload
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);
  return <div className="bg-primary/60 h-full relative">
  <ParticlesContainer className="absolute top-0 left-0 right-0 bottom-0 z-[-1]" />

  <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative">
    <div className="text-center flex flex-col justify-center xl:pt-40 h-full container mx-auto">
      {/* Image (visible only on XL devices) */}
      <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'>
      <Image
          src="/avatar.png" // Replace with the actual path to your image
          alt="Image Description"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
          className="mx-auto mb-4 rounded-full"
          draggable={false}
          quality={100}
        />
      </motion.div>
      {/* Title */}
      <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className="h1">
        नमस्ते!<br /> Welcome to my{' '} <span className="text-accent">Portfolio</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className="text-xl max-w-sm xl:max-w-xl mx-auto mb-10 xl:mb-16">
        {randomQuote}
      </motion.p>
    </div>
  </div>
</div>
};

export default Home;
