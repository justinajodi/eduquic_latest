import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Features",
    hash: "#skills",
  },
  {
    name: "Modules",
    hash: "#projects",
  },


  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Inituitive UI",
    description:
      "Immense User Experience using Tailwind Css, dives you into another World.",
    tags: ["User-Freindly", "Shadows", "Navigation", "Animations", "Icons","Responsive","Dynamic"],
    imageUrl: corpcommentImg,
  },
  {
    title: "AI Tools",
    description:
      "Not just Courses,Folks! We Have the most Advanced AI tools.",
    tags: ["Summerizer","Chat-Bot","Queries"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Courses",
    description:
      "This Website is made for one and all.",
    tags: [  "Computer Science" ,
     "Music" ,
     "Fitness" ,
     "Photography" ,
     "Accounting" ,
     "Engineering" ,
     "Filming" ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
"Cost effective Courses","Skill Development Courses","Quizes","AI Tools","Self-Study Notes section","Summarizer","Easy to use Interface","Chat-bot","Easy-Transaction","Score-Freindly","Enjoyable and Fully Interactive UI","Courses from Top Rated Coaches","Complete Training","Skills Upgrade","Much more..."
] as const;
