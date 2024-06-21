"use client";
import React,{useEffect} from 'react'
import Link from "next/link"
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import {HiDownload} from "react-icons/hi"
import {BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs"
import { RiNodejsFill } from "react-icons/ri";
import {motion} from "framer-motion"
import { useActiveSection } from '../app/context/activeSection';
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '../lib/hooks';
export default function Intro() {
 const {ref} = useSectionInView("Home", 0.5);
 const {setActiveSection,setTimeofLastClick} = useActiveSection();
  return (

    <section ref ={ref} className='mb-28 max-w-[55rem] text-center sm:mb-0 scroll-mt-28' id="home">
      <div className='flex items-center justify-center'>
        <div className='relative'>
              <motion.div
              initial={{opacity:0, scale:0}}
              animate={{opacity:1, scale:1}}
              transition={{
                type:"tween",
                duration:0.2
              }}
              >
             <Image src="/shivi.jpeg" alt="Shivam_VAM"
            height="192"
            width="192" 
            quality="95"
            priority={true}
            className='h-24 w-24  rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
            </motion.div>


            <motion.span className='absolute bottom-9 right-1 text-3xl'
            initial={{opacity:0,scale:1}}
            animate={{opacity:1,scale:1}}
            transition={{
              type:"spring",
              stiffness:125,
              delay: 0.1,
              duration:0.7
            }}
            >
              👋
            </motion.span>
            <motion.div className="flex w-full items-center justify-center px-3 py-3 gap-1 "
             initial={{opacity:0,scale:1}}
             animate={{opacity:1,scale:1}}
             transition={{
              type:"spring",
              stiffness:125,
              delay: 0.1,
              duration:0.7
            }}
            >
            <SiMongodb />
            <SiExpress />
            <SiReact />
            <RiNodejsFill />
            </motion.div>
        </div>
      </div>
      <motion.h1 className='mb-10 mt-14 px-4 text-2xl font-medium leading-[1.5 sm:text-4xl dark:text-white/70'
      initial={{ opacity:0,y:100}}
      animate= {{opacity:1,y:0}}
      >
      <span className="font-bold">Hello, I'm Shivam!</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is the{" "}
        <span className='font-bold'> MERN </span><span>stack</span>
      </motion.h1>
      <motion.div className='flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium flex-wrap'
      initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}
      transition={{
        delay:0.1
      }}
      >
        <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all'
        onClick={()=> {
          setActiveSection("Contact")
          setTimeofLastClick(Date.now())
        }}
        >Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
        <a href='/mERN.pdf' download target="_blank" className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition-all borderBlack dark:bg-white/10'>
          Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <a href="https://www.linkedin.com/in/shivam-singh-s2612/" className= 'bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all borderBlack dark:bg-white/10 dark:text-white/60' target='_blank'>
          <BsLinkedin />
        </a>
        <a href="https://github.com/shivamquincy" className= 'bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all borderBlack dark:bg-white/10 dark:text-white/60' target='_blank'>
          <BsGithub />
        </a>
        <a href="https://leetcode.com/u/vam26/" className= 'bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all borderBlack dark:bg-white/10 dark:text-white/60'  target='_blank'>
        <SiLeetcode />
        </a>
      </motion.div>
    </section>
  )
}
