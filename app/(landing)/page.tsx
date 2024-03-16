;
import  About  from "./_components/about";
import Projects from "./_components/projects";
import { AnimatedPinDemo } from "./_components/3dcarddemo";
import { ThreeDCardDemo } from "./_components/3dcardmotion";
import { GlobeDemo } from "./_components/globedemo";
import Skills from "./_components/skills";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import { LandingHero } from "./_components/landing-hero";
import { LandingContent } from "./_components/landing-content";

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
          <Skills />
          <Projects />
          <AnimatedPinDemo />
          <ThreeDCardDemo />
          <LandingContent />
          <GlobeDemo />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

//bg-rose-200 svg-hidden

