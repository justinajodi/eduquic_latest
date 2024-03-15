"use client";

import { ArrowRight,  BookOpen, Brain, Layers, PencilLine } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, MessageSquare, Music, VideoIcon,Book } from "lucide-react";



export default function DashBoardCard() {
  const router = useRouter();
  const routes = [
    {
      label: 'Courses',
      icon: BookOpen,
      href: '/search',
      color: "text-violet-500",
      bgColor: "bg-violet-100/10",
    },
    {
        label: 'Chat',
        icon: MessageSquare,
        href: '/chat',
        color: "text-cyan-600",
        bgColor: "bg-cyan-600/10",
      },

      {
        label: 'Summarizer',
        icon: Layers,
        href: '/summarizer',
        color: "text-teal-600",
        bgColor: "bg-teal-600/10",
      },
    
    // {
    //   label: 'Image Generation',
    //   icon: ImageIcon,
    //   color: "text-pink-700",
    //   bgColor: "bg-pink-700/10",
    //   href: '/image',
    // },
    // {
    //   label: 'Video Generation',
    //   icon: VideoIcon,
    //   color: "text-orange-700",
    //   bgColor: "bg-orange-700/10",
    //   href: '/video',
    // },
    {
      label: 'Notes',
      icon: PencilLine,
      color: "text-yellow-600",
      bgColor: "bg-yellow-600/10",
      href: '/documents',
    },
    {
      label: 'Quiz',
      icon: Brain,
      color: "text-rose-600",
      bgColor: "bg-rose-600/10",
      href: '/quiz',
    },
  ];
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center ">
        Quick Learn lets EDUQUIC !
        </h2>
        {/* <p className="text-muted-foreground font-light text-sm md:text-lg text-center  ">
        Accelerate Your Knowledge with Eduquic 
        </p> */}
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {routes.map((route) => (
          <Card onClick={() => router.push(route.href)} key={route.href} className="p-4 border-black/5  dark:bg-rose-200/5 dark:hover:bg-rose-100/10 dark:hover:shadow-sm flex items-center justify-between hover:shadow-none shadow-lg transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", route.bgColor)}>
                <route.icon className={cn("w-8 h-8 animate-pulse", route.color)} />
              </div>
              <div className="font-semibold">
                {route.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 animate-[spin_ease-in-out_2s_1_1s] " />
          </Card>
        ))}
      </div>
    </div>
  );
}