"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { TextGenerateEffect } from "./txtgen";

export default function About() {
  const { ref } = useSectionInView("About");
  const words = `  Revolutionize your educational experience with our cutting-edge Learning Management System (LMS) enhanced with powerful AI tools. Our platform leverages state-of-the-art artificial intelligence technology to deliver a personalized and efficient learning journey for both educators and students alike.

  Experience seamless content delivery tailored to individual learning styles and preferences. Our AI-powered recommendation engine analyzes user interactions, performance data, and learning objectives to suggest relevant materials, resources, and activities, ensuring optimal engagement and comprehension.
       `;
  return (
   <div className="">
     <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mt-10 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading >About Eduquic</SectionHeading>
      <p className="mb-3 mt-10">
        <TextGenerateEffect words={words}></TextGenerateEffect>
      </p>
    </motion.section>
   </div>
  );
}



// "use client";
// import React from "react";
// import TypewriterComponent from "typewriter-effect";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   MotionValue,
// } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { TextGenerateEffect } from "./txtgen";

// export const About= ({
//   products,
// }: {
//   products: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   }[];
// }) => {
//   const firstRow = products.slice(0, 5);
//   const secondRow = products.slice(5, 10);
//   const thirdRow = products.slice(10, 15);
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

//   const translateX = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, 1000]),
//     springConfig
//   );
//   const translateXReverse = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, -1000]),
//     springConfig
//   );
//   const rotateX = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [15, 0]),
//     springConfig
//   );
//   const opacity = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
//     springConfig
//   );
//   const rotateZ = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
//     springConfig
//   );
//   const translateY = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
//     springConfig
//   );
//   return (
//     <div
//       ref={ref}
//       className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
//     >
//       <Header />
//       <motion.div
//         style={{
//           rotateX,
//           rotateZ,
//           translateY,
//           opacity,
//         }}
//         className=""
//       >
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
//           {firstRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-row  mb-20 space-x-20 ">
//           {secondRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateXReverse}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
//           {thirdRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export const Header = () => {
//   const words =
//     "  Nova: Empower your Next.js projects with seamless website building.Elevate your web development experience effortlessly.  ";
//   return (
//     <div
//       id="about"
//       className=" ml-10 z-[999] max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0"
//     >
//       <div className=" text-5xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-black ">
//         Why Nova?
//       </div>
//       <div className="mt-4 mb-4 text-sm md:text-xl font-light ">
//         <TextGenerateEffect words={words} />
//       </div>
//       <div>
//         <Link href="/dashboard">
//           <Button
        
//             className="md:text-lg p-4 md:p-6 font-medium"
//           >
//             Explore
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export const ProductCard = ({
//   product,
//   translate,
// }: {
//   product: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   };
//   translate: MotionValue<number>;
// }) => {
//   return (
//     <motion.div
//       style={{
//         x: translate,
//       }}
//       whileHover={{
//         y: -20,
//       }}
//       key={product.title}
//       className="group/product h-96 w-[30rem] relative flex-shrink-0"
//     >
//       <Link
//         href={product.link}
//         className="block group-hover/product:shadow-2xl "
//       >
//         <Image
//           src={product.thumbnail}
//           height="600"
//           width="600"
//           className="object-cover object-left-top absolute h-full w-full inset-0"
//           alt={product.title}
//         />
//       </Link>
//       <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
//       <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
//         {product.title}
//       </h2>
//     </motion.div>
//   );
// };
