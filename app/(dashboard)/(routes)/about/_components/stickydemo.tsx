"use client";
import React from "react";

import Image from "next/image";
import { StickyScroll } from "./sticky";

const content = [
  {
    title: "Justina Jodi (Founder)",
    description:
      "In the realm of modern education, where boundaries dissolve and knowledge is accessible at the click of a button, stands Justinaa, the visionary architect behind one of the most innovative e-learning platforms of our time. With a passion for education and a keen eye for technological advancement, [Founder's Name] has reshaped the landscape of learning, empowering millions worldwide to unlock their potential regardless of geographical constraints.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linkedin.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Why Eduquic?",
    description:
      "In the digital age, education is no longer confined to traditional classrooms. With the advent of e-learning platforms, knowledge has become accessible to learners worldwide. However, the integration of artificial intelligence (AI) into these platforms has revolutionized the learning experience, making it more personalized, adaptive, and efficient. In this guide, we delve into the significance of AI in e-learning, exploring its benefits.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://i.pinimg.com/564x/23/c2/45/23c245a3d05b1c60c03f197211cd7456.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
   {
    title: "What difference we make?",
    description:
      "In today's rapidly evolving educational landscape, AI-powered e-learning platforms are making a profound difference in how individuals acquire knowledge and skills. By leveraging advanced algorithms and machine learning techniques, these platforms offer personalized learning experiences tailored to the unique needs of each learner. Let's delve into the various ways in which these platforms are reshaping education and the difference they make.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://i.pinimg.com/564x/fe/f0/46/fef046305b5dde6f066c2b1d6dab6efe.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Keep Learning, Do Eduquic",
    description:
      "Around 10 million students have already enrolled and Experienced the miracles in their life.What are you waiting for.Grab the oportunity and stay tuned with out community",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://i.pinimg.com/564x/01/57/26/01572689ca06cccee7b3127b31e67414.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
