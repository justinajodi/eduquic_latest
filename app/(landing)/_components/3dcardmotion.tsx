"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3dcard";
import Image from "next/image";
import React from "react";


export function ThreeDCardDemo() {
  return (
   <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 mt-20 space-x-10">
     <CardContainer className="inter-var ">
      <CardBody className="bg-zinc-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-rose-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-zinc-800 dark:text-white"
        >UI UX Fundamentals
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-zinc-500 text-sm max-w-sm mt-2 dark:text-zinc-300"
        >
          Learn Amazing tools while upgrading your skills
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://i.pinimg.com/564x/56/b9/7a/56b97a178021083cdb612959bf02083f.jpg"
          
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now 
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-rose-600 dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Enroll
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>












    <CardContainer className="inter-var">
      <CardBody className="bg-zinc-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-rose-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-zinc-800 dark:text-white"
        >
          Amazon Web Service
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-zinc-500 text-sm max-w-sm mt-2 dark:text-zinc-300"
        >
          Learn about webservices
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://i.pinimg.com/564x/12/2f/08/122f084d39d376774d346b7ea4b9ac98.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now 
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-rose-600 dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Enroll
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

















    </div>

  );
}
