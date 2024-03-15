"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mt-20 pt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About </SectionHeading>
      <p className="mb-3">
      Revolutionize your educational experience with our cutting-edge Learning Management System (LMS) enhanced with powerful AI tools. Our platform leverages state-of-the-art artificial intelligence technology to deliver a personalized and efficient learning journey for both educators and students alike.

      </p>

      <p>
        
Experience seamless content delivery tailored to individual learning styles and preferences. Our AI-powered recommendation engine analyzes user interactions, performance data, and learning objectives to suggest relevant materials, resources, and activities, ensuring optimal engagement and comprehension.
      </p>
    </motion.section>
  );
}
