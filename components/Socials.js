import Link from "next/link";

import {RiLinkedinBoxLine, RiInstagramLine, RiTwitterXLine,RiGithubLine  } from 'react-icons/ri'

const Socials = () => {
  return <div className="hidden sm:flex items-center gap-x-5 text-xl">
    <Link href={"https://www.linkedin.com/in/rohandas28"} target='_blank' className=" hover:text-accent transition-all duration-300">
      <RiLinkedinBoxLine/>
    </Link>
    <Link href={"https://www.instagram.com/rohandasrd"} target='_blank' className=" hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </Link>
    <Link href={"https://twitter.com/RohanDas28"} target='_blank' className=" hover:text-accent transition-all duration-300">
      <RiTwitterXLine/>
    </Link>
    <Link href={"https://github.com/RohanDas28"} target='_blank' className=" hover:text-accent transition-all duration-300">
      <RiGithubLine/>
    </Link>
  </div>;
};

export default Socials;
