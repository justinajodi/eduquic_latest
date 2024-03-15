"use client";

import {useAuth } from "@clerk/clerk-react";

import { redirect } from "next/navigation";

import { Spinner } from "@/components/spinner";
import { SearchCommand } from "@/components/search-command";

import { Navigation } from "./_components/navigation";
import { useState } from "react";

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!userId) {
    return redirect("/");
  }

  return ( 
    <div className="h-full flex  mt:20 ">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
   );
}
 
export default MainLayout;