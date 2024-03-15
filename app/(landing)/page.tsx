import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import About from "@/components/landing-about";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { AnimatedPinDemo } from "./_components/3dcarddemo";
import { ThreeDCardDemo } from "./_components/3dcardmotion";

const LandingPage = () => {
  // return (
  //   <div className="h-full  selection:bg-rose-500 selection:text-black  ">
  //     <LandingNavbar />
  //     <div className="flex flex-col items-center px-4">
  //       <LandingHero />
  //       <div className="bg-white dark:bg-black flex flex-col items-center px-4">
  //         <About />
  //         <Skills></Skills>
  //         <Projects />
  //         <LandingContent />
  //         <Contact />
  //         <Footer />
  //       </div>
  //     </div>
  //   </div>
  // );


  return (
    <div className="h-full  selection:bg-rose-500 selection:text-white ">
      {/* <LandingNavbar /> */}
      
      <div className="flex flex-col items-center px-4">
        <LandingHero />
        <div className="bg-white dark:bg-black flex flex-col items-center px-4">
          <About />
          <Skills/>
          <Projects />
          <AnimatedPinDemo />
          <ThreeDCardDemo />
          <LandingContent />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

//bg-rose-200 svg-hidden


