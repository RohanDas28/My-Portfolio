import Link from "next/link";

import {RiYoutubeLine, RiInstagramLine, RiTwitterXLine,RiGithubLine  } from 'react-icons/ri'

const Socials = () => {
  return <div className="hidden sm:flex items-center gap-x-5 text-xl">
    <Link href={''} className=" hover:text-accent transition-all duration-300">
      <RiYoutubeLine/>
    </Link>
    <Link href={''} className=" hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </Link>
    <Link href={''} className=" hover:text-accent transition-all duration-300">
      <RiTwitterXLine/>
    </Link>
    <Link href={''} className=" hover:text-accent transition-all duration-300">
      <RiGithubLine/>
    </Link>
  </div>;
};

export default Socials;
