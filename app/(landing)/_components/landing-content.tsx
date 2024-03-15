"use client";
import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Book,
  Plus,
  Star,
  TabletSmartphoneIcon,
  UserRound,
  Wrench,
} from "lucide-react";
// import MyCountUp from "./mycountup";
import { Separator } from "../../../components/ui/separator";
import { InfiniteMovingCardsDemo } from "./testimonialsmotiona";

const testimonials = [
  {
    name: "Miracline J.",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Selena A.",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for scoring better marks",
  },
  {
    name: "Charlton D.",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Atharva M.",
    avatar: "M",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
];

const counter = [
  {
    name: "Miracline J.",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Selena A.",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Charlton D.",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20 bg-white dark:bg-black  ">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Testimonials
      </h2>

      <InfiniteMovingCardsDemo/>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((i) => (
          <Card
            key={i.description}
            className="bg-zinc-900  text-lg border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{i.name}</p>
                  <p className="text-rose-400 text-base">{i.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{i.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div> */}
      {/* <div className=" m-3 gap-x-10 grid grid-cols-1 sm:grid-cols-4  ">
        <Card className="bg-zinc-200 dark:bg-white/10 border-none">
          <CardHeader>
            <CardTitle className="flex items-center">Students</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl ">
            <MyCountUp startVal={0} endVal={200} duration={5} delay={0} />
          </CardContent>
          <CardFooter>
            <UserRound className=" text-rose-600 animate-pulse" />
          </CardFooter>
        </Card>
        <Card className="bg-zinc-200 dark:bg-white/10 border-none">
          <CardHeader>
            <CardTitle>Teachers</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl ">
            <MyCountUp startVal={0} endVal={20} duration={5} delay={0} />
          </CardContent>
          <CardFooter>
            <Star className=" text-rose-600 animate-pulse" />
          </CardFooter>
        </Card>
        <Card className="bg-zinc-200 dark:bg-white/10 border-none">
          <CardHeader>
            <CardTitle>Courses</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl ">
            <MyCountUp startVal={0} endVal={200} duration={5} delay={0} />
          </CardContent>
          <CardFooter>
            <Book className=" text-rose-600 animate-pulse" />
          </CardFooter>
        </Card>
        <Card className="bg-zinc-200 dark:bg-white/10 border-none">
          <CardHeader>
            <CardTitle>Tools</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl ">
            <MyCountUp startVal={0} endVal={10} duration={5} delay={0} />
          </CardContent>
          <CardFooter>
            <Wrench className=" text-rose-600 animate-pulse" />
          </CardFooter>
        </Card>
      </div> */}
      {/* <div className="bg-zinc-100 dark:bg-black p-10 font-xl text-4xl">
        EDUQUIC
      <Separator className="my-4 mb-10"/>
      <div className="flex h-5 items-center space-x-4 space-between ">
      <div className="flex h-5 items-center space-x-4 ">
    
        <Facebook size={32} strokeWidth={1.5} className="hover:motion-safe:animate-pulse animate-[wiggle_1s_ease-in-out] dark:text-white text-primary mr-4"  />
      <Separator orientation="vertical" />
      <Instagram size={32} strokeWidth={1.5} className="hover:motion-safe:animate-pulse animate-[wiggle_1s_ease-in-out] dark:text-white text-primary mr-4" />
      <Separator orientation="vertical" />
      <Twitter size={32} strokeWidth={1.5} className="hover:motion-safe:animate-pulse animate-[wiggle_1s_ease-in-out] dark:text-white text-primary mr-4" />
      
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>hlo</div><div>hlo</div><div>hlo</div>
        </div>
      </div>
      </div> */}
    </div>

  );
};
