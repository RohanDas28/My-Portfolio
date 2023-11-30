import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

// Counters
import CountUp from "react-countup";

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma,} from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiPhp, SiC, SiPython,SiCplusplus, SiLinux, SiUbuntu, SiGit, SiVisualstudiocode, SiAdobeaftereffects, SiAdobeillustrator, SiAdobepremierepro, SiAudacity } from "react-icons/si";

// Components
import Circles from '../../components/Circles'

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />, <SiNextdotjs />, <SiFramer />, <FaWordpress />,],
      },
      {
        title: 'Programming Languages',
        icons: [<SiC />, <SiPython />, <SiCplusplus />, <SiPhp />],
      },
      {
        title: 'Tools and Platforms',
        icons: [<SiLinux  />, <SiUbuntu  />, <SiGit />,<SiVisualstudiocode />,],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />,<SiAdobephotoshop />,<SiAdobeaftereffects />,<SiAdobepremierepro />,<SiAdobeillustrator />,<SiAudacity />,],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: "Frontend Developer - CWH Solutions",
        stage: "12/2021 - Present"
        },
      {
        title: 'Web Developer - Pixelnib',
        stage: '09/2021 - 11/2021',
      },
      {
        title: 'Intern - Techetarian',
        stage: '02/2017 - 11/2019',
      },
      {
        title: 'Freelance',
        stage: '01/2016 - Present',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Bachelor of Computer Application (BCA)',
        stage: '09/2020 - 09/2023,',
      },
      {
        title: 'Intermediate & High School',
        stage: '01/2008 - 06/2020',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return <div className="h-full bg-primary/30 py-28 text-center xl:text-left overflow-y-auto">
    <Circles />
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      <div className="flex-1 flex flex-col justify-center ">
        <motion.h2 variants={fadeIn('right',0.2)} initial='hidden' animate='show' exit='hidden' className="h2">Crafting <span className="text-accent">&lt;dreams&gt;</span> into &lt;code/&gt;</motion.h2>
        <motion.p variants={fadeIn('right',0.4)} initial='hidden' animate='show' exit='hidden' className="text-sm md:text-lg max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
        Embarking on my freelance developer journey seven years ago, I've seamlessly woven captivating stories into magnificent designs. Over the years, I've engaged in remote collaborations with agencies, contributed to impactful open-source projects, and played a pivotal role in crafting digital products for both business and consumer realms.
        </motion.p>
        {/* counters */}
        <motion.div variants={fadeIn('right',0.6)} initial='hidden' animate='show' exit='hidden' className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={7} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of Experience</div>
            </div>
            
            {/* Clients */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={100} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
            </div>

            {/* Projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={150} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
            </div>

          </div>
        </motion.div>
      </div>
      {/* Info */}
      <motion.div variants={fadeIn('left',0.4)} initial='hidden' animate='show' exit='hidden' className="flex flex-col w-full xl:max-w-[48%] h-[480px] pb-96 md:pb-0">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}>
              {item.title}
            </div>
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start pb-48 md:pb-0">
          {aboutData[index].info.map((item, itemIndex) => {
            return <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
              <div className="font-light mb-2 md:mb-0">{item.title}</div>
              <div className="hidden md:flex">-</div>
              <div>{item.stage}</div>
              <div className="flex gap-x-4">
                {/* Icons */}
                {item.icons?.map((icon, itemIndex) => {
                  return <div key={itemIndex} className="text-2xl text-white hover:text-accent transition-all duration-300">{icon}</div>
                })}
              </div>
            </div>
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
