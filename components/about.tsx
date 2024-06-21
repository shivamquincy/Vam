"use client";
import React, { useEffect } from 'react'
import {motion} from "framer-motion"
import Sheading from './sheading'
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../app/context/activeSection';
import { useSectionInView } from '../lib/hooks';
export default function About() {
  const {ref} = useSectionInView("About", 0.7);

  return (
   <motion.section
    ref={ref}
   className='mb-28 max-w-[45rem] text-center  leading-8 sm:mb-40 scroll-mt-28'
   initial={{opacity:0,y:100}}
   animate={{opacity:1,y:0}}
   transition={{delay: 0.175 }}
   id="about"
   >
    <Sheading name='About me'/>
   <p className='mb-3 '>
   Currently enrolled in a degree in{" "}
        <span className="font-medium">Computer Science Engineering</span>,I am a {" "}
        <span className="font-medium">full-stack web developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Express.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and FireBase. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position/internship</span> as a software
        developer.
   </p>
   <p>
   <span className="italic">Outside of my professional life</span>,I am passionate about maintaining a balanced lifestyle
   I work out daily, which helps me stay focused and energized.I also have a keen interest{" "}
        <span className="font-medium"> in fashion, enjoying the creativity and expression it brings.</span>
       

   </p>
   </motion.section>

  )
}
