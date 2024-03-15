"use client";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/clerk-react";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";
import { SearchInput } from "./search-input";
import { ModeToggle } from "./mode-toggle";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";
  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto px-2 font-semibold">
        {isTeacherPage || isCoursePage ? (
          <Link
            href="/dashboard"
            className="flex items-center justify-center content-center"
          >
            <Button size="sm" variant="ghost">
              <LogOut className="h-6 w-6 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link
            href="/teacher/courses"
            className="flex items-center justify-center content-center"
          >
            <Button
              size="sm"
              variant="ghost"
              className="flex items-center justify-center bottom-5"
            >
              Teacher mode
            </Button>
          </Link>
        ) : null}
        <div className=" flex self-center justify-center items-center mr-2">
          <ModeToggle />
        </div>

        <div className="h-6 w-6 flex items-center self-center justify-center mr-auto ">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </>
  );
};
