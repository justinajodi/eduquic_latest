"use client";

import { BarChart, Brain, Compass, Layers, Layout, List, MessageSquare, PenLine, Settings, User} from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";
import { FcAbout } from "react-icons/fc";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
  {
    
    icon:MessageSquare,
    label: "Chat",
    href: "/chat",
  },
  {
    
    icon:Layers,
    label: "Summarizer",
    href: "/summarizer",
  },
  {
    
    icon:PenLine,
    label: "Note",
    href: "/documents",
  },
  {
    
    icon:Brain,
    label: "Quiz",
    href: "/quiz",
  },
  {
    
    icon: User,
    label: "About",
    href: "/about",
  },
  {
    
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
  // {
  //   icon: User,
  //   label: "Students",
  //   href: "/teacher/students",
  // },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
     
    </div>
   
  )
}