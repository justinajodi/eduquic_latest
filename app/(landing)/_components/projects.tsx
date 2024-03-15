"use client";

import React from "react";
import SectionHeading from "../../../components/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { AnimatedPinDemo } from "./3dcarddemo";
import { ThreeDCardDemo } from "./3dcardmotion";

export default function Projects() {
  const { ref } = useSectionInView("Modules", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>What you will get</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    
    </section>
  );
}
