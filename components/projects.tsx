"use client"
import React, { useEffect } from 'react'
import Sheading from './sheading'
import Image from 'next/image'
import { projectsData } from '../lib/data'
import { useScroll } from 'framer-motion'
import { useActiveSection } from '../app/context/activeSection'
import { useInView } from 'react-intersection-observer'
import Project from "../components/project"
import { useSectionInView } from '../lib/hooks'
 

export default function Projects() {
  const {ref} = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className='scroll-mt-28'>
      <Sheading name="My Projects" />
      <div>
        {
       projectsData.map((project,index) => (
        <React.Fragment key={index}>
     <Project {...project}/>
     </React.Fragment >
       ))
    }
      </div>
    </section>
  )
}


