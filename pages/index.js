import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import quotes from "../components/quotes";
import Typed from "typed.js";

// variants
import { fadeIn } from '../variants'

// components
import ParticlesContainer from '../components/ParticlesContainer'


const Home = () => {
  const [randomQuote, setRandomQuote] = useState("");
  const el = useRef(null);

  useEffect(() => {
    // Select a random quote on component mount or reload
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);

    // Typed js
    const typed = new Typed(el.current, {
      strings: ["Hello","नमस्ते ","নমস্কার","ہیلو", "Hola", "Olá", "Привет",".... . .-.. .-.. ---",], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 25,
      backSpeed: 25,
      backDelay: 1800,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });
    // Destroy Typed instance on unmounting the component to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);
  return <div className="bg-primary/60 h-full relative overflow-y-auto">
    <ParticlesContainer className="absolute top-0 left-0 right-0 bottom-0 z-[-1]" />

    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative">
      <div className="text-center flex flex-col justify-center mt-32 md:mt-0 xl:pt-40 h-full container mx-auto">
        <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'>
          <Image
            src="/avatar.png"
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
        <span ref={el}></span><br /> Welcome to my{' '} <span className="text-accent">Portfolio</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className="text-xl max-w-sm xl:max-w-xl mx-auto pb-40 md:pb-0 xl:mb-16">
          {randomQuote}
        </motion.p>
      </div>
    </div>
  </div>
};

export default Home;
