import React from "react";
import { PiBookOpenText } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vamfit from "../public/VamFit.png"
import vamGram from "../public/vamGram.png"
import CodeVam from "../public/CodeVam.png"
import VamDash from "../public/VamDash.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Authored a Book Chapter",
    location: "Greater Noida, Uttar Pradesh",
    description: 
      "I authored a book chapter titled 'Machine Learning-Driven Task Offloading for Smart Vehicular Edge Computing: Taxonomy, Issues, and Opportunities,' accepted for publication in Springer.",
    icon: React.createElement(PiBookOpenText),
    date: "2024",
  },
  {
    title: "Full Stack Specialization",
    location: "Noida, Uttar Pradesh",
    description: 
      "During my BTech specialization in Full Stack from 2022 to 2024, I learned HTML, CSS, JavaScript, Node.js, and various other technologies. Previously, I worked as a front-end developer  in one team project and 1 year in another project, during which I upskilled to become a full-stack developer.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  }
  ,
  {
    title: "Got Enrolled in BTech CSE",
    location: "Noida, Uttar Pradesh",
    description: 
      "I graduated 12th with 92% and received a 35% scholarship to pursue my passion for technology. I chose to study Computer Science and Engineering (CSE) and am now a full-stack developer working on my individual freelance projects. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present"
  }
  ,
] as const;

export const projectsData = [
  {
    title: "VamGram",
    description:
      "A comprehensive MERN stack application featuring JWT authentication, React Quill for rich text editing, and advanced state management techniques",
    tags: ["React", "Node.js", "MongoDB", "Express", "RestApi"],
    imageUrl: vamGram,
  },,
  {
    title: "CodeVam",
    description:
      "An educational resource for enhancing Online Coding with React Router v6 for modern UI development.",
    tags: ["React", "React Router", "CSS", "JavaScript"],
  imageUrl: CodeVam,
  },
  {
    title: "VamFit",
    description:
      "I've developed a cross-platform React Native app enabling users to search for foods, view nutrition details, and monitor daily consumption seamlessly on iOS and Android.",
    tags: ["ReactNatve", "Axios", "JavaScript"],
     imageUrl: vamfit,
  },
  {
    title: "VamDash",
    description:
      "VamDash, a versatile dashboard leveraging HTML, CSS, and Vanilla JS with Google Material components, enhances CSS skills and offers a responsive design for iPad to desktop viewing.",
    tags: ["HTML", "JavaScript", "CSS", "MaterialUI"],
    imageUrl: VamDash,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",,
  "Express",
  "PostgreSQL",
  "C++",
  "ReactNative",
  "FramerMotion",
  "PostMan",
  "Figma",
  "RESTAPI",
  "Zest",
  "Data Structures",
  "Algorithms"
] as const;