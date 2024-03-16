"use client";

import * as React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useAuth } from "@clerk/clerk-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import Icons from "../../../public/EDUQUIC1.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export function NavigationMenuDemo() {
  const { isSignedIn } = useAuth();

  return (
    <div className=" flex items-center justify-between  bg-transparent backdrop-blur-2xl">
      <Link href="/" className="relative ml-6">
      <Image
      height={130}
      width={130}
      alt="logo"
      src="/EDUQUIC1.png"
      className="dark:hidden"
    />
      <Image
      height={130}
      width={130}
      alt="logo"
      className="hidden dark:block"
      src="/EDUQUICDARK1.png"
     
    />
      </Link>
      <div>
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
 
          <ModeToggle />
        
        <Link
          href={isSignedIn ? "/dashboard" : "/sign-up"}
          className="relative sm:p-2 sm:mr-2 mr-6   font-medium text-white sm:text-sm group "
        >
          {isSignedIn &&(<Button>Dashboard</Button>)}
          {!isSignedIn &&(<Button>Sign-in</Button>)}
        </Link>
       
      </div>
    </div>
  );
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
  );
});
ListItem.displayName = "ListItem";
