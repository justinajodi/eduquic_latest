// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useAuth } from "@clerk/clerk-react";
// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "../../../components/mode-toggle";
// import { ArrowRight } from "lucide-react";
// import Header from "./header";


// export const LandingNavbar = () => {
//   const { isSignedIn } = useAuth();

//   return (
//     <nav className="p-4 flex items-center justify-between">
//       <Link href="/" className="flex items-center">
//         <div className="m-2">
//           <Image
//             height={130}
//             width={130}
//             alt="logo"
//             src="/EDUQUIC1.png"
//             className="dark:hidden"
//           />
//           <Image
//             height={130}
//             width={130}
//             alt="logo"
//             className="hidden dark:block"
//             src="/EDUQUICDARK1.png"
//           />
//           <Header />
//         </div>
//       </Link>
//       <div className="flex items-center gap-x-2 m-2">
//         <Link
//           href={isSignedIn ? "/dashboard" : "/sign-up"}
//           className="relative px-5 py-2 font-medium text-white group"
//         >
//           <div className="relative inline-flex  group">
//             <div className="hidden dark:block absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-rose-600 via-rose-600 to-rose-600 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

  
//               {" "}
//               <button
//                 className=" hidden dark:block relative  items-center justify-center px-8 py-4 text-lg  text-white transition-all duration-200 dark:bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900"
//                 role="button"
//               >
//                 Get started
//               </button>
       
//           </div>
//           <Button className="dark:hidden mr-3">
//             Get Started <ArrowRight></ArrowRight>
//           </Button>
//         </Link>
//         <div>
//           <ModeToggle />
//         </div>
//       </div>
//     </nav>
//   );
// };




"use client"

import * as React from "react"
import Link from "next/link"
import { Montserrat } from "next/font/google";
import Image from "next/image"
import { useAuth } from "@clerk/clerk-react";


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


import  Icons  from "../../../public/EDUQUIC1.png"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";



export function NavigationMenuDemo() {
  const { isSignedIn } = useAuth();

  return (
    <div className=" flex items-center justify-between  bg-transparent backdrop-blur-lg">
 
    <Link href="/"className="relative mr-4" >
        <Image width={100} height={100} alt="Logo" className="ml-20" src="/EDUQUICDARK1.png" />
    </Link>
    <div >
 
    <NavigationMenu className="max-[600px]:hidden  ">
      <NavigationMenuList>

      <NavigationMenuItem>
          <Link href="#home" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      <NavigationMenuItem>
          <Link href="#about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#skills" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Modules
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    <div className="flex items-center gap-x-2 m-2">
        <Link
          href={isSignedIn ? "/dashboard" : "/sign-up"}
          className="relative px-5 py-2 font-medium text-white group"
        >
          <div className="relative inline-flex  group">
            <div className="hidden dark:block absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-rose-600 via-rose-600 to-rose-600 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              title="Get quote now"
              className="sm:font-sm hidden dark:block relative  items-center justify-center px-8 py-4 text-lg  text-white transition-all duration-200 dark:bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900"
              role="button"
            >
              Get started
            </a>
          </div>
        </Link>
        <div className="mr-10">
          <ModeToggle  />
        </div>
      </div>

</div>










  
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
