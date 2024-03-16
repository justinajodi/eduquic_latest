"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";


export function AnimatedPinDemo() {
  return (

   <div>
  <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white mb-10">
     Most Popular Tools
    </h2>
    <div className="h-[40rem] w-full flex items-center justify-center ">
  
     <div className="grid md:grid-cols-2 lg:grid-cols-2 sm-grid-cols-1 ">
        
        
     <PinContainer
        title="Summarizer"
        href="http://localhost:3000/summarizer"
     
      >
        <div className="flex basis-full flex-col p-4 tracking-tight   sm:basis-1/2 w-[20rem] h-[20rem] text-zinc-800 dark:text-zinc-200 ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base ">
            Summarizer AI
          </h3>
          <div className="text-base !m-0 !p-0 font-norma text-zinc-700 dark:text-zinc-300">
            <span className=" ">
              Simplifiy Content using AI.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-[url('/p1.jpg')] bg-auto" />

        </div>
      </PinContainer>

      <PinContainer
        title="Chat"
        href="http://localhost:3000/summarizer"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight   sm:basis-1/2 w-[20rem] h-[20rem] text-zinc-800 dark:text-zinc-200">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base ">
            Chat AI
          </h3>
          <div className="text-base !m-0 !p-0 font-norma text-zinc-700 dark:text-zinc-300">
            <span className=" ">
              Clear Your Doubts instantly using AI.
            </span>
          </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-[url('/p2.jpg')] bg-auto" />
        </div>
      </PinContainer>



      <PinContainer
        title="Notes"
        href="http://localhost:3000/summarizer"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight   sm:basis-1/2 w-[20rem] h-[20rem] text-zinc-800 dark:text-zinc-200">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base ">
           Notes
          </h3>
          <div className="text-base !m-0 !p-0 font-norma text-zinc-700 dark:text-zinc-300">
            <span className=" ">
              Recall later by writing notes.
            </span>
          </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-[url('/p3.jpg')] bg-auto" />
        </div>
      </PinContainer>


      <PinContainer
        title="Quiz"
        href="http://localhost:3000/summarizer"
        
      >
        <div className="flex basis-full flex-col p-4 tracking-tight   sm:basis-1/2 w-[20rem] h-[20rem] text-zinc-800 dark:text-zinc-200">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base ">
            Quiz
          </h3>
          <div className="text-base !m-0 !p-0 font-norma text-zinc-700 dark:text-zinc-300">
            <span className=" ">
              Test yourself.
            </span>
          </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-[url('/p4.jpg')] bg-auto" />
        </div>
      </PinContainer> </div>

    </div>


</div>
    
  
  );
}
