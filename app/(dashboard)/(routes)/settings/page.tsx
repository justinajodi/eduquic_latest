import { Settings } from "lucide-react";

import { Course } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";


import { Heading } from "@/components/heading";

import { redirect } from "next/navigation";
import { CalendarDemo } from "./_components/calendar";
import { SubscriptionButton } from "@/components/subscription-button";
import { auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default async function Dashboard() {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }
  // const isPro = await checkSubscription();
  return (
    <div className="h-full flex flex-col items-start p-6 space-y-4">
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-rose-500"
        bgColor="bg-rose-500/10"
      />

      <div className="ml-10 flex justify-center items-center">Change Theme : <ModeToggle /> </div>
      <div className="ml-10"><CalendarDemo /></div>
    </div>
  )
}