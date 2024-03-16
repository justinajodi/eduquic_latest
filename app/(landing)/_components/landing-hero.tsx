// "use client";

// import TypewriterComponent from "typewriter-effect";
// import Link from "next/link";
// import { useAuth } from "@clerk/clerk-react";
// import Image from "next/image"
// import { Button } from "@/components/ui/button";

// export const LandingHero = () => {
//   const { isSignedIn } = useAuth();

//   return (
//     <div className="text-black font-bold py-10 text-center space-y-5">
//       <div className="text-6xl font-black dark:text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl space-y-5 ">


//         <h1 >Learn 10X faster. </h1>
//         {/* <h1> EDUQIC.</h1> */}
//         <div className=" text-primary">
//           <TypewriterComponent
//             options={{
//               strings: [
//                 "Explore.",
//                 "Score.",
//                 "Implement.",
//                 "Grow."
//               ],
//               autoStart: true,
//               loop: true,
//             }}
//           />
//         </div>
//       </div>
//       <div className="text-lg font-medium  md:text-xl dark:text-zinc-50 ">
//         {/* <div className="text-sm md:text-xl font-light text-white"> */}

//         Elevate your learning with Eduquic.
//       </div>
//       <div>
//         {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
//           <Button variant="premium" className="md:text-lg p-4 md:p-6  rounded-full font-semibold">
//             Start Generating For Free
//           </Button>
//         </Link> */}
//         {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className="px-5 py-2.5 relative rounded group font-medium text-white inline-block">
// <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-rose-600 to-rose-500"></span>
// <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-rose-600 to-rose-500"></span>
// <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-rose-600 to-rose-500"></span>
// <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-rose-600 from-rose-500"></span>
// <span className="relative">Button Text</span>
// </Link> */}
//         <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className="relative px-5 py-2 font-medium text-3xl text-white group">
//         <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
// <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-600 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>
// <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-700 -rotate-12"></span>
// <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-500 -rotate-12"></span>
// <span className="relative">Explore</span>

//         {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className="relative px-5 py-2 font-medium text-white group">
//           <div className="relative inline-flex  group">
//             <div
//               className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
//             </div>
//             <a href="#" title="Get quote now"
//               className="relative inline-flex items-center justify-center px-8 py-4 text-lg  text-white transition-all duration-200 bg-zinc-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900"
//               role="button"> Explore!
//             </a>
//           </div>
//         </Link> */}
//         </Link>
//       </div>
//       <div className=" text-xs md:text-sm font-normal dark:text-zinc-50">
//         No credit card required.
//       </div>
//     </div>
//   );
// };


"use client";
import {  Facebook, Instagram, Twitter } from "lucide-react";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { ArrowDownToLine, ArrowRight, Download, Github, LinkedinIcon, TwitterIcon, Youtube } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }
   
  return (
    <section
    ref={ref}
    id="home"
className="mb-20 pt-40"
  >  
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
       <div className="text-black font-bold py-10 text-center space-y-5">
      <div className="text-6xl font-black dark:text-zinc-50 sm:text-4xl md:text-6xl lg:text-7xl space-y-5 ">


        <h1 >Learn 10X faster. </h1>
        {/* <h1> EDUQIC.</h1> */}
        <div className=" text-primary">
          <TypewriterComponent
            options={{
              strings: [
                "Explore.",
                "Score.",
                "Implement.",
                "Grow."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-lg font-medium  md:text-xl dark:text-zinc-50 ">
        {/* <div className="text-sm md:text-xl font-light text-white"> */}

        Elevate your learning with Eduquic.
      </div>
      <div>
        {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6  rounded-full font-semibold">
            Start Generating For Free
          </Button>
        </Link> */}
        {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className="px-5 py-2.5 relative rounded group font-medium text-white inline-block">
<span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-rose-600 to-rose-500"></span>
<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-rose-600 to-rose-500"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-rose-600 to-rose-500"></span>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-rose-600 from-rose-500"></span>
<span className="relative">Button Text</span>
</Link> */}
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className="relative px-5 py-2 font-medium text-3xl text-white group">
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-600 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>
<span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-700 -rotate-12"></span>
<span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-500 -rotate-12"></span>
<span className="relative">Explore</span>

        {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className="relative px-5 py-2 font-medium text-white group">
          <div className="relative inline-flex  group">
            <div
              className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a href="#" title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg  text-white transition-all duration-200 bg-zinc-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900"
              role="button"> Explore!
            </a>
          </div>
        </Link> */}
        </Link>
      </div>
      <div className=" text-xs md:text-sm font-normal dark:text-zinc-100/70 ">
        No credit card required.
      </div>
   
    </div>
      </motion.div>
      
  
  </section>
  );
};


// "use client";

// import TypewriterComponent from "typewriter-effect";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { BsArrowRight, BsLinkedin } from "react-icons/bs";
// import { HiDownload } from "react-icons/hi";
// import { FaGithubSquare } from "react-icons/fa";
// import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";
// import { ArrowDownToLine, ArrowRight, Download, Github, LinkedinIcon, TwitterIcon, Youtube } from "lucide-react";

// export default function Intro() {
  // const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  // const imageStyle = {
  //   borderRadius: '50%',
  //   border: '1px solid #fff',
  // }
   

//   return (
//     <section
//       ref={ref}
//       id="home"
//       className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
//     >
     
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//       <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
//             <span className="text-black">
//               Hello, I&apos;m{" "}
//             </span>
//             <br></br>
//             <div className=" text-rose-500">
//         <TypewriterComponent
//           options={{
//             strings: [
//               "Designer.",
//               "Developer.",
//               "Dynamic.",
//               "Versatile.",
//             ],
//             autoStart: true,
//             loop: true,
//           }}
//         />
//       </div>
//           </h1>
      
//           <div>
       
           
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
//           <div className="rounded-full ml-20 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image
//               src="/I.jpg"
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={300}
//               height={300}
//               style={imageStyle} 
//             />
//           </div>
//         </motion.div>
//       </div>

     
//       <motion.div
//         className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.1,
//         }}
//       >
//         <Link
//           href="#contact"
//           className="group bg-zinc-900 text-white rounded-lg px-7 py-3 flex items-center gap-2 outline-none focus:scale-110  hover:bg-zinc-950  transition"
//           onClick={() => {
//             setActiveSection("Contact");
//             setTimeOfLastClick(Date.now());
//           }}
//         >
//           Contact me here{" "}
//           <ArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
//         </Link>

//         <a
//           className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110  transition cursor-pointer borderBlack dark:bg-white/10"
//           href="/CV.pdf"
//           download
//         >
//           Download CV{" "}
//           <ArrowDownToLine className="opacity-60 group-hover:translate-y-1 transition" />
//         </a>

      

//         <a
//           className="bg-white p-4 text-zinc-700 flex items-center gap-2 text-[1.35rem] rounded-full   hover:text-zinc-950  transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
//           href="https://github.com"
//           target="_blank"
//         >
//           <Github/>
//         </a>
//         <a
//           className="bg-white p-4 text-zinc-700 flex items-center gap-2 text-[1.35rem] rounded-full   hover:text-zinc-950  transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
//           href="https://github.com"
//           target="_blank"
//         >
//           <Youtube/>
//         </a>
//         <a
//           className="bg-white p-4 text-zinc-700 flex items-center gap-2 text-[1.35rem] rounded-full   hover:text-zinc-950  transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
//           href="https://github.com"
//           target="_blank"
//         >
//           <TwitterIcon/>
//         </a>
//       </motion.div>
//     </section>
//   );
// }
// {/* <div className="grid grid-cols-1 sm:grid-cols-12">
// <motion.h1
//   className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
//   initial={{ opacity: 0, y: 100 }}
//   animate={{ opacity: 1, y: 0 }}
// >
//   <div className="text-black font-bold py-10 text-center space-y-5">
//     <div className="text-6xl font-black dark:text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl space-y-5 ">
//       <h1>Learn 10X faster. </h1>
//       <div className=" text-rose-500">
//         <TypewriterComponent
//           options={{
//             strings: [
//               "Designer.",
//               "Developer.",
//               "Dynamic.",
//               "Versatile.",
//             ],
//             autoStart: true,
//             loop: true,
//           }}
//         />
//       </div>
//     </div>
//     <div className="text-lg font-medium  md:text-xl dark:text-zinc-50 ">
//       Elevate your learning with Eduquic.
//     </div>
//     <div>
//       <Link
//         href={"/"}
//         className="relative px-5 py-2 font-medium text-3xl text-white group"
//       >
//         <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
//         <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-600 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>
//         <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-700 -rotate-12"></span>
//         <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-500 -rotate-12"></span>
//         <span className="relative">Explore</span>
//       </Link>
//     </div>
//   </div>
// </motion.h1>
// <motion.div
//   initial={{ opacity: 0, scale: 0.5 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ duration: 0.5 }}
//   className="col-span-4 place-self-center mt-4 lg:mt-0"
// >
//   <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//     <Image
//       src="/I.jpg"
//       alt="hero image"
//       className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//       width={300}
//       height={300}
//     />
//   </div>
// </motion.div>
// </div> */}